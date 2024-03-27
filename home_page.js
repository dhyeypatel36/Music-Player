const allSong = [{  name: `Beliver` , 
                    date: `22/05/2018`, 
                    length: `3:24` , 
                    src: `Audio/Latest-Release-Song/Beliver/13419_4.jpg`, 
                    songPath: `Audio/Latest-Release-Song/Beliver/Beliver.mp3`,
                    language: `English`,
                    artist: `Imagine Dragons`} , 
                    
                    {name: `Man Mast Magan` , 
                    date: `02/05/2015` , 
                    length: `4:40` , 
                    src: `Audio/Latest-Release-Song/Man Mast Magan/maxresdefault.jpg` , 
                    songPath: `Audio/Latest-Release-Song/Man Mast Magan/Man Mast Magan.mp3`,
                    language: `Hindi`,
                    artist: `Arijit Singh`},

                    {name: `Mai Tera Hero` , 
                    date: `02/05/2015` , 
                    length: `4:40` , 
                    src: `Audio/Latest-Release-Song/Mai Tera Hero/Mai.jpg` , 
                    songPath: `Audio/Latest-Release-Song/Mai Tera Hero/Main Tera Hero.mp3`,
                    language: `Hindi`,
                    artist: `Arijit Singh`},
                
                    {name: `Zara Sa` , 
                    date: `02/05/2015` , 
                    length: `5:03` , 
                    src: `Audio/Latest-Release-Song/Zara Sa/19356_4.jpg` , 
                    songPath: `Audio/Latest-Release-Song/Zara Sa/Zara Sa.mp3`,
                    language: `Hindi`,
                    artist: `Imran Hashmi`},
                
                    {name: `Unstoppable` , 
                    date: `01/09/2021` , 
                    length: `01:02` , 
                    src: `https://d94thh4m1x8qv.cloudfront.net/eyJidWNrZXQiOiJkaXktbWFnYXppbmUiLCJrZXkiOiJkL2RpeS9BcnRpc3RzL1MvU2lhL3NpYXRoaXNpc2FjdGluZy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMCwicHJvZ3Jlc3NpdmUiOnRydWUsInRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pemVTY2FucyI6dHJ1ZX0sInJlc2l6ZSI6eyJ3aWR0aCI6MTUwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=` , 
                    songPath: `https://h799xu-a.akamaihd.net/downloads/ringtones/files/mp3/music-glitch-1u-unstoppable-54834.mp3`,
                    language: `English`,
                    artist: `Sia`},
                
                    {name: `Alan Walker` , 
                    date: `04/11/2022` , 
                    length: `00:30` , 
                    src: `data:image/jpeg;base64,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` , 
                    songPath: `Audio/Latest-Release-Song/Alan Walker/Alan Walker.mp3`,
                    language: `English`,
                    artist: `Alan Walker`}];

                    

const latestReleaseSong = [{name: `Beliver` , 
                            date: `02/05/1995`, 
                            length: `3:24` , 
                            src: `Audio/Latest-Release-Song/Beliver/13419_4.jpg`, 
                            songPath: `Audio/Latest-Release-Song/Beliver/Beliver.mp3`,
                            language: `English`} , 
                            
                            {name: `Man Mast Magan` , 
                            date: `02/05/2015` , 
                            length: `4:40` , 
                            src: `Audio/Latest-Release-Song/Man Mast Magan/maxresdefault.jpg` , 
                            songPath: `Audio/Latest-Release-Song/Man Mast Magan/Man Mast Magan.mp3`,
                            language: `Hindi`},
                        
                            {name: `Mai Tera Hero` , 
                            date: `02/05/2015` , 
                            length: `4:30` , 
                            src: `Audio/Latest-Release-Song/Mai Tera Hero/Mai.jpg` , 
                            songPath: `Audio/Latest-Release-Song/Mai Tera Hero/Main Tera Hero.mp3`,
                            language: `Hindi`}];


// /////////////////////////////////////// LATEST RELEASE ////////////////////////////////////////////

