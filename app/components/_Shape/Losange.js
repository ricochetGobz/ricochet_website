import _Shape from './_Shape';

export default class Losange extends _Shape {
  constructor(x, y) {
    super(x, y);
    this.width = this.SIZE_MAX / 4;
    this.height = this.SIZE_MAX / 10;
    this.speedRotation = -8;
  }

  render(context) {
    super.render(context);
    context.strokeStyle = `rgba(253, 231, 118,${this.opacity})`;

    context.beginPath();
    this.r = this.height;
    context.moveTo(super._getXRotated(180), super._getYRotated(180));
    this.r = this.width;
    context.lineTo(super._getXRotated(90), super._getYRotated(90));
    this.r = this.height;
    context.lineTo(super._getXRotated(0), super._getYRotated(0));
    this.r = this.width;
    context.lineTo(super._getXRotated(270), super._getYRotated(270));
    context.closePath();
    context.stroke();
  }
}
