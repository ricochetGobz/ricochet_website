import React, { Component } from 'react';

import './Slider.styl';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="Slider">
        <li className="Slider-point"><span className="Slider-name">Acceuil</span></li>
        <li className="Slider-point"><span className="Slider-name">Projet</span></li>
        <li className="Slider-point"><span className="Slider-name">Videos</span></li>
        <li className="Slider-point"><span className="Slider-name">Equipe</span></li>
      </section>
    );
  }
}
