import _Shape from './_Shape';

export default class Triangle extends _Shape {
  render(context) {
    super.render(context);
    context.beginPath();
    context.strokeStyle = `rgba(240, 142, 26,${this.opacity})`;
    this._drawShapeOnSameCircle([90, 210, 330], context);
    context.stroke();
  }

  _drawShapeOnSameCircle(angles, context) {
    context.moveTo(super._getXRotated(angles[0]), super._getYRotated(angles[0]));
    for (let i = 1; i < angles.length; i++) {
      context.lineTo(super._getXRotated(angles[i]), super._getYRotated(angles[i]));
    }
    context.closePath();
  }
}
