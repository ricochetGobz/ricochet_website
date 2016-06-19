import React, { Component } from 'react';

import Point from '../_Point/_Point';
import './Slider.styl';

const ACCEUIL = 0;
const PROJECT = 1;
const VIDEOS = 2;
const TEAM = 3;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.viewActive = -1;
    this.state = {};

    this._selectView = this._selectView.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log(this.props.currentView);
    this.viewActive = -1;
  }

  _isActive(view) {
    return (this.props.currentView === view || this.viewActive === view)
  }

  _selectView(view) {
    this.viewActive = view;
    this.props.selectView(view);
  }

  render() {
    // TODO récupérer un array des view
    return (
      <section className="Slider">
        {
          this.props.views.map((view) =>
            <Point
              viewId={view.id}
              viewName={view.name}
              selectView={this._selectView}
              isActive={this._isActive(view.id)}
            />
          )
        }
      </section>
    );
  }
}

Slider.propTypes = {
  views: React.PropTypes.object,
  currentView: React.PropTypes.number,
  selectView: React.PropTypes.func,
};
