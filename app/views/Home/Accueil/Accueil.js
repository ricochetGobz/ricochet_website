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
    this._logoShowed = false;
    this._scrollIndicatorAnimation = null;

    this._onLogoCallback = this._onLogoCallback.bind(this);
  }

  componentDidMount() {
    this._scrollIndicatorAnimation = new TweenLite(this.refs.scrollIndicator, 0.7, {
      ease: Power3.easeOut,
      paused: true,
      opacity: 1,
      bottom: 32,
    });
  }

  _open() {
    if (this._logoShowed) this._scrollIndicatorAnimation.play();
  }

  _onLogoCallback(showed) {
    this._logoShowed = showed;
    this._open();
  }

  _close() {
    // this._scrollIndicatorAnimation.reverse();
  }

  render() {
    return (
      <section className="Home-section Accueil" style={this.props.style}>
          <_Parallax
            speed={0.6}
            top={`${super._getPosYWithPurcent(50)}px`}
            scrollTop={this.props.scrollTop}
          >
            <div className="Accueil-logo">
              <Logo
                showLogo={this._showLogo}
                callbackLogo={this._onLogoCallback}
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
