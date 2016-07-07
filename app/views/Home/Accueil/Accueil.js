import React, { Component } from 'react';
import TweenLite from 'gsap';


import Logo from '../../../components/Logo/Logo';

import './Accueil.styl';


export default class Accueil extends Component {
  constructor(props) {
    super(props);

    this._openned = true;
    this._showLogo = true;
    this._scrollIndicatorAnimation = null;

    this._checkStatus = this._checkStatus.bind(this);
    this._toggleScrollIndicator = this._toggleScrollIndicator.bind(this);
  }

  componentDidMount() {
    this._scrollIndicatorAnimation = new TweenLite(this.refs.scrollIndicator, 0.5, {
      ease: Power3.easeOut,
      paused: true,
      opacity: 1,
      bottom: 32,
    });
  }

  componentDidUpdate() {
    this._checkStatus();
  }

  _checkStatus() {
    if (this.props.openned !== this._openned) {
      this._openned = this.props.openned;
      this._toggleScrollIndicator();
    }
  }

  _toggleScrollIndicator() {
    if (this._openned) {
      this._scrollIndicatorAnimation.play();
    } else {
      this._scrollIndicatorAnimation.reverse();
    }
  }

  render() {
    return (
      <section className="Home-section Accueil" style={this.props.style}>
          <div ref="logo" className="Accueil-logo">
            <Logo
              width={this.refs.logo}
              showLogo={this._showLogo}
              callbackLogoShowed={this._toggleScrollIndicator}
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
