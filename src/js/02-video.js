import Player from '@vimeo/player';
console.log(Player)
// const data = {}
const player = document.querySelector('#vimeo-player');
player.addEventListener('play',onPlay );
function onPlay(data) {
    console.log(data)
    
};

// player.on('play', onPlay);