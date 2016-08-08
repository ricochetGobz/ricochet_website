import React, { Component } from 'react';

import './_Parallax.temp.styl';

export default class ParallaxComponent extends Component {

  constructor(props) {
    super(props);

    this._style = {
      width: this.props.width,
      height: this.props.height,
      left: this.props.left,
      right: this.props.right,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.handleScroll();
  }

  componentDidUpdate() {
    this.handleScroll();
  }

  getTop() {
    const { top = 0 } = this.props;

    return top.indexOf('%') > -1
      ? window.innerHeight * (top.replace('%', '') / 100)
      : parseInt(top, 10);
  }

  handleScroll() {
    const { speed } = this.props;

    const top = this.getTop();

    // Top positons
    const newTop = (top - (this.props.scrollTop * speed));

    // Set new top position
    this.refs.parallaxElement.style.top = `${newTop}px`;
  }

  render() {
    this._style.width = this.props.width;
    this._style.height = this.props.height;
    this._style.left = this.props.left;
    this._style.right = this.props.right;

    return (
      <div ref="parallaxElement" className="Parallax" style={this._style}>
          {this.props.children}
      </div>
    );
  }
}

ParallaxComponent.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]),
  speed: React.PropTypes.number,
  scrollTop: React.PropTypes.number,
  // Style
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  top: React.PropTypes.string,
  left: React.PropTypes.string,
  right: React.PropTypes.string,
};

ParallaxComponent.defaultProps = {
  width: 'inherit',
  height: 'auto',
  top: 'inherit',
  left: 'inherit',
  right: 'inherit',
  speed: -0.03,
  scrollTop: 0,
};