function latest_release(){
    document.querySelector('.latest-release-content-box').innerHTML = '';
    const latest_release_content_box = document.querySelector('.latest-release-content-box');
    latestReleaseSong.forEach((latestReleaseSon) => {
        const lrBox = document.createElement('div');
        lrBox.classList.add('l-r-box');
        lrBox.classList.add('dis-flex-row');
        latest_release_content_box.appendChild(lrBox);

        const lrImage = document.createElement('div');
        lrImage.classList.add('l-r-image');
        lrBox.appendChild(lrImage);

        const aImage = document.createElement('a');
        aImage.href = '';
        lrImage.appendChild(aImage);

        const img = document.createElement('img');
        img.src = latestReleaseSon.src;
        aImage.appendChild(img);

        const adjust_center = document.createElement('div');
        adjust_center.classList.add('adjust-center');
        adjust_center.classList.add('dis-flex-col');
        lrBox.appendChild(adjust_center);

        const more_icon = document.createElement('div');
        more_icon.classList.add('more-icon');
        adjust_center.appendChild(more_icon);

        const aHam = document.createElement('a');
        aHam.classList.add('a-decoration-none');
        more_icon.appendChild(aHam);

        const hamIcon = document.createElement('i');
        hamIcon.classList.add('fa-solid');
        hamIcon.classList.add('fa-ellipsis');
        aHam.appendChild(hamIcon);

        const btnHoverBox = document.createElement('div');
        btnHoverBox.classList.add('btn-box');
        more_icon.appendChild(btnHoverBox);

        const play_icon_f_1 = document.createElement('div');
        play_icon_f_1.classList.add('play-icon-f');
        btnHoverBox.appendChild(play_icon_f_1);

        const fa_play1 = document.createElement('i');
        fa_play1.classList.add('fa-solid');
        fa_play1.classList.add('fa-play');
        play_icon_f_1.appendChild(fa_play1);
        
        const h4_1 = document.createElement('h4');
        h4_1.innerHTML = 'Play Now'
        play_icon_f_1.appendChild(h4_1);

        const hrElement = document.createElement('hr');
        btnHoverBox.appendChild(hrElement);

        const play_icon_f_2 = document.createElement('div');
        play_icon_f_2.classList.add('play-icon-f');
        btnHoverBox.appendChild(play_icon_f_2);

        const fa_play2 = document.createElement('i');
        fa_play2.classList.add('fa-solid');
        fa_play2.classList.add('fa-plus');
        play_icon_f_2.appendChild(fa_play2);
        
        const h4_2 = document.createElement('h4');
        h4_2.innerHTML = 'Add To Queue';
        play_icon_f_2.appendChild(h4_2);

        const hrElement2 = document.createElement('hr');
        btnHoverBox.appendChild(hrElement2);

        const play_icon_f_3 = document.createElement('div');
        play_icon_f_3.classList.add('play-icon-f');
        btnHoverBox.appendChild(play_icon_f_3);

        const fa_play3 = document.createElement('i');
        fa_play3.classList.add('fa-solid');
        fa_play3.classList.add('fa-bookmark');
        play_icon_f_3.appendChild(fa_play3);
        
        const h4_3 = document.createElement('h4');
        h4_3.innerHTML = 'Add To Favourites';
        play_icon_f_3.appendChild(h4_3);

        const hrElement3 = document.createElement('hr');
        btnHoverBox.appendChild(hrElement3);

        const play_icon_f_4 = document.createElement('div');
        play_icon_f_4.classList.add('play-icon-f');
        btnHoverBox.appendChild(play_icon_f_4);

        const fa_play4 = document.createElement('i');
        fa_play4.classList.add('fa-solid');
        fa_play4.classList.add('fa-circle-info');
        play_icon_f_4.appendChild(fa_play4);
        
        const h4_4 = document.createElement('h4');
        h4_4.innerHTML = 'Get Info';
        play_icon_f_4.appendChild(h4_4);

        const lrSongDetail = document.createElement('div');
        lrSongDetail.classList.add('l-r-song-detail');
        lrSongDetail.classList.add('dis-flex-row');
        adjust_center.appendChild(lrSongDetail);

        const songName = document.createElement('div');
        songName.classList.add('song-name');
        lrSongDetail.appendChild(songName);

        const aSongName = document.createElement('a');
        aSongName.classList.add('a-decoration-none');
        songName.appendChild(aSongName);

        const h4SongName = document.createElement('h4');
        h4SongName.innerHTML = latestReleaseSon.name;
        aSongName.appendChild(h4SongName);

        const songDura = document.createElement('div');
        songDura.classList.add('song-duration');
        songDura.innerHTML = latestReleaseSon.length;
        lrSongDetail.appendChild(songDura);

        const songReleaseDate = document.createElement('div');
        songReleaseDate.classList.add('song-release-date');
        songReleaseDate.innerHTML = latestReleaseSon.date;
        adjust_center.appendChild(songReleaseDate);


        //Play Song Listener
        function getSong(){
            const name = songName.textContent;
            for(const song of latestReleaseSong){
                if(song.name == name){
                    document.querySelector('.current-playing-song-img').innerText = '';
                        document.querySelector('.current-playing-song-name').innerText = '';

                        const playing = document.querySelector('.current-playing-song-img');
                        const img = document.createElement('img');
                        img.src = song.src;
                        playing.appendChild(img);

                        const playingName = document.querySelector('.current-playing-song-name');
                        const name = document.createElement('h3');
                        name.innerHTML = song.name;
                        playingName.appendChild(name);
                        return song.songPath;
                };
            }
        }
        
        play_icon_f_1.addEventListener('click', () => {
            const path = getSong();
            document.querySelector('#audio-control').style.display = 'block';
            document.querySelector('.song-img').innerHTML = '';
            const control_audio = document.querySelector('.song-img');
            const aud = document.createElement('audio');
            control_audio.appendChild(aud);
            aud.setAttribute('controls' , '');
            aud.setAttribute('controlsList' , 'nodownload');
            aud.setAttribute('loop' , '');
            aud.setAttribute('autoplay' , '');
            aud.src = path;
            aud.play;
        });
    });
}

