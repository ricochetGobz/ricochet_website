import React, { Component } from 'react';

import SpritePlayer from '../../core/SpritePlayer';

import './Logo.styl';
import showLogoSpriteUrl from '../../assets/imgs/sprites/showLogo/showLogo.png';
import showLogoSpriteJson from '../../assets/imgs/sprites/showLogo/showLogo.json';
import hideLogoSpriteUrl from '../../assets/imgs/sprites/hideLogo/hideLogo.png';
import hideLogoSpriteJson from '../../assets/imgs/sprites/hideLogo/hideLogo.json';

export default class Logo extends Component {
  constructor(props) {
    super(props);

    this._isShowed = false;
    this._spriteLoaded = false;

    this._showLogoAnimation = false;
    this._hideLogoAnimation = false;

    this._checkLogoStatus = this._checkLogoStatus.bind(this);
    this._loadSprites = this._loadSprites.bind(this);
    this._onSpriteLoaded = this._onSpriteLoaded.bind(this);
  }

  componentDidMount() {
    this._showLogoAnimation = new SpritePlayer(this.refs.logo);
    this._hideLogoAnimation = new SpritePlayer(this.refs.logo);
    this._loadSprites();
  }

  componentDidUpdate() {
    if (!this._spriteLoaded) {
      this._loadSprites();
      return;
    }

    this._checkLogoStatus();
  }

  _checkLogoStatus() {
    if (this.props.showLogo && !this._isShowed) {
      this._hideLogoAnimation.stop();
      this._showLogoAnimation.play({
        onComplete: () => {
          this._isShowed = true;
          this.props.callbackLogoShowed();
        },
      });
    } else if (!this.props.showLogo && this._isShowed) {
      this._showLogoAnimation.stop();
      this._hideLogoAnimation.play({
        onComplete: () => {
          this._isShowed = false;
        },
      });
    }
  }

  _loadSprites() {
    this._showLogoAnimation.load(showLogoSpriteUrl, showLogoSpriteJson, () => {
      this._hideLogoAnimation.load(hideLogoSpriteUrl, hideLogoSpriteJson, this._onSpriteLoaded);
    });
  }

  _onSpriteLoaded() {
    this._spriteLoaded = true;
    if (this.props.showLogo) this._checkLogoStatus();
  }

  render() {
    return (
      <div className="Logo">
        <h1 className="Logo-title">Ricochet</h1>
        <canvas className="Logo-canvas" ref="logo" ></canvas>
      </div>
    );
  }
}


Logo.propTypes = {
  showLogo: React.PropTypes.bool,
  callbackLogoShowed: React.PropTypes.func,
};
