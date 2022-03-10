class Chunk {
  chunkSize;
  pointX;
  pointY;
  x;
  y;

  constructor(x, y, chunkSize) {
    this.x = x;
    this.y = y;
    this.chunkSize = chunkSize;
    this.pointX = Math.random() * chunkSize;
    this.pointY = Math.random() * chunkSize;
  }


  drawToNextChunk(ctx, startX, startY, chunk) {
    const dX = chunk.x - this.x;
    const dY = chunk.y - this.y;


    const otherX = dX * this.chunkSize + startX + chunk.pointX
    const otherY = dY * this.chunkSize + startY + chunk.pointY

    ctx.strokeStyle = '#00FFFF'
    ctx.beginPath();
    ctx.moveTo(startX, startY)
    ctx.lineTo(otherX, otherY)
    ctx.stroke();
  }
}

export default Chunk;
