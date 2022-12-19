export class Player {
  // draws and updates character
  constructor(game) {
    this.game = game;
    this.width = 100; // width of sprite sheet divided by horizontal frames
    this.height = 91.3; // height of sprite sheet divided by vertical frames/rows
    this.x = 0; //player position
    this.y = this.game.height - this.height; //player position
    this.image = document.getElementById("player");
    this.speed = 0;
    this.maxSpeed = 10;
  }
  update(input) {
    // horizontal movement
    this.x += this.speed;
    if (input.includes("ArrowRight")) this.speed = this.maxSpeed;
    else if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,

      this.width,
      this.height
    );
  }
}
