import React, { Component } from 'react';

import Cube from '../../../components/Cube/Cube';

import './Project.styl';


export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="Home-section Project">
        <div className="Project-column">
          <div className="Project-cube">
            <Cube />
          </div>
        </div>
        <div className="Project-column">
          <h2 className="Project-title"><span>le projet</span> <br /> ricochet</h2>
          <p className="Project-subtitle">Une musique insonore</p>
          <p className="Project-paragraph"> Nous n’avons pas pour objectif de faire
            à nouveau entendre les personnes sourdes/malentendants,
            de leurs faire retrouver l’ouïe, de retrouver un sens perdu.
            <br /> <br />
            Notre projet, au contraire souhaite s’appuyer sur tout les autres
            sens et sur un dispositif collaboratif afin de faire découvrir
            la musique autrement (autant aux sourds qu’aux personnes ordinaires ).
            Cette expérience a pour but de faire découvrir et partager.
          </p>
        </div>
      </section>
    );
  }
}
