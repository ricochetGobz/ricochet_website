import React from 'react';
import TweenLite from 'gsap';

import _Section from '../../../components/_Section/_Section';
import _Parallax from '../../../components/_Parallax.temp/_Parallax.temp';
import Logo from '../../../components/Logo/Logo';

import './Accueil.styl';


export default class Accueil extends _Section {
  constructor(props) {
    super(props);

    this._showLogo = true;
    this._logoShowed = true;
    this._scrollIndicatorAnimation = null;
  }

  componentDidMount() {
    this._scrollIndicatorAnimation = new TweenLite(this.refs.scrollIndicator, 0.7, {
      ease: Power3.easeOut,
      paused: true,
      opacity: 1,
      bottom: 32,
    });
  }

  _toggle() {
    this._logoShowed = !this._logoShowed;
    super._toggle();
  }

  _open() {
    if (this._logoShowed) this._scrollIndicatorAnimation.play();
  }

  _close() {
    this._scrollIndicatorAnimation.reverse();
  }

  render() {
    return (
      <section className="Home-section Accueil" style={this.props.style}>
          <_Parallax
            speed={0.6}
            top={`${super._getPosYWithPurcent(50)}px`}
            scrollTop={this.props.scrollTop}
          >
            <div ref="logo" className="Accueil-logo">
              <Logo
                width={this.refs.logo}
                showLogo={this._showLogo}
                callbackLogoShowed={this._toggle}
              />
            </div>
          </_Parallax>

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
