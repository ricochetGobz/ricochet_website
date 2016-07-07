import utils from '../../core/utils';


// CONSTRUCTION
export default class Shape {
  constructor(x, y) {
    this.SIZE_MAX = 50;
    this.MIN_EXPAND = 0.2;
    this.VEL_EXPAND = 0.2;
    this.VEL_MOVEMENT = 0.01;
    this.VEL_X = utils.getRandomFloat(0, 1);
    this.VEL_Y = utils.getRandomFloat(0, 1);

    this.x = x;
    this.y = y;
    this.r = this.SIZE_MAX / 6;
    this.xTargeted = this.x + utils.getRandomFloat(-300, 300);
    this.yTargeted = this.y + utils.getRandomFloat(-300, 300);

    this.sizeCircle = 0;
    this.incrementedRotation = 0;
    this.opacity = 1;
    this.speedRotation = -3;
    this.lifeCycle = utils.getRandomFloat(50, 150);
  }

  update() {
    if (!this.expanded) this._expand();

    this.x += (this.xTargeted - this.x) * this.VEL_MOVEMENT;
    this.y += (this.yTargeted - this.y) * this.VEL_MOVEMENT;

    this.lifeCycle--;
    this.incrementedRotation = this.lifeCycle * this.speedRotation;

    if (this.lifeCycle < 0) this._disappear();
  }

  _expand() {
    const expand = (this.SIZE_MAX - this.sizeCircle) * this.VEL_EXPAND;
    this.sizeCircle += expand;
    this.expanded = (expand < this.MIN_EXPAND);
  }

  _disappear() {
    this.opacity -= this.opacity * this.VEL_EXPAND;
  }

  render(context) {
    context.beginPath();
    context.strokeStyle = `rgba(228, 211, 235,${this.opacity})`;
    context.lineWidth = 0.5;
    context.arc(this.x, this.y, this.sizeCircle, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();
    context.arc(this.x, this.y, this.sizeCircle * 0.65, 0, 2 * Math.PI);
    context.stroke();
    context.lineWidth = 3;
  }

  isDead() {
    return (this.opacity < this.MIN_EXPAND);
  }

  _getXRotated(degree) {
    return (this.x - (Math.cos(Math.rad(degree + this.incrementedRotation)) * this.r));
  }

  _getYRotated(degree) {
    return (this.y - (Math.sin(Math.rad(degree + this.incrementedRotation)) * this.r));
  }
}
