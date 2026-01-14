console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement  = new Audio('musics/Alex Hagen - Superhero [NCS Release].mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs =[
    {songName:"SUPERHERO", filePath:"musics/Alex Hagen - Superhero [NCS Release].mp3",coverPath:"coverImage/Superhero_29.webp"},

    {songName:"Fearless Funk", filePath:"musics/DR MØB, Chris Linton - Fearless Funk [NCS Release].mp3", coverPath:"coverImage/1200x630bf-60.jpg"},

    {songName:"FAVELA", filePath:"musics/MXZI, Deno - FAVELA [NCS Release].mp3", coverPath:"coverImage/unnamed.jpg"},

    {songName:"STUCKINMYHEAD!", filePath:"musics/youth® - stuckinmyhead! [NCS Release].mp3", coverPath:"coverImage/maxresdefault.jpg"},

    {songName:"HARINEZUMI", filePath:"musics/waera - harinezumi [NCS Release].mp3", coverPath:"coverImage/hqdefault.jpg"},

    {songName:"VANDALI", filePath:"musics/Aditya Sharma - VANDALI [NCS Release].mp3", coverPath:"coverImage/unnamed (1).jpg"},

    {songName:"Where We Are", filePath:"musics/Sync, Triangle, Eytan Peled - Where We Are [NCS Release].mp3", coverPath:"coverImage/ab67616d0000b273aeaadf0538857a477cbf5544.jpg"},

    {songName:"HYPNOTIZED!", filePath:"musics/noaa! - HYPNOTIZED! [NCS Release].mp3", coverPath:"coverImage/size_m.jpg"},

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        //Update the current song item button to pause
        makeAllPLays(); // reset all first
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        //Update the current song item button to play
         document.getElementById(songIndex).classList.remove('fa-circle-pause');
        document.getElementById(songIndex).classList.add('fa-circle-play');
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
//makeAllPlays function
const makeAllPLays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}
//Song click play (MOST IMPORTANT)
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPLays();
       
         songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        

        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});
//Next Song
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
     audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
});
//Previous Song
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
     audioElement.src = songs[songIndex].filePath;
     masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
    
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
});

