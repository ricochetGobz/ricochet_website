import React, { Component } from 'react';

import Person from '../../../components/_Person/_Person.js';
import './Team.styl';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="Home-section Team">
        <h2>L équipe</h2>
        <ul className="Team-persons">
          <li className="Team-person">
            <Person job="Designer" firstname="Tony" lastname="Tran" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Arthur" lastname="Robert" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Designeuse" firstname="Sophie" lastname="Broche" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Jérémie" lastname="Boulay" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Développeuse" firstname="Chloé" lastname="Henaut" image="/" />
          </li>
        </ul>
      </section>
    );
  }
}
