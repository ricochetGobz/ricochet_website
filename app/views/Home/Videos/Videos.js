import React from 'react';

import _Section from '../../../components/_Section/_Section';

import './Videos.styl';

export default class Videos extends _Section {
  constructor(props) {
    super(props);
  }

  _open() {
    console.log('open Team');
  }

  _close() {
    console.log('close Team');
  }

  render() {
    return (
      <section className="Home-section Videos" style={this.props.style}>
        <h1>Video</h1>
      </section>
    );
  }
}

Videos.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
};
