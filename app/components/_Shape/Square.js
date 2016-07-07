import _Shape from './_Shape';

export default class Square extends _Shape {
  constructor(x, y) {
    super(x, y);
    this.r = this.SIZE_MAX / 5;
    this.speedRotation = -6;
  }

  render(context) {
    super.render(context);
    context.strokeStyle = `rgba(250, 107, 110,${this.opacity})`;

    context.beginPath();
    context.moveTo(super._getXRotated(180), super._getYRotated(180));
    context.lineTo(super._getXRotated(90), super._getYRotated(90));
    context.lineTo(super._getXRotated(0), super._getYRotated(0));
    context.lineTo(super._getXRotated(270), super._getYRotated(270));
    context.closePath();
    context.stroke();
  }
}
