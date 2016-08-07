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
    this._animationComplete = true;

    this._showAnimation = false;
    this._hideAnimation = false;

    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
    this._checkStatus = this._checkStatus.bind(this);
    this._loadSprites = this._loadSprites.bind(this);
    this._onSpriteLoaded = this._onSpriteLoaded.bind(this);
    this._onAnimationComplete = this._onAnimationComplete.bind(this);
  }

  componentDidMount() {
    this._showAnimation = new SpritePlayer(this.refs.logo);
    this._hideAnimation = new SpritePlayer(this.refs.logo);
    this._loadSprites();
  }

  componentDidUpdate() {
    if (!this._spriteLoaded) {
      this._loadSprites();
      return;
    }

    if (this._animationComplete) {
      this._checkStatus();
    }
  }

  _checkStatus() {
    if (this.props.showLogo && !this._isShowed) {
      this._show();
    } else if (!this.props.showLogo && this._isShowed) {
      this._hide();
    }
  }

  _show() {
    this._animationComplete = false;
    this._hideAnimation.stop();
    this._showAnimation.play({
      onComplete: () => { this._onAnimationComplete(true); },
    });
  }

  _hide() {
    this._animationComplete = false;
    this._showAnimation.stop();
    this._hideAnimation.play({
      onComplete: () => { this._onAnimationComplete(false); },
    });
  }

  _loadSprites() {
    this._showAnimation.load(showLogoSpriteUrl, showLogoSpriteJson, () => {
      this._hideAnimation.load(hideLogoSpriteUrl, hideLogoSpriteJson, this._onSpriteLoaded);
    });
  }

  _onSpriteLoaded() {
    this._spriteLoaded = true;
    this._checkStatus();
  }

  _onAnimationComplete(showed) {
    this._animationComplete = true;
    this._isShowed = showed;
    this.props.callbackLogo(showed);
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
  callbackLogo: React.PropTypes.func,
};
