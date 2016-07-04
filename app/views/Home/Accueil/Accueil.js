import React, { Component } from 'react';
import TweenLite from 'gsap';


import Logo from '../../../components/Logo/Logo';

import './Accueil.styl';


export default class Accueil extends Component {
  constructor(props) {
    super(props);

    this._openned = false;
    this._willOpenned = false;
    this._changeViewCalled = false;

    this.state = {};

    this._onLogoAnimComplete = this._onLogoAnimComplete.bind(this);
  }

  componentDidMount() {
    this._checkStatus();
  }

  componentDidUpdate() {
    this._checkStatus();
  }

  _checkStatus() {
    if (this.props.openned !== this._openned) {
      if (this.props.openned) {
        this._willOpenned = true;
      } else {
        this._willOpenned = false;
      }
    } else {
      this._changeViewCalled = true;
    }
  }

  _onLogoAnimComplete() {
    TweenLite.to(this.refs.scrollIndicator, 0.5, { onComplete: () => {
      this._openned = this._willOpenned;

      if (this._changeViewCalled) {
        this.forceUpdate();
        this._changeViewCalled = false;
      }
    },
      ease: Power3.easeOut,
      opacity: this._willOpenned ? 1 : 0,
      bottom: this._willOpenned ? '32px' : '46px',
    }
    );
  }

  render() {
    return (
      <section className="Home-section Accueil" style={this.props.style}>
          <div ref="logo" className="Accueil-logo">
            <Logo
              width={this.refs.logo}
              showLogo={this.props.openned}
              onAnimComplete={this._onLogoAnimComplete}
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
  changeView: React.PropTypes.func,
};
