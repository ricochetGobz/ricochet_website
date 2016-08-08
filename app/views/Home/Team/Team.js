import React from 'react';
import TweenLite from "gsap";

import _Section from '../../../components/_Section/_Section';
import _Title from '../../../components/_Title/_Title';
import _Person from '../../../components/_Person/_Person.js';
import _Parallax from '../../../components/_Parallax.temp/_Parallax.temp';

import './Team.styl';

export default class Team extends _Section {
  constructor(props) {
    super(props);

    this._pills = false;
    this._pillAnimation = new TimelineLite();

    this.state = {
      openned: false,
    };

    this._onTitleShowed = this._onTitleShowed.bind(this);
  }

  componentDidMount() {
    super.componentDidMount();

    this._pills = document.getElementsByClassName('Team-person');

    let i;
    for (i = 0; i < this._pills.length; i++) {
      this._pillAnimation.from(this._pills[i], 0.7, {
        ease: Power2.easeOut,
        opacity: 0,
        transform: 'translateX(-32px)',
        onComplete: ((pill) => () => {
          pill.style.transform = '';
        })(this._pills[i]),
      }, '-=0.55');
    }
    this._pillAnimation.reverse();
  }

  _open() {
    this.setState({ openned: true });
  }

  _onTitleShowed() {
    if (this.state.openned) {
      this._pillAnimation.play();
    }
  }

  _close() {
    // this.setState({ openned: false });
    // this._pillAnimation.reverse();
  }

  render() {
    return (
      <section ref="team" className="Home-section Team" style={super._getStyle()}>
        <_Parallax
          speed={0.5}
          top={`${super._getPosYWithPurcent(-125)}px`}
          scrollTop={this.props.scrollTop}
        >
          <_Title _className="Team-title" openned={this.state.openned} onAnimationEnded={this._onTitleShowed}>{'L\'Équipe'}</_Title>
        </_Parallax>

        <ul className="Team-persons">
          <li className="Team-person">
            <_Person job="Designer" firstname="Tony" lastname="Tran" image={require('../../../assets/imgs/team/tony_tran.jpg')} url="http://arkestar.tumblr.com/" />
          </li>
          <li className="Team-person">
            <_Person job="Développeur" firstname="Arthur" lastname="Robert" image={require('../../../assets/imgs/team/arthur_robert.jpg')} url="https://twitter.com/arth_rob" />
          </li>
          <li className="Team-person">
            <_Person job="Designer" firstname="Sophie" lastname="Broche" image={require('../../../assets/imgs/team/sophie_broche.jpg')} url="https://twitter.com/SophieBroche" />
          </li>
          <li className="Team-person">
            <_Person job="Développeur" firstname="Jérémie" lastname="Boulay" image={require('../../../assets/imgs/team/jeremie_boulay.jpg')} url="http://jeremieboulay.fr" />
          </li>
          <li className="Team-person">
            <_Person job="Développeur" firstname="Chloé" lastname="Henaut" image={require('../../../assets/imgs/team/chloe_henaut.jpg')} url="http://notpretty.fr/" />
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
