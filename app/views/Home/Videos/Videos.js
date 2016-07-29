import React from 'react';
import Vimeo from 'react-vimeo';

import _Section from '../../../components/_Section/_Section';
import _Title from '../../../components/_Title/_Title';

import './Videos.styl';

export default class Videos extends _Section {
  constructor(props) {
    super(props);

    this.state = {
      openned: false,
    };

    this._onTitleShowed = this._onTitleShowed.bind(this);
    this._onVimeoError = this._onVimeoError.bind(this);
  }

  _open() {
    this.setState({ openned: true });
  }

  _close() {
    this.setState({ openned: false });
  }

  _onTitleShowed() {
    if (this.state.openned) {
      // Closed animation
    }
  }

  _onVimeoError(err) {
    console.log(`React-vimeo.render ${err}`);
  }

  render() {
    return (
      <section className="Home-section Videos" style={this.props.style}>
        <_Title _className="Videos-title" openned={this.state.openned} onAnimationEnded={this._onTitleShowed}>{'Teaser'}</_Title>
        <Vimeo videoId={176291464} onError={this._onVimeoError} />,
      </section>
    );
  }
}

Videos.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
};
