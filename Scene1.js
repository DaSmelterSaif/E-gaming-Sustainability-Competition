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
    this.load.spritesheet("attack", "assets/images/Attack3.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
    this.load.image("garbage", "assets/images/EmptyCan.png");
    this.load.image("garbage2", "assets/images/EmptyBottle.png");
    this.load.image("garbage3", "assets/images/EmptyGlass.png");
    this.load.image("garbage4", "assets/images/EmptyJuiceCan.png");
    this.load.image("garbage5", "assets/images/PlasticBag.png");
    this.load.image("garbage6", "assets/images/PlasticBag2.png");
    this.load.image("garbage7", "assets/images/PlasticBag3.png");
  }

  create() {
    console.log("Scene1 activated!");
    this.add.text(30, 30, "Loading game...");
    this.scene.start("playgame");
  }
}