////////// ADD ALL SONGS TO QUEUE ////////////////// 

function queue(){

    const mainQueueBox = document.querySelector('.main-queue');

    allSong.forEach((song) => {
        const queueOneFullBox = document.createElement('div');
        queueOneFullBox.classList.add('main-queue-one-full-box');
        queueOneFullBox.classList.add('dis-flex-row');
        mainQueueBox.appendChild(queueOneFullBox);

        const songImg = document.createElement('div');
        songImg.classList.add('queue-song-img');
        queueOneFullBox.appendChild(songImg);

        const img = document.createElement('img');
        img.src = song.src;
        songImg.appendChild(img);

        const songNameSingerName = document.createElement('div');
        songNameSingerName.classList.add('song-name-and-singer-name');
        songNameSingerName.classList.add('dis-flex-col');
        queueOneFullBox.appendChild(songNameSingerName);

        const songName = document.createElement('div');
        songName.classList.add('song-name');
        songNameSingerName.appendChild(songName);

        const aSongName = document.createElement('a');
        aSongName.classList.add('a-decoration-none');
        aSongName.innerHTML = song.name;
        songName.appendChild(aSongName)
        aSongName.style.cursor = 'pointer';

        const singerName = document.createElement('div');
        singerName.classList.add('singer-name');
        songNameSingerName.appendChild(singerName);

        const aSingerName = document.createElement('a');
        aSingerName.classList.add('a-decoration-none');
        aSingerName.innerHTML = song.artist;
        singerName.appendChild(aSingerName);

        const likeIcon = document.createElement('div');
        likeIcon.classList.add('like-icon');
        likeIcon.classList.add('dis-flex-row');
        queueOneFullBox.appendChild(likeIcon);

        const faHeart = document.createElement('i');
        faHeart.classList.add('fa-solid');
        faHeart.classList.add('fa-heart');
        likeIcon.appendChild(faHeart);

        //Play Song Listener
        function getSong(){
            const name = songName.textContent;
            for(const song of allSong){
                if(song.name == name){
                    return song.songPath;
                };
            }
        }
        
        songName.addEventListener('click', () => {
            const path = getSong();
            document.querySelector('.current-playing-song-img').innerText = '';
            document.querySelector('.current-playing-song-name').innerText = '';

            const playing = document.querySelector('.current-playing-song-img');

            const img = document.createElement('img');
            img.src = song.src;
            playing.appendChild(img);

            const playingName = document.querySelector('.current-playing-song-name');
            const name = document.createElement('h3');
            name.innerHTML = song.name;
            playingName.appendChild(name);

            document.querySelector('#audio-control').style.display = 'block';
            document.querySelector('.song-img').innerHTML = '';
            const control_audio = document.querySelector('.song-img');
            const aud = document.createElement('audio');
            control_audio.appendChild(aud);
            aud.setAttribute('controls' , '');
            aud.setAttribute('controlsList' , 'nodownload');
            aud.setAttribute('loop' , '');
            aud.setAttribute('autoplay' , '');
            aud.src = path;
            aud.play;
        });

        faHeart.addEventListener('click' , (event) => {
            event.preventDefault();
            allSong.find((song) => {
                if(songName.textContent === song.name){
                    if(faHeart.style.color === 'red'){
                        faHeart.style.color = '';
                    }else{
                        faHeart.style.color = 'red';
                    }
                }
            });
        });
    });
}


