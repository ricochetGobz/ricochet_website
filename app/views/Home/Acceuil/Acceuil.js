import React, { Component } from 'react';

import Logo from '../../../components/Logo/Logo';

import './Acceuil.styl';


export default class Acceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="Home-section Acceuil">
          <div className="Acceuil-logo">
            <Logo />
          </div>
          <div className="Acceuil-scrollIndicator">
            <div className="Acceuil-mouse"></div>
            <div className="Acceuil-arrowDown"></div>
            <p>scroll <br /> pour naviguer</p>
          </div>
      </section>
    );
  }
}
