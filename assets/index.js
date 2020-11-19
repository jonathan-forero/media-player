import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playBtn = document.querySelector('#playBtn');
playBtn.onclick = () => player.tooglePlay();

const muteBtn = document.querySelector('#muteBtn');
muteBtn.onclick = () => player.toogleMute();
