import React from 'react';
import Vimeo from 'react-vimeo';

import _Section from '../../../components/_Section/_Section';
import _Paragraph from '../../../components/_Paragraph/_Paragraph';
import _Parallax from '../../../components/_Parallax.temp/_Parallax.temp';

import './Videos.styl';

export default class Videos extends _Section {
  constructor(props) {
    super(props);

    this._videoAnimation = new TimelineLite();

    this.state = {
      openned: false,
    };

    this._onParagraphShowed = this._onParagraphShowed.bind(this);
    this._onVimeoError = this._onVimeoError.bind(this);
  }

  _open() {
    this._videoAnimation.play();
    this.setState({ openned: true });
  }

  _close() {
    this._videoAnimation.reverse();
    this.setState({ openned: false });
  }

  _onParagraphShowed() {
    if (this.state.openned) {
      // Closed animation
    }
  }

  componentDidMount() {
    this._videoAnimation.from(this.refs.video, 0.7, { opacity: 0 }, '+=1');
  }

  _onVimeoError(err) {
    console.log(`React-vimeo.render() : ${err}`);
  }

  render() {
    return (
      <section className="Home-section Videos" style={this.props.style}>
        <_Parallax
          speed={1.5}
          top={`${super._getPosYWithPurcent(140)}px`}
          scrollTop={this.props.scrollTop}
        >
          <_Paragraph
            title="Teaser"
            _className="Videos-paragraph"
            openned={this.state.openned}
            onAnimationEnded={this._onParagraphShowed}
          >
          <p className="_hidden_mobile"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores eum, magnam rerum ipsam, maiores dolorem nisi, ipsum quos,
          reprehenderit dolores iste! Earum delectus doloribus exercitationem,
          asperiores molestias vitae numquam voluptas.</p>
          </_Paragraph>
        </_Parallax>
        <div ref="video" className="Videos-video">
          <Vimeo videoId={176291464} onError={this._onVimeoError} />,
        </div>
      </section>
    );
  }
}

Videos.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
};
