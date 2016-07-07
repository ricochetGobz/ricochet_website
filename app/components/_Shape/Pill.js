import _Shape from './_Shape';

export default class Pill extends _Shape {
  constructor(x, y) {
    super(x, y);
    this.width = ((Math.sin(Math.rad(110)) * this.r) / 1.5) - 1.5;
  }

  render(context) {
    this.r = this.SIZE_MAX / 5;
    super.render(context);
    context.strokeStyle = `rgba(181, 105, 170,${this.opacity})`;

    context.beginPath();
    context.moveTo(super._getXRotated(250), super._getYRotated(250));
    context.lineTo(super._getXRotated(110), super._getYRotated(110));
    context.moveTo(super._getXRotated(290), super._getYRotated(290));
    context.lineTo(super._getXRotated(70), super._getYRotated(70));
    context.stroke();

    context.beginPath();
    this.r = this.SIZE_MAX / 5.5;
    context.arc(super._getXRotated(90), super._getYRotated(90),
                this.width, Math.rad(this.incrementedRotation) + Math.PI, Math.rad(this.incrementedRotation)
    );
    context.stroke();
    context.beginPath();
    context.arc(super._getXRotated(270), super._getYRotated(270),
                this.width, Math.rad(this.incrementedRotation), Math.rad(this.incrementedRotation) + Math.PI
    );
    context.stroke();
  }
}
