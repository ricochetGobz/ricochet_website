import utils from './utils';

import Triangle from '../components/_Shape/Triangle';
import Circle from '../components/_Shape/Circle';
import Losange from '../components/_Shape/Losange';
import Square from '../components/_Shape/Square';
import Pill from '../components/_Shape/Pill';

export default class ShapeFactory {
  constructor() {
    this._shapes = [];

    this.updateShapes = this.updateShapes.bind(this);
    this.createRandomShape = this.createRandomShape.bind(this);
    this.popShapes = this.popShapes.bind(this);
  }

  createRandomShape(x, y) {
    switch (utils.getRandomInt(0, 4)) {
      case 0:
        this._shapes.push(new Triangle(x, y));
        break;
      case 1:
        this._shapes.push(new Pill(x, y));
        break;
      case 2:
        this._shapes.push(new Losange(x, y));
        break;
      case 3:
        this._shapes.push(new Square(x, y));
        break;
      default:
        this._shapes.push(new Circle(x, y));
        break;
    }
  }

  updateShapes(context) {
    let k;
    for (k = 0; k < this._shapes.length; k++) {
      this._shapes[k].update(context);
      this._shapes[k].render(context);
      if (this._shapes[k].isDead()) {
        this._shapes.splice(k, 1);
        k--;
      }
    }

    if (Math.random() > 0.99) this.popShapes(1);
  }

  popShapes(numberOfShapes) {
    const margin = window.innerWidth / 6;
    this.createRandomShape(
      utils.getRandomFloat(margin, window.innerWidth - margin),
      utils.getRandomFloat(margin, window.innerHeight - margin)
    );

    if (numberOfShapes > 0) {
      setTimeout(this.popShapes.bind(this, (numberOfShapes - 1)), utils.getRandomFloat(0, 1500));
    }
  }
}
