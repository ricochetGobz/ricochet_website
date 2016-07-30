import React from 'react';
import Vimeo from 'react-vimeo';

import _Section from '../../../components/_Section/_Section';
import _Paragraph from '../../../components/_Paragraph/_Paragraph';

import './Videos.styl';

export default class Videos extends _Section {
  constructor(props) {
    super(props);

    this.state = {
      openned: false,
    };

    this._onParagraphShowed = this._onParagraphShowed.bind(this);
    this._onVimeoError = this._onVimeoError.bind(this);
  }

  _open() {
    this.setState({ openned: true });
  }

  _close() {
    this.setState({ openned: false });
  }

  _onParagraphShowed() {
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
        <_Paragraph
          title="Teaser"
          _className="Videos-paragraph"
          openned={this.state.openned}
          onAnimationEnded={this._onParagraphShowed}
        >
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores eum, magnam rerum ipsam, maiores dolorem nisi, ipsum quos,
           reprehenderit dolores iste! Earum delectus doloribus exercitationem,
           asperiores molestias vitae numquam voluptas.</p>
        </_Paragraph>
        <Vimeo videoId={176291464} onError={this._onVimeoError} />,
      </section>
    );
  }
}

Videos.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
};
