import Chunk from "/js/gameboard/Chunk.js";

class Gameboard {
  height;
  width;
  chunkSize;
  chunks = [];
  player;

  constructor(width, height, chunkSize, player) {
    this.height = height;
    this.width = width;
    this.chunkSize = chunkSize;
    this.player = player;

    // this.chunks = Array.from(Array(Math.floor(height / chunkSize)), () => new Array(Math.floor(width / chunkSize)))
    console.log('Hallo Welt')

    for (let y = 0; y < height; y++) {
      this.chunks.push([]);
      for (let x = 0; x < width; x++) {
        this.chunks[y].push(new Chunk(x, y, chunkSize));
      }
    }
    console.log(this.chunks.length)
    console.log(this.chunks[0].length)
    console.log(this.chunks)
  }

  getChunk(posX, posY) {
    return this.chunks[Math.floor(posY)][Math.floor(posX)]
  }

  render(ctx, height, width) {
    const requiredChunksX = width / this.chunkSize + 2;
    const requiredChunksY = height / this.chunkSize + 2;

    for (let chunkY = -1; chunkY < requiredChunksY; chunkY++) {
      for (let chunkX = -1; chunkX < requiredChunksX; chunkX++) {
        const chunk = this.getChunk(this.player.posX + chunkX, this.player.posY + chunkY);
        const chunkBottom = this.getChunk(chunk.x, chunk.y + 1);
        const chunkRight = this.getChunk(chunk.x + 1, chunk.y);
        const chunkTop = this.getChunk(chunk.x, chunk.y - 1);
        const chunkLeft = this.getChunk(chunk.x - 1, chunk.y);

        [chunkTop, chunkLeft, chunkBottom, chunkRight].forEach(other =>
          chunk.drawToNextChunk(
            ctx,
            (chunk.x - this.player.posX) * this.chunkSize,
            (chunk.y - this.player.posY) * this.chunkSize,
            other
          ));
      }
    }
  }
}

export default Gameboard;
