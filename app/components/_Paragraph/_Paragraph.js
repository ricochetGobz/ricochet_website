import React from 'react';

import _Section from '../../components/_Section/_Section';
import _Title from '../../components/_Title/_Title';

import './_Paragraph.styl';


export default class Paragraph extends _Section {
  constructor(props) {
    super(props);

    this._paragraphAnimation = false;

    this.state = {
      openned: false,
    };

    this._onTitleShowed = this._onTitleShowed.bind(this);
  }

  componentDidMount() {
    let i;
    const paragraphs = this.refs.paragraph.getElementsByClassName('Paragraph-paragraph');
    this._paragraphAnimation = new TimelineLite({ onComplete: this.props.onAnimationEnded });
    for (i = 0; i < paragraphs.length; i++) {
      this._paragraphAnimation.from(paragraphs[i], 0.5, { ease: Power2.easeOut, opacity: 0, transform: 'translateX(-16px)' }, '-=0.4');
    }
    this._paragraphAnimation.reverse();
  }

  _open() {
    this.setState({ openned: true });
  }

  _onTitleShowed() {
    if (this.state.openned) {
      // Show text
      this._paragraphAnimation.play();
    }
  }

  _close() {
    if (this.state.openned) {
      this._paragraphAnimation.reverse();
      this.setState({ openned: false });
    }
  }

  render() {
    let i;
    const paragraphs = (this.props.children.length) ? this.props.children : [this.props.children];

    for (i = 0; i < paragraphs.length; i++) {
      paragraphs[i].props.className = `${paragraphs[i].props.className ? paragraphs[i].props.className : ''} Paragraph-paragraph`;
    }

    return (
      <div ref="paragraph" className={`${this.props._className} Paragraph`}>
        <_Title openned={this.state.openned} onAnimationEnded={this._onTitleShowed}>
          {this.props.title}
        </_Title>
        {paragraphs}
      </div>
    );
  }
}

Paragraph.propTypes = {
  children: React.PropTypes.object,
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  openned: React.PropTypes.bool,
  onAnimationEnded: React.PropTypes.func,
};
