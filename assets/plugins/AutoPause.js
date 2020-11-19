function AutoPause() {
  this.threshold = 0.25;
  this.handleIntersection = this.handleIntersection.bind(this);
}

AutoPause.prototype.handleIntersection = function (entries) {
  const entry = entries[0];
  let isVisible = entry.intersectionRatio >= this.threshold;

  if (isVisible) {
    this.player.play();
  } else {
    this.player.pause();
  }
};

AutoPause.prototype.run = function (player) {
  this.player = player;
  const observer = new IntersectionObserver(this.handleIntersection, {
    threshold: this.threshold,
  });

  observer.observe(this.player.media);
};

export default AutoPause;
