export class Player {
  // draws and updates character
  constructor(game) {
    this.game = game;
    this.width = 100; // width of sprite sheet divided by horizontal frames
    this.height = 91.3; // height of sprite sheet divided by vertical frames/rows
    this.x = 0; //player position
    this.y = 100; //player position
  }
  update() {}
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
