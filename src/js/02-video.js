import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 500));
 
function onTimeupdate (data) {
    localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(data.seconds))
};

const SavedTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (SavedTime) {
  player.setCurrentTime(SavedTime);
};



