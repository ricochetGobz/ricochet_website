import React, { Component } from 'react';

import './Videos.styl';

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        this._open();
      } else {
        this._close();
      }
      this._openned = this.props.openned;
    }
  }

  _open() {
    console.log("open Team");
  }

  _close() {
    console.log("close Team");
    this.props.changeView();
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
  changeView: React.PropTypes.func,
};
