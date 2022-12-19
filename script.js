window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Game {
    //all project logic will go through this
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    update() {}
    draw() {}
  }
});
