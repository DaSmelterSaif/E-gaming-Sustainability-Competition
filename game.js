var config = {
  width: 854,
  height: 480,
  scene: [Scene1, Scene2],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
