class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootgame");
  }

  preload() {
    this.load.image("background", "assets/images/4_game_background.png");
    this.load.spritesheet("idle", "assets/images/Idle.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
    this.load.spritesheet("Swim", "assets/images/Swim.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
  }

  create() {
    console.log("Scene1 activated!");
    this.add.text(30, 30, "Loading game...");
    this.scene.start("playgame");
  }
}
