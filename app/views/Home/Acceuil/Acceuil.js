import React, { Component } from 'react';

import Logo from '../../../components/Logo/Logo';

import './Acceuil.styl';


export default class Acceuil extends Component {
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
    console.log("open Acceuil");
  }

  _close() {
    console.log("close Acceuil");
    this.props.changeView();
  }

  render() {
    return (
      <section className="Home-section Acceuil" style={this.props.style}>
          <div className="Acceuil-logo">
            <Logo />
          </div>
          <div ref="scrollIndicator" className="Acceuil-scrollIndicator">
            <div className="Acceuil-mouse"></div>
            <div className="Acceuil-arrowDown"></div>
            <p>scroll <br /> pour naviguer</p>
          </div>
      </section>
    );
  }
}

Acceuil.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
  changeView: React.PropTypes.func,
};
