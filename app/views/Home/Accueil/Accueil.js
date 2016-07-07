import React from 'react';
import TweenLite from 'gsap';

import _Section from '../../../components/_Section/_Section';
import Logo from '../../../components/Logo/Logo';

import './Accueil.styl';


export default class Accueil extends _Section {
  constructor(props) {
    super(props);

    this._showLogo = true;
    this._scrollIndicatorAnimation = null;
  }

  componentDidMount() {
    this._scrollIndicatorAnimation = new TweenLite(this.refs.scrollIndicator, 0.5, {
      ease: Power3.easeOut,
      paused: true,
      opacity: 1,
      bottom: 32,
    });
  }

  _toggle() {
    super._toggle();
  }

  _open() {
    this._scrollIndicatorAnimation.play();
  }

  _close() {
    this._scrollIndicatorAnimation.reverse();
  }

  render() {
    return (
      <section className="Home-section Accueil" style={this.props.style}>
          <div ref="logo" className="Accueil-logo">
            <Logo
              width={this.refs.logo}
              showLogo={this._showLogo}
              callbackLogoShowed={this._toggle}
            />
          </div>
          <div ref="scrollIndicator" className="Accueil-scrollIndicator">
            <div className="Accueil-mouse"></div>
            <div className="Accueil-arrowDown"></div>
            <p>scroll <br /> pour naviguer</p>
          </div>
      </section>
    );
  }
}

Accueil.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
};