// //////////////////////////////UPDATE SONG IN LATEST ENGLISH///////////////////////////

function latestEnglish(){
    const latestEnglishBox = document.querySelector('.latest-english-main-content-box');

    allSong.find((song) => {
        if(song.language === 'English'){
            const latestEnglishSingleBox = document.createElement('div');
            latestEnglishSingleBox.classList.add('latest-song-single-box');
            latestEnglishBox.appendChild(latestEnglishSingleBox);

            const latestSongImg = document.createElement('div');
            latestSongImg.classList.add('latest-song-img');
            latestEnglishSingleBox.appendChild(latestSongImg);

            const img = document.createElement('img');
            img.src = song.src;
            latestSongImg.appendChild(img);

            const latestSongDetail = document.createElement('div');
            latestSongDetail.classList.add('latest-song-detail');
            latestSongDetail.classList.add('dis-flex-col');
            latestEnglishSingleBox.appendChild(latestSongDetail);

            const latestSongName = document.createElement('div');
            latestSongName.classList.add('latest-song-name');
            latestSongName.innerHTML = song.name;
            latestSongDetail.appendChild(latestSongName);

            const latestSongReleaseDdate = document.createElement('div');
            latestSongReleaseDdate.classList.add('latest-song-release-date');
            latestSongReleaseDdate.innerHTML = song.date;
            latestSongDetail.appendChild(latestSongReleaseDdate);

            //Play Song Listener
            function getSong(){
                const name = latestSongName.textContent;
                for(const song of allSong){
                    if(song.name == name){
                        document.querySelector('.current-playing-song-img').innerText = '';
                        document.querySelector('.current-playing-song-name').innerText = '';

                        const playing = document.querySelector('.current-playing-song-img');
                        const img = document.createElement('img');
                        img.src = song.src;
                        playing.appendChild(img);

                        const playingName = document.querySelector('.current-playing-song-name');
                        const name = document.createElement('h3');
                        name.innerHTML = song.name;
                        playingName.appendChild(name);
                        return song.songPath;
                    };
                }
            }
            
            latestEnglishSingleBox.addEventListener('click', () => {
                const path = getSong();
                document.querySelector('#audio-control').style.display = 'block';
                document.querySelector('.song-img').innerHTML = '';
                const control_audio = document.querySelector('.song-img');
                const aud = document.createElement('audio');
                control_audio.appendChild(aud);
                aud.setAttribute('controls' , '');
                aud.setAttribute('controlsList' , 'nodownload');
                aud.setAttribute('loop' , '');
                aud.setAttribute('autoplay' , '');
                aud.src = path;
                aud.play;
            });
        }
    });
}

latest_release();
latestEnglish();
queue();


// ///////////////////////STORE PLAY LIST NAME IN PLAYLIST ARRAY ///////////////////////////

let playlist = [];

const form = document.querySelector('#playlist-form');

// ///////////////////////////////PLAYLIST FORM TO CREATE A NEW PLAYLIST ///////////////////////////////

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const input = document.querySelector('#playlist-form input');
    const newPlayList = {
        name:input.value,
        song: []
    }
    playlist.push(newPlayList);
    playListDiv(input.value);
    form.reset();
});

function playListDiv(playListName){
    document.querySelector('.current-playlist').innerHTML = '';

    const allPlaylist = document.querySelector('.all-playlist');

    const playlistName = document.createElement('div');
    playlistName.classList.add('playlist-name');
    playlistName.classList.add('dis-flex-row');
    allPlaylist.appendChild(playlistName);

    const div = document.createElement('div');
    div.setAttribute('id' , 'temp');
    div.classList.add('dis-flex-row');
    playlistName.appendChild(div);

    const h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.innerText = playListName;

    playlistName.addEventListener('click' , ()=>{
        const play = document.querySelectorAll('.playlist-name');
        play.forEach((removeClass) => {
            if(removeClass.classList.contains('selected')){
                document.querySelector('.selected #temp h3').style.color = 'white';
            }

            removeClass.classList.remove('selected');
            // removeClass.classList.contains('.selected #temp h3').style.color = 'white';
        });
        
        playlistName.classList.add('selected');
        document.querySelector('.selected #temp h3').style.color = '#7AA2E3';
        showQueueSong();
    });
}


