class MewgenicsRadio {
    constructor() {
        // Встроенный список треков - работает без сервера!
        this.tracks = [
            { name: "Mewgenics OST - Track 1 - Eatin' Rats", path: "tracks/Mewgenics OST - Track 1 - Eatin' Rats.mp3" },
            { name: "Mewgenics OST - Track 2 - Flush (Feat. Geoff Pearlman)", path: "tracks/Mewgenics OST - Track 2 - Flush (Feat. Geoff Pearlman).mp3" },
            { name: "Mewgenics OST - Track 3 - Crystalline Dreams (Feat. Kristine Slipp)", path: "tracks/Mewgenics OST - Track 3 - Crystalline Dreams (Feat. Kristine Slipp).mp3" },
            { name: "Mewgenics OST - Track 4 - Chumbucket Kitty (Feat. Chandler Travis)", path: "tracks/Mewgenics OST - Track 4 - Chumbucket Kitty (Feat. Chandler Travis).mp3" },
            { name: "Mewgenics OST - Track 5 - Them Kitty Bones (Feat. Zoe Lewis)", path: "tracks/Mewgenics OST - Track 5 - Them Kitty Bones (Feat. Zoe Lewis).mp3" },
            { name: "Mewgenics OST - Track 6 - Guillotina (Feat. Carla Kihlstedt)", path: "tracks/Mewgenics OST - Track 6 - Guillotina (Feat. Carla Kihlstedt).mp3" },
            { name: "Mewgenics OST - Track 7 - Lonesome Road (Feat. Freddi Price)", path: "tracks/Mewgenics OST - Track 7 - Lonesome Road (Feat. Freddi Price).mp3" },
            { name: "Mewgenics OST - Track 8 - Alone In The Dark", path: "tracks/Mewgenics OST - Track 8 - Alone In The Dark.mp3" },
            { name: "Mewgenics OST - Track 9 - Down With The Devil (Feat. Eric McFadden)", path: "tracks/Mewgenics OST - Track 9 - Down With The Devil (Feat. Eric McFadden).mp3" },
            { name: "Mewgenics OST - Track 10 - Feline Invader (Feat. Emily Wade Adams)", path: "tracks/Mewgenics OST - Track 10 - Feline Invader (Feat. Emily Wade Adams).mp3" },
            { name: "Mewgenics OST - Track 11 - So High (Feat. Spencer Day)", path: "tracks/Mewgenics OST - Track 11 - So High (Feat. Spencer Day).mp3" },
            { name: "Mewgenics OST - Track 12 - Brush Your Teeth (Feat. Anna Chan)", path: "tracks/Mewgenics OST - Track 12 - Brush Your Teeth (Feat. Anna Chan).mp3" },
            { name: "Mewgenics OST - Track 13 - Get In The Cage (Feat. Eric McFadden)", path: "tracks/Mewgenics OST - Track 13 - Get In The Cage (Feat. Eric McFadden).mp3" },
            { name: "Mewgenics OST - Track 14 - Sweet Delicious (Feat. Aaron Lazar)", path: "tracks/Mewgenics OST - Track 14 - Sweet Delicious (Feat. Aaron Lazar).mp3" },
            { name: "Mewgenics OST - Track 15 - Throbbing King (Feat. Aaron Lazar)", path: "tracks/Mewgenics OST - Track 15 - Throbbing King (Feat. Aaron Lazar).mp3" },
            { name: "Mewgenics OST - Track 16 - Endless Misery", path: "tracks/Mewgenics OST - Track 16 - Endless Misery.mp3" },
            { name: "Mewgenics OST - Track 17 - Mom I Really Hate You (Feat. Kami Lyle and Tallulah Bossi)", path: "tracks/Mewgenics OST - Track 17 - Mom I Really Hate You (Feat. Kami Lyle and Tallulah Bossi).mp3" },
            { name: "Mewgenics OST - Track 18 - Tuff (Feat. Chandler Travis)", path: "tracks/Mewgenics OST - Track 18 - Tuff (Feat. Chandler Travis).mp3" },
            { name: "Mewgenics OST - Track 19 - HUMANICIDE (Feat. Billy Campion)", path: "tracks/Mewgenics OST - Track 19 - HUMANICIDE (Feat. Billy Campion).mp3" },
            { name: "Mewgenics OST - Track 20 - We're Dead (Feat. Tanya Donelly)", path: "tracks/Mewgenics OST - Track 20 - We're Dead (Feat. Tanya Donelly).mp3" },
            { name: "Mewgenics OST - Track 21 - Taser Paws (Feat. Carla Kihlstedt)", path: "tracks/Mewgenics OST - Track 21 - Taser Paws (Feat. Carla Kihlstedt).mp3" },
            { name: "Mewgenics OST - Track 22 - Chaos (Feat. Storm Large)", path: "tracks/Mewgenics OST - Track 22 - Chaos (Feat. Storm Large).mp3" },
            { name: "Mewgenics OST - Track 23 - Crazy Days", path: "tracks/Mewgenics OST - Track 23 - Crazy Days.mp3" },
            { name: "Mewgenics OST - Track 24 - Bolt Of Lightning", path: "tracks/Mewgenics OST - Track 24 - Bolt Of Lightning.mp3" },
            { name: "Mewgenics OST - Track 25 - The Crack of Doom (Feat. Carla Kihlstedt)", path: "tracks/Mewgenics OST - Track 25 - The Crack of Doom (Feat. Carla Kihlstedt).mp3" },
            { name: "Mewgenics OST - Track 26 - Angel Wings (Feat. Siobhan Magnus)", path: "tracks/Mewgenics OST - Track 26 - Angel Wings (Feat. Siobhan Magnus).mp3" },
            { name: "Mewgenics OST - Track 27 - Dig Your Own Grave (Feat. Tianna Esperanza)", path: "tracks/Mewgenics OST - Track 27 - Dig Your Own Grave (Feat. Tianna Esperanza).mp3" },
            { name: "Mewgenics OST - Track 28 - Future Meets the Past (Feat. Freddi Price)", path: "tracks/Mewgenics OST - Track 28 - Future Meets the Past (Feat. Freddi Price).mp3" },
            { name: "Mewgenics OST - Track 29 - Eatin' Rats (Instrumental)", path: "tracks/Mewgenics OST - Track 29 - Eatin' Rats (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 30 - Flush (Instrumental)", path: "tracks/Mewgenics OST - Track 30 - Flush (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 31 - Crystalline Dreams (Instrumental)", path: "tracks/Mewgenics OST - Track 31 - Crystalline Dreams (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 32 - Chumbucket Kitty (Instrumental)", path: "tracks/Mewgenics OST - Track 32 - Chumbucket Kitty (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 33 - Them Kitty Bones (Instrumental)", path: "tracks/Mewgenics OST - Track 33 - Them Kitty Bones (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 34 - Guillotina (Instrumental)", path: "tracks/Mewgenics OST - Track 34 - Guillotina (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 35 - Lonesome Road (Instrumental)", path: "tracks/Mewgenics OST - Track 35 - Lonesome Road (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 36 - Alone In The Dark (Instrumental)", path: "tracks/Mewgenics OST - Track 36 - Alone In The Dark (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 37 - Down With The Devil (Instrumental)", path: "tracks/Mewgenics OST - Track 37 - Down With The Devil (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 38 - Feline Invader (Instrumental)", path: "tracks/Mewgenics OST - Track 38 - Feline Invader (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 39 - So High (Instrumental)", path: "tracks/Mewgenics OST - Track 39 - So High (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 40 - Brush Your Teeth (Instrumental)", path: "tracks/Mewgenics OST - Track 40 - Brush Your Teeth (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 41 - Get In The Cage (Instrumental)", path: "tracks/Mewgenics OST - Track 41 - Get In The Cage (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 42 - Sweet Delicious (Instrumental)", path: "tracks/Mewgenics OST - Track 42 - Sweet Delicious (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 43 - Throbbing King (Instrumental)", path: "tracks/Mewgenics OST - Track 43 - Throbbing King (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 44 - Endless Misery (Instrumental)", path: "tracks/Mewgenics OST - Track 44 - Endless Misery (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 45 - Mom I Really Hate You (Instrumental)", path: "tracks/Mewgenics OST - Track 45 - Mom I Really Hate You (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 46 - Tuff (Instrumental)", path: "tracks/Mewgenics OST - Track 46 - Tuff (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 47 - HUMANICIDE (Instrumental)", path: "tracks/Mewgenics OST - Track 47 - HUMANICIDE (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 48 - We're Dead (Instrumental)", path: "tracks/Mewgenics OST - Track 48 - We're Dead (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 49 - Taser Paws (Instrumental)", path: "tracks/Mewgenics OST - Track 49 - Taser Paws (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 50 - Chaos (Instrumental)", path: "tracks/Mewgenics OST - Track 50 - Chaos (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 51 - Crazy Days (Instrumental)", path: "tracks/Mewgenics OST - Track 51 - Crazy Days (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 52 - Bolt Of Lightning (Instrumental)", path: "tracks/Mewgenics OST - Track 52 - Bolt Of Lightning (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 53 - Crack of Doom (Instrumental)", path: "tracks/Mewgenics OST - Track 53 - Crack of Doom (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 54 - Angel Wings (Instrumental)", path: "tracks/Mewgenics OST - Track 54 - Angel Wings (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 55 - Dig Your Own Grave (Instrumental)", path: "tracks/Mewgenics OST - Track 55 - Dig Your Own Grave (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 56 - Future Meets the Past (Instrumental)", path: "tracks/Mewgenics OST - Track 56 - Future Meets the Past (Instrumental).mp3" },
            { name: "Mewgenics OST - Track 57 - Mewgenics Theme", path: "tracks/Mewgenics OST - Track 57 - Mewgenics Theme.mp3" },
            { name: "Mewgenics OST - Track 58 - Mewgenics Theme (Alt)", path: "tracks/Mewgenics OST - Track 58 - Mewgenics Theme (Alt).mp3" },
            { name: "Mewgenics OST - Track 59 - Ballad of D. Claude", path: "tracks/Mewgenics OST - Track 59 - Ballad of D. Claude.mp3" },
            { name: "Mewgenics OST - Track 60 - Black Pussy", path: "tracks/Mewgenics OST - Track 60 - Black Pussy.mp3" },
            { name: "Mewgenics OST - Track 61 - Dirty Mittens", path: "tracks/Mewgenics OST - Track 61 - Dirty Mittens.mp3" },
            { name: "Mewgenics OST - Track 62 - Fleas and Parasites", path: "tracks/Mewgenics OST - Track 62 - Fleas and Parasites.mp3" },
            { name: "Mewgenics OST - Track 63 - Kannibal Kitty", path: "tracks/Mewgenics OST - Track 63 - Kannibal Kitty.mp3" },
            { name: "Mewgenics OST - Track 64 - Kat Fight", path: "tracks/Mewgenics OST - Track 64 - Kat Fight.mp3" },
            { name: "Mewgenics OST - Track 65 - The Legend of the Claw", path: "tracks/Mewgenics OST - Track 65 - The Legend of the Claw.mp3" },
            { name: "Mewgenics OST - Track 66 - Sad Cat Lady", path: "tracks/Mewgenics OST - Track 66 - Sad Cat Lady.mp3" },
            { name: "Mewgenics OST - Track 67 - 9th Life", path: "tracks/Mewgenics OST - Track 67 - 9th Life.mp3" },
            { name: "Mewgenics OST - Track 68 - Battle Of The Fleabags", path: "tracks/Mewgenics OST - Track 68 - Battle Of The Fleabags.mp3" },
            { name: "Mewgenics OST - Track 69 - Bravest Kat", path: "tracks/Mewgenics OST - Track 69 - Bravest Kat.mp3" },
            { name: "Mewgenics OST - Track 70 - Break His Chains", path: "tracks/Mewgenics OST - Track 70 - Break His Chains.mp3" },
            { name: "Mewgenics OST - Track 71 - Cat Race", path: "tracks/Mewgenics OST - Track 71 - Cat Race.mp3" },
            { name: "Mewgenics OST - Track 72 - Catsanova", path: "tracks/Mewgenics OST - Track 72 - Catsanova.mp3" },
            { name: "Mewgenics OST - Track 73 - Kitschy Kitty", path: "tracks/Mewgenics OST - Track 73 - Kitschy Kitty.mp3" },
            { name: "Mewgenics OST - Track 74 - Kitty March", path: "tracks/Mewgenics OST - Track 74 - Kitty March.mp3" },
            { name: "Mewgenics OST - Track 75 - Lost Kitty", path: "tracks/Mewgenics OST - Track 75 - Lost Kitty.mp3" },
            { name: "Mewgenics OST - Track 76 - Mice Cream", path: "tracks/Mewgenics OST - Track 76 - Mice Cream.mp3" },
            { name: "Mewgenics OST - Track 77 - Napping All Day", path: "tracks/Mewgenics OST - Track 77 - Napping All Day.mp3" },
            { name: "Mewgenics OST - Track 78 - Peppy Country Ditty", path: "tracks/Mewgenics OST - Track 78 - Peppy Country Ditty.mp3" },
            { name: "Mewgenics OST - Track 79 - Scrambled", path: "tracks/Mewgenics OST - Track 79 - Scrambled.mp3" },
            { name: "Mewgenics OST - Track 80 - Stray Cat", path: "tracks/Mewgenics OST - Track 80 - Stray Cat.mp3" },
            { name: "Mewgenics OST - Track 81 - Tears In My Milk Bowl", path: "tracks/Mewgenics OST - Track 81 - Tears In My Milk Bowl.mp3" },
            { name: "Mewgenics OST - Track 82 - Catamine Smoothie", path: "tracks/Mewgenics OST - Track 82 - Catamine Smoothie.mp3" }
        ];
        
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.isShuffle = false;
        this.loopMode = 'all';
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
        this.setupEventListeners();
        this.setupShareButtons();
        this.updatePlaylist();
        if (this.tracks.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.tracks.length);
            this.loadTrack(randomIndex);
        }
        console.log(`✅ Loaded ${this.tracks.length} tracks (offline mode)`);
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

