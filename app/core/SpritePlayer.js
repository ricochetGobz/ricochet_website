// http://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe

export default class SpritePlayer {
  constructor(canvas) {
    // TODO test artibutes

    this._currentKey = 0;
    this._endKey = -1;
    this._fpsInterval = 1000 / 25;
    this._spriteFrames = false;
    this._callback = false;
    this._then = new Date();
    this._spriteImg = new Image();

    this._canvas = canvas;
    this._context = this._canvas.getContext('2d');

    this.play = this.play.bind(this);
    this._play = this._play.bind(this);
    this._loop = this._loop.bind(this);
  }

  load(spriteUrl, spriteData, callback) {
    // TODO test artibutes
    this._currentKey = 0;
    this._requestID = false;
    this._spriteFrames = spriteData.frames;
    this._spriteImg.onload = callback;
    this._spriteImg.src = spriteUrl;

    this._canvas.width = this._spriteFrames[0].sourceSize.w;
    this._canvas.height = this._spriteFrames[0].sourceSize.h;

    this._endKey = this._spriteFrames.length - 1;
  }

  play(object) {
    if (object) {
      this._callback = object.onComplete || false;
      this._endKey = object.stopAt || this._endKey;
    }

    if (this._currentKey === this._spriteFrames.length - 1) this._currentKey = 0;
    this._loop(this._play);
  }
  _play() {
    let keep = false;

    this._context.drawImage(
      this._spriteImg,
      this._spriteFrames[this._currentKey].frame.x,
      this._spriteFrames[this._currentKey].frame.y,
      this._spriteFrames[this._currentKey].frame.w,
      this._spriteFrames[this._currentKey].frame.h,
      this._spriteFrames[this._currentKey].spriteSourceSize.x,
      this._spriteFrames[this._currentKey].spriteSourceSize.y,
      this._spriteFrames[this._currentKey].spriteSourceSize.w,
      this._spriteFrames[this._currentKey].spriteSourceSize.h
    );

    if (this._currentKey < this._endKey) {
      this._currentKey++;
      keep = true;
    }

    // return condition to continue loop or not
    return keep;
  }

  pause() {
    cancelAnimationFrame(this._requestID);
  }

  stop() {
    this.pause();
    this._currentKey = 0;
    this._callback = false;
    this._endKey = this._spriteFrames.length - 1;
  }

  goTo(key) {
    if (key < this._spriteFrames.length && key > -1) {
      this._currentKey = key;
      return;
    }
    console.error(`SpritePlayer.goTo() Error : ${key} frame doesn't exist`);
  }

  fps(fps) {
    if (fps < 0) {
      console.error('SpritePlayer.fps() Error : fps can not be negative.');
      return;
    }
    this._fpsInterval = 1000 / fps;
  }

  _loop(action) {
    let keep = true;
    const now = new Date();
    const elapsed = now - this._then;

    if (elapsed > this._fpsInterval) {
      this._then = now - (elapsed % this._fpsInterval);
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
      keep = action();
    }

    if (keep) {
      this._requestID = requestAnimationFrame(this._loop.bind(this, action));
    } else {
      if (this._callback) this._callback();
      this.pause();
    }
  }
}
