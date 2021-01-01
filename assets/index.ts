import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playBtn: HTMLElement = document.querySelector('#playBtn');
playBtn.onclick = () => player.tooglePlay();

const muteBtn: HTMLElement = document.querySelector('#muteBtn');
muteBtn.onclick = () => player.toogleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
