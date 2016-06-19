import React, { Component } from 'react';

import SpritePlayer from '../../core/SpritePlayer';


import showLogoSpriteUrl from '../../assets/imgs/sprites/showLogo/showLogo.png';
import showLogoSpriteJson from '../../assets/imgs/sprites/showLogo/showLogo.json';
import hideLogoSpriteUrl from '../../assets/imgs/sprites/hideLogo/hideLogo.png';
import hideLogoSpriteJson from '../../assets/imgs/sprites/hideLogo/hideLogo.json';

export default class Logo extends Component {
  constructor(props) {
    super(props);

    this._showLogoPlayer = false;
    this._hideLogoPlayer = false;

    this.isShowed = false;

    this.state = {
      spriteLoaded: false,
    };

    this._loadSprites = this._loadSprites.bind(this);
    this._onSpriteLoaded = this._onSpriteLoaded.bind(this);
  }

  componentDidMount() {
    this._showLogoPlayer = new SpritePlayer(this.refs.logo);
    this._hideLogoPlayer = new SpritePlayer(this.refs.logo);
    this._loadSprites();
  }

  componentDidUpdate() {
    if (!this.state.spriteLoaded) {
      this._loadSprites();
      return;
    }

    this._toggleLogo();
  }

  _toggleLogo() {
    if (this.props.showLogo && !this.isShowed) {
      this._hideLogoPlayer.stop();
      this._showLogoPlayer.play({
        onComplete: () => {
          this.isShowed = true;
          this.props.onAnimComplete();
        },
      });
    } else if (!this.props.showLogo && this.isShowed) {
      this._hideLogoPlayer.play({
        onComplete: () => {
          this.isShowed = false;
          this.props.onAnimComplete();
        },
      });
      this._showLogoPlayer.stop();
    }
  }

  _loadSprites() {
    this._showLogoPlayer.load(showLogoSpriteUrl, showLogoSpriteJson, () => {
      this._hideLogoPlayer.load(hideLogoSpriteUrl, hideLogoSpriteJson, this._onSpriteLoaded);
    });
  }

  _onSpriteLoaded() {
    this.setState({ spriteLoaded: true });
    if (this.props.showLogo) this._toggleLogo();
  }

  render() {
    return <canvas ref="logo" ></canvas>;
  }
}


Logo.propTypes = {
  showLogo: React.PropTypes.bool,
  onAnimComplete: React.PropTypes.func,
};
