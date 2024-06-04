class Scene2 extends Phaser.Scene {
  constructor() {
    super("playgame");
  }

  create() {
    console.log("Scene2 activated!");

    // Definitions
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    this.speed = 2;

    // Add image
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.background.setScale(0.5);

    this.man = this.add.sprite(400, 250, "idle");

    // Add animations
    this.anims.create({
      key: "idle_anim",
      frames: this.anims.generateFrameNumbers("idle"),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "swim_anim",
      frames: this.anims.generateFrameNumbers("Swim"),
      frameRate: 5,
      repeat: -1,
    });

    this.man.play("idle_anim");

    // this.input.keyboard.on("keydown", (event) => {
    //   console.log(event.key);
    // });
  }

  update() {
    if (this.up.isDown) {
      this.man.y -= this.speed;
    } else if (this.down.isDown) {
      this.man.y += this.speed;
    } else if (this.right.isDown) {
      this.man.x += this.speed;
    } else if (this.left.isDown) {
      this.man.x -= this.speed;
    }
  }
}