// /////////////////////////ADD SONG INTO PLAYLIST ADD TO QUEUE BUTTON ///////////////////////////

const addToQueueBtn = document.querySelector('.add-to-playlist button');

addToQueueBtn.addEventListener('click' , ()=>{
    const selected = document.querySelector('.selected #temp h3').textContent;
    console.log(selected);
    playlist.find((playlist) => {
        if(playlist.name == selected){
            const name = document.querySelector('.current-playing-song-name').textContent;

            allSong.find((song) => {
                if(song.name == name){
                    playlist.song.push(song);
                }
            });
        }
    });

    showQueueSong();
});

// /////////////////// SHOW PLAYLIST SONG ///////////////////////////

function showQueueSong(){
    document.querySelector('.current-playlist').innerHTML = '';
    const currentPlaylist = document.querySelector('.current-playlist');
    const song = document.querySelector('.selected #temp h3').textContent;
    let play = [];

    playlist.find((s) => {
        if(s.name === song){
            play = s.song;
        }
    });

    play.forEach((son) => {
        const cPlayList = document.createElement('div');
        cPlayList.classList.add('c-playlist-box');
        cPlayList.classList.add('dis-flex-row');
        cPlayList.innerText = son.name;
        currentPlaylist.appendChild(cPlayList);
    });
}





// ///////////////////////////////// NEXT BUTTON /////////////////////////////////////////

const nextBtn = document.querySelector('.next-button');
let keepTrackOnSong = 0;

nextBtn.addEventListener('click' , () => {
    keepTrackOnSong++;

    if(keepTrackOnSong==allSong.length){
        keepTrackOnSong = 0;
    }

    const path = allSong[keepTrackOnSong].songPath;

    document.querySelector('.current-playing-song-img').innerText = '';
    document.querySelector('.current-playing-song-name').innerText = '';

    const playing = document.querySelector('.current-playing-song-img');
            
    const img = document.createElement('img');
    img.src = allSong[keepTrackOnSong].src;
    playing.appendChild(img);

    const playingName = document.querySelector('.current-playing-song-name');
    const name = document.createElement('h3');
    name.innerHTML = allSong[keepTrackOnSong].name;
    playingName.appendChild(name);


    document.querySelector('#audio-control').style.display = 'block';
    document.querySelector('.song-img').innerHTML = '';
    
    const control_audio = document.querySelector('.song-img');
    const aud = document.createElement('audio');
    control_audio.appendChild(aud);
    aud.setAttribute('controls' , '');
    aud.setAttribute('controlsList' , 'nodownload');
    aud.setAttribute('loop' , '');
    aud.setAttribute('autoplay' , '');
    aud.src = path;
    aud.play;
});

const previousBtn = document.querySelector('.previous-button');

previousBtn.addEventListener('click' , () => {
    keepTrackOnSong--;

    if(keepTrackOnSong==-1){
        keepTrackOnSong = allSong.length-1;
    }
    const path = allSong[keepTrackOnSong].songPath;

    document.querySelector('.current-playing-song-img').innerText = '';
    document.querySelector('.current-playing-song-name').innerText = '';

    const playing = document.querySelector('.current-playing-song-img');
            
    const img = document.createElement('img');
    img.src = allSong[keepTrackOnSong].src;
    playing.appendChild(img);

    const playingName = document.querySelector('.current-playing-song-name');
    const name = document.createElement('h3');
    name.innerHTML = allSong[keepTrackOnSong].name;
    playingName.appendChild(name);


    document.querySelector('#audio-control').style.display = 'block';
    document.querySelector('.song-img').innerHTML = '';
    
    const control_audio = document.querySelector('.song-img');
    const aud = document.createElement('audio');
    control_audio.appendChild(aud);
    aud.setAttribute('controls' , '');
    aud.setAttribute('controlsList' , 'nodownload');
    aud.setAttribute('loop' , '');
    aud.setAttribute('autoplay' , '');
    aud.src = path;
    aud.play;
});