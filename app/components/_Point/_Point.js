import React, { Component } from 'react';

import './_Point.styl';

export default class _Point extends Component {

  render() {
    return (
      <li
        className={`Slider-point Point ${this.props.isActive ? 'Point_active' : ''}`}
        onClick={() => this.props.selectView(this.props.viewId)}
      >
        <span className="Point-name">{this.props.viewName}</span>
        <div className="Point-circles"></div>
      </li>
    );
  }
}


_Point.propTypes = {
  isActive: React.PropTypes.bool,
  viewId: React.PropTypes.number,
  viewName: React.PropTypes.string,
  selectView: React.PropTypes.func,
};
