function AutoPause() {
  this.threshold = 0.25;
  this.handleIntersection = this.handleIntersection.bind(this);
  this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
}

AutoPause.prototype.togglePlayPause = function (isVisible) {
  isVisible ? this.player.play() : this.player.pause();
};

AutoPause.prototype.handleIntersection = function (entries) {
  const entry = entries[0];
  let isVisible = entry.intersectionRatio >= this.threshold;

  this.togglePlayPause(isVisible);
};

AutoPause.prototype.handleVisibilityChange = function () {
  const isVisible = document.visibilityState === 'visible';

  this.togglePlayPause(isVisible);
};

AutoPause.prototype.run = function (player) {
  this.player = player;
  const observer = new IntersectionObserver(this.handleIntersection, {
    threshold: this.threshold,
  });

  observer.observe(this.player.media);
  document.addEventListener('visibilitychange', this.handleVisibilityChange);
};

export default AutoPause;
