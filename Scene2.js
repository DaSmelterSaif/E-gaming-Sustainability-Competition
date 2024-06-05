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
    console.log(this.man.anims.currentAnim);

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

    this.anims.create({
      key: "attack_anim",
      frames: this.anims.generateFrameNumbers("attack"),
      frameRate: 20,
      repeat: -1,
    });

    this.man.play("idle_anim");
    // console.log(this.man.anims.currentAnim.key);

    // this.input.keyboard.on("keydown", (event) => {
    //   console.log(event.key);
    // });

    this.garbage = this.add.image(200, 200, "garbage");
    this.garbage.setOrigin(0.5, 0.7);
    this.garbage.setScale(0.5);

    this.garbage2 = this.add.image(300, 200, "garbage2");
    this.garbage2.setScale(0.7);

    this.garbage3 = this.add.image(400, 200, "garbage3");
    this.garbage3.setOrigin(0.5, 0.6);
    this.garbage3.setScale(0.4);

    this.garbage4 = this.add.image(500, 200, "garbage4");
    this.garbage4.setScale(0.5);

    this.garbage5 = this.add.image(600, 200, "garbage5");
    this.garbage5.setScale(0.7);

    this.garbage6 = this.add.image(700, 200, "garbage6");
    this.garbage6.setScale(0.7);

    this.garbage7 = this.add.image(400, 120, "garbage7");
    this.garbage7.setScale(0.7);

    // Array to hold the garbage
    this.garbageArray = [
      this.garbage,
      this.garbage2,
      this.garbage3,
      this.garbage4,
      this.garbage5,
      this.garbage6,
      this.garbage7,
    ];

    this.garbageScattered();
  }

  garbageScattered() {
    this.garbageArray.forEach((garbageItem) => {
      let randomX = Phaser.Math.Between(0, config.width);
      let randomY = Phaser.Math.Between(0, config.height);
      garbageItem.x = randomX;
      garbageItem.y = randomY;
    });
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

    this.garbage.angle += 3;
    this.garbage2.angle += 2;
    this.garbage3.angle += 1;
    this.garbage4.angle += 4;
    this.garbage5.angle += 0.5;
    this.garbage6.angle += 0.8;
    this.garbage7.angle += 0.6;
  }
}
