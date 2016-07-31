import React, { Component } from 'react';

import Navbar from '../components/Navbar/Navbar';
import ShapeFactory from '../core/shapeFactory';

import patternUrl from '../assets/imgs/pattern.jpg';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this._canvas = false;
    this._context = false;
    this._pattern = new Image();
    this._shapesFactory = new ShapeFactory();
    this._increment = 0;
    this._ratio = -1;
    this._nbrImageWidth = -1;
    this._nbrImageHeight = -1;
    this._shapes = [];

    this._loop = this._loop.bind(this);
    this._onPatternLoaded = this._onPatternLoaded.bind(this);
    this._resizeCanvas = this._resizeCanvas.bind(this);
  }

  componentDidMount() {
    this._canvas = this.refs.background;
    this._context = this._canvas.getContext('2d');

    this._pattern.onload = this._onPatternLoaded;
    this._pattern.src = patternUrl;

    window.addEventListener('resize', this._resizeCanvas);
    document.body.addEventListener('click', (e) => this._shapesFactory.createRandomShape(e.x, e.y));

    this._shapesFactory.popShapes(4);
  }

  _resizeCanvas() {
    this._context.canvas.width = window.innerWidth;
    this._context.canvas.height = window.innerHeight;
    this._nbrImageWidth = Math.ceil(this._context.canvas.width / this._pattern.width) + 1;
    this._nbrImageHeight = Math.ceil(this._context.canvas.height / this._pattern.height) + 1;
  }

  _onPatternLoaded() {
    this._ratio = this._pattern.height / this._pattern.width;
    this._resizeCanvas();
    this._loop();
  }

  _loop() {
    this._context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let i, j;

    // Animate pattern
    for (i = -1; i < this._nbrImageWidth; i++) {
      for (j = -1; j < this._nbrImageHeight; j++) {
        this._context.drawImage(this._pattern,
          (i * this._pattern.width) + this._increment,
          (j * this._pattern.height) + this._increment * this._ratio,
          this._pattern.width,
          this._pattern.height
        );
      }
    }

    this._increment = (this._increment + 0.5) % this._pattern.width;

    // Animate shapes
    this._shapesFactory.updateShapes(this._context);

    requestAnimationFrame(this._loop);
  }

  render() {
    return (
      <div id="layout" ref="layout" className="_layout">
        <canvas ref="background" className="CanvasBackground"></canvas>
        <Navbar />
        { this.props.children }
      </div>
    );
  }
}
Layout.propTypes = { children: React.PropTypes.node };
