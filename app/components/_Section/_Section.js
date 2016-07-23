import React, { Component } from 'react';

export default class _Section extends Component {
  constructor(props) {
    super(props);

    this._checkStatus = this._checkStatus.bind(this);
    this._toggle = this._toggle.bind(this);
    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
  }

  componentDidMount() {
    this._checkStatus();
  }

  componentDidUpdate() {
    this._checkStatus();
  }

  _checkStatus() {
    if (this.props.openned !== this._openned) {
      this._openned = this.props.openned;
      this._toggle();
    }
  }

  _toggle() {
    if (this._openned) {
      this._open();
    } else {
      this._close();
    }
  }

  _open() {
    console.warn('_open is not impremented by the child');
  }

  _close() {
    console.warn('_close is not impremented by the child');
  }
}

_Section.propTypes = {
  openned: React.PropTypes.bool,
};
