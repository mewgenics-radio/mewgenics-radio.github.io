class MewgenicsRadio {
    constructor() {
        this.tracks = [];
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.isShuffle = false;
        this.loopMode = 'all'; // 'all', 'one', 'off'
        this.shuffledIndices = [];

        this.audio = document.getElementById('audio-player');
        this.playBtn = document.getElementById('play-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.loopBtn = document.getElementById('loop-btn');
        this.volumeSlider = document.getElementById('volume-slider');
        this.progressBar = document.querySelector('.progress-bar');
        this.progress = document.getElementById('progress');
        this.trackTitle = document.getElementById('track-title');
        this.trackArtist = document.getElementById('track-artist');
        this.currentTimeEl = document.getElementById('current-time');
        this.durationEl = document.getElementById('duration');
        this.volumePercent = document.getElementById('volume-percent');
        this.playlistList = document.getElementById('playlist-list');

        this.init();
    }

    async init() {
        await this.loadTracks();
        this.setupEventListeners();
        this.updatePlaylist();
        if (this.tracks.length > 0) {
            this.loadTrack(0);
        }
    }

    async loadTracks() {
        try {
            // Fetch the list of files from the tracks directory
            const response = await fetch('tracks/');
            const html = await response.text();
            
            // Parse the HTML to extract MP3 files
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Look for links to MP3 files
            const links = doc.querySelectorAll('a');
            const mp3Files = Array.from(links)
                .map(link => link.href)
                .filter(href => href.endsWith('.mp3'))
                .map(href => {
                    const filename = href.split('/').pop();
                    return {
                        name: decodeURIComponent(filename.replace('.mp3', '')),
                        path: `tracks/${filename}`
                    };
                })
                .sort((a, b) => a.name.localeCompare(b.name));

            this.tracks = mp3Files;
            console.log(`Loaded ${this.tracks.length} tracks`);
        } catch (error) {
            console.log('Directory listing not available. Please ensure tracks are accessible.');
            // Fallback: you can manually add tracks here if needed
            this.tracks = [];
        }
    }

    setupEventListeners() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.previousTrack());
        this.nextBtn.addEventListener('click', () => this.nextTrack());
        this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
        this.loopBtn.addEventListener('click', () => this.toggleLoop());
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        this.progressBar.addEventListener('click', (e) => this.seek(e));

        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.handleTrackEnd());
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());

        this.playlistList.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            if (!isNaN(index)) {
                this.loadTrack(index);
                this.play();
            }
        });
    }

    loadTrack(index) {
        if (this.tracks.length === 0) return;

        this.currentTrackIndex = index;
        const track = this.tracks[index];
        
        this.audio.src = track.path;
        this.trackTitle.textContent = track.name;
        this.trackArtist.textContent = 'Mewgenics Radio';
        
        this.updatePlaylist();
    }

    togglePlay() {
        if (this.tracks.length === 0) return;
        
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audio.play().catch(error => console.error('Play error:', error));
        this.isPlaying = true;
        this.updatePlayButton();
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayButton();
    }

    nextTrack() {
        if (this.tracks.length === 0) return;

        if (this.isShuffle) {
            this.currentTrackIndex = Math.floor(Math.random() * this.tracks.length);
        } else {
            this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        }

        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) {
            this.play();
        }
    }

    previousTrack() {
        if (this.tracks.length === 0) return;

        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) {
            this.play();
        }
    }

    toggleShuffle() {
        this.isShuffle = !this.isShuffle;
        this.shuffleBtn.style.opacity = this.isShuffle ? '1' : '0.5';
        this.shuffleBtn.style.background = this.isShuffle ? '#667eea' : '#f0f0f0';
        this.shuffleBtn.style.color = this.isShuffle ? 'white' : 'black';
    }

    toggleLoop() {
        const modes = ['all', 'one', 'off'];
        const currentModeIndex = modes.indexOf(this.loopMode);
        this.loopMode = modes[(currentModeIndex + 1) % modes.length];

        this.loopBtn.style.opacity = this.loopMode === 'off' ? '0.5' : '1';
        
        if (this.loopMode === 'one') {
            this.loopBtn.style.background = '#764ba2';
            this.loopBtn.style.color = 'white';
        } else if (this.loopMode === 'all') {
            this.loopBtn.style.background = '#667eea';
            this.loopBtn.style.color = 'white';
        } else {
            this.loopBtn.style.background = '#f0f0f0';
            this.loopBtn.style.color = 'black';
        }
    }

    handleTrackEnd() {
        if (this.loopMode === 'one') {
            this.audio.currentTime = 0;
            this.play();
        } else if (this.loopMode === 'all') {
            this.nextTrack();
        } else {
            // No loop, stop playing
            this.pause();
        }
    }

    setVolume(value) {
        this.audio.volume = value / 100;
        this.volumePercent.textContent = value + '%';
    }

    seek(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.audio.currentTime = percent * this.audio.duration;
    }

    updateProgress() {
        if (this.audio.duration) {
            const percent = (this.audio.currentTime / this.audio.duration) * 100;
            this.progress.style.width = percent + '%';
            this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
        }
    }

    updateDuration() {
        this.durationEl.textContent = this.formatTime(this.audio.duration);
    }

    updatePlayButton() {
        if (this.isPlaying) {
            this.playBtn.textContent = '⏸️';
            this.playBtn.classList.add('playing');
        } else {
            this.playBtn.textContent = '▶️';
            this.playBtn.classList.remove('playing');
        }
    }

    updatePlaylist() {
        this.playlistList.innerHTML = '';
        this.tracks.forEach((track, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${track.name}`;
            li.dataset.index = index;
            if (index === this.currentTrackIndex) {
                li.classList.add('active');
            }
            this.playlistList.appendChild(li);
        });
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
}

// Initialize the radio when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MewgenicsRadio();
});
