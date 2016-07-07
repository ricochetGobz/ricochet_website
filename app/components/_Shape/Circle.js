import _Shape from './_Shape';

export default class Circle extends _Shape {
  constructor(x, y){
    super(x, y);
    this.r = this.SIZE_MAX / 7;
  }
  render(context) {
    super.render(context);
    context.beginPath();
    context.strokeStyle = `rgba(80, 103, 186,${this.opacity})`;
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.stroke();
  }
}
