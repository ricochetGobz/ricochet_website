import React, { Component } from 'react';

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
    // TODO crée un component Point.
    // TODO récupérer un array des view
    return (
      <section className="Slider">
        <li
          className={`Slider-point ${(this._isActive(ACCEUIL)) ? 'Slider-point_active' : ''}`}
          onClick={() => this._selectView(ACCEUIL)}
        >
          <span className="Slider-name">Acceuil</span>
        </li>
        <li
          className={`Slider-point ${(this._isActive(PROJECT)) ? 'Slider-point_active' : ''}`}
          onClick={() => this._selectView(PROJECT)}
        >
          <span className="Slider-name">Projet</span>
        </li>
        <li
          className={`Slider-point ${(this._isActive(VIDEOS)) ? 'Slider-point_active' : ''}`}
          onClick={() => this._selectView(VIDEOS)}
        >
          <span className="Slider-name">Videos</span>
        </li>
        <li
          className={`Slider-point ${(this._isActive(TEAM)) ? 'Slider-point_active' : ''}`}
          onClick={() => this._selectView(TEAM)}
        >
          <span className="Slider-name">Equipe</span>
        </li>
      </section>
    );
  }
}

Slider.propTypes = {
  currentView: React.PropTypes.number,
  selectView: React.PropTypes.func,
};
