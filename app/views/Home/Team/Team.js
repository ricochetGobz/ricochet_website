import React from 'react';
import TweenLite from "gsap";

import _Section from '../../../components/_Section/_Section';
import Person from '../../../components/_Person/_Person.js';
import './Team.styl';

export default class Team extends _Section {
  constructor(props) {
    super(props);
    this._teamAnimation = new TimelineLite();
  }

  componentDidMount() {
    this._teamAnimation.from(this.refs.team, 0.5, { ease: Power2.easeIn, opacity: 0 });
    super.componentDidMount();
  }

  _open() {
    this._teamAnimation.play();
  }

  _close() {
    this._teamAnimation.reverse();
  }


  render() {
    return (
      <section ref="team" className="Home-section Team" style={this.props.style}>
        <h2 className="Team-title">{'L\'Équipe'}</h2>
        <ul className="Team-persons">
          <li className="Team-person">
            <Person job="Designer" firstname="Tony" lastname="Tran" image={require('../../../assets/imgs/team/tony_tran.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Arthur" lastname="Robert" image={require('../../../assets/imgs/team/arthur_robert.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Designer" firstname="Sophie" lastname="Broche" image={require('../../../assets/imgs/team/sophie_broche.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Jérémie" lastname="Boulay" image={require('../../../assets/imgs/team/jeremie_boulay.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Chloé" lastname="Henaut" image={require('../../../assets/imgs/team/chloe_henaut.jpg')} />
          </li>
        </ul>
      </section>
    );
  }
}

Team.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
  changeView: React.PropTypes.func,
};
