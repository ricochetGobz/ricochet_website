import React, { Component } from 'react';

import './_Point.styl';

export default class _Point extends Component {

  render() {
    return (
      <li
        className={`Slider-point Point ${this.props.isActive ? 'Point_active' : ''}`}
        onClick={() => this.props.changeView(this.props.id)}
      >
        <span className="Point-name">{this.props.viewName}</span>
        <div className="Point-circles"></div>
      </li>
    );
  }
}


_Point.propTypes = {
  id: React.PropTypes.number,
  isActive: React.PropTypes.bool,
  viewName: React.PropTypes.string,
  changeView: React.PropTypes.func,
};
