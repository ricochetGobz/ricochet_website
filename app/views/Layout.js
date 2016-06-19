import React, { Component } from 'react';

import Navbar from '../components/Navbar/Navbar';

import patternUrl from '../assets/imgs/pattern.jpg';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this._canvas = false;
    this._context = false;
    this._pattern = new Image();
    this._increment = 0;
    this._ratio = 1;
    this._nbrImageWidth = -1;
    this._nbrImageHeight = -1;

    this.state = {};

    this._loop = this._loop.bind(this);
    this._onPatternLoaded = this._onPatternLoaded.bind(this);
  }

  componentDidMount() {
    this._canvas = this.refs.background;
    this._context = this._canvas.getContext('2d');
    this._context.canvas.width = window.innerWidth;
    this._context.canvas.height = window.innerHeight;

    this._pattern.onload = this._onPatternLoaded;
    this._pattern.src = patternUrl;
  }

  _onPatternLoaded() {
    this._ratio = this._pattern.height / this._pattern.width;
    this._nbrImageWidth = Math.ceil(this._canvas.width / this._pattern.width) + 1;
    this._nbrImageHeight = Math.ceil(this._canvas.height / this._pattern.height) + 1;
    this._loop();
  }

  _loop() {
    this._context.canvas.width = window.innerWidth;
    this._context.canvas.height = window.innerHeight;
    this._context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let i, j;
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
