import React, { Component } from 'react';

import Point from '../_Point/_Point';
import './Slider.styl';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.viewActive = -1;
    this.state = {};

    this._changeView = this._changeView.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    this.viewActive = -1;
  }

  _isActive(key) {
    return (this.props.currentView === key || this.viewActive === key);
  }

  _changeView(view) {
    this.viewActive = view;
    this.props.changeView(view);
  }

  render() {
    return (
      <section className="Slider">
        {
          this.props.views.map((view, key) =>
            <Point
              id={key}
              key={key}
              viewName={view.name}
              changeView={this._changeView}
              isActive={this._isActive(key)}
            />
          )
        }
      </section>
    );
  }
}

Slider.propTypes = {
  views: React.PropTypes.array,
  currentView: React.PropTypes.number,
  changeView: React.PropTypes.func,
};
