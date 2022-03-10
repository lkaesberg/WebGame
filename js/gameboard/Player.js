class Player {
  posX;
  posY;

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  render(ctx) {
    //TODO
    ctx.fillText("Player", 200, 200)
  }
}

export default Player;