    setupShareButtons() {
        const shareTrigger = document.getElementById('share-link-trigger');
        const shareButtons = document.getElementById('share-buttons');
        const shareX = document.getElementById('share-x');
        const shareFB = document.getElementById('share-fb');
        const shareCopy = document.getElementById('share-copy');
        
        const getShareText = () => {
            const trackName = this.tracks[this.currentTrackIndex]?.name || 'Mewgenics OST';
            return `🎵 I'm listening to "${trackName}" on Mewgenics Radio! 🐱\n\n🎮 Game: Mewgenics by Edmund McMillen & Tyler Glaiel\n🎶 Genre: Indie / Alternative / Cat Music`;
        };
        
        const getShareHashtags = () => {
            return 'Mewgenics,MewgenicsOST,GameSoundtrack,IndieGame,CatMusic,GamingMusic';
        };
        
        const getShareUrl = () => {
            return window.location.href;
        };
        
        if (shareTrigger) {
            shareTrigger.addEventListener('click', () => {
                if (shareButtons.style.display === 'none' || !shareButtons.style.display) {
                    shareButtons.style.display = 'flex';
                } else {
                    shareButtons.style.display = 'none';
                }
            });
        }
        
        if (shareX) {
            shareX.addEventListener('click', () => {
                const text = encodeURIComponent(getShareText());
                const hashtags = encodeURIComponent(getShareHashtags());
                const url = encodeURIComponent(getShareUrl());
                window.open(`https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}&url=${url}`, '_blank', 'width=600,height=400');
                if (shareButtons) shareButtons.style.display = 'none';
            });
        }
        
        if (shareFB) {
            shareFB.addEventListener('click', () => {
                const url = encodeURIComponent(getShareUrl());
                const quote = encodeURIComponent(`🎵 Listening to Mewgenics OST! 🐱 #Mewgenics #GameSoundtrack`);
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`, '_blank', 'width=600,height=400');
                if (shareButtons) shareButtons.style.display = 'none';
            });
        }
        
        if (shareCopy) {
            shareCopy.addEventListener('click', async () => {
                const message = `${getShareText()}\n\nListen here: ${getShareUrl()}\n\n#Mewgenics #MewgenicsOST #GameSoundtrack #IndieGame #CatMusic`;
                try {
                    await navigator.clipboard.writeText(message);
                    shareCopy.innerHTML = '<svg class="share-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg> Copied!';
                    setTimeout(() => {
                        shareCopy.innerHTML = '<svg class="share-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> Copy Link';
                        if (shareButtons) shareButtons.style.display = 'none';
                    }, 2000);
                } catch (err) {
                    alert('Could not copy link');
                }
            });
        }
    }
}

// Initialize the radio when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MewgenicsRadio();
});
