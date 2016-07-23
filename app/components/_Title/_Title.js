import React, { Component } from 'react';

import TextAnimation from '../../core/TextAnimation/TextAnimation';
import utils from '../../core/utils';

import './_Title.styl';

export default class _Title extends Component {
  constructor(props) {
    super(props);
    this._titleAnimation = false;

    this.state = {
      openned: false,
    };

    this._toggleTitleAnimation = this._toggleTitleAnimation.bind(this);
  }
  componentDidMount() {
    this._titleAnimation = new TextAnimation(this.refs.title);
    // IN PROGRESS
    this._titleAnimation.addEffectForEachLetter(
      (animationsArray) => animationsArray[utils.getRandomInt(1, animationsArray.length - 1)]
    );
    this._toggleTitleAnimation();
  }

  componentDidUpdate() {
    this._toggleTitleAnimation();
  }

  _toggleTitleAnimation() {
    if (this.state.openned !== this.props.openned) {
      if (!this.state.openned) {
        this._titleAnimation.show(() => {
          this.setState({ openned: true });
          this.refs.title.classList.remove('Title-hidden');
        });
      } else {
        this._titleAnimation.hide(() => {
          this.setState({ openned: false });
        });
        this.refs.title.classList.add('Title-hidden');
      }
    }
  }

  render() {
    return (
      <h2 ref="title" className={`Title Title-hidden ${this.props._className}`} >{this.props.children}</h2>
    );
  }
}


_Title.propTypes = {
  children: React.PropTypes.node,
  _className: React.PropTypes.string,
  openned: React.PropTypes.bool,
};
