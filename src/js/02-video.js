import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const data = {
  duration: 61.857,
  percent: 0.485,
  seconds: 30,
};

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
player.on('timeupdate', throttle(onTimeupdate, 500));
 
function onTimeupdate (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds)
};

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then((seconds) => {
        console.log(seconds);
}).catch((error) => {
    console.log(error);    
});


