import React, { Component } from 'react';

import Person from '../../../components/_Person/_Person.js';
import './Team.styl';

export default class Team extends Component {
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
      <section className="Home-section Team" style={this.props.style}>
        <h2>L équipe</h2>
        <ul className="Team-persons">
          <li className="Team-person">
            <Person job="Designer" firstname="Tony" lastname="Tran" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Arthur" lastname="Robert" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Designeuse" firstname="Sophie" lastname="Broche" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Jérémie" lastname="Boulay" image="/" />
          </li>
          <li className="Team-person">
            <Person job="Développeuse" firstname="Chloé" lastname="Henaut" image="/" />
          </li>
        </ul>
      </section>
    );
  }
}

Team.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
  changeView: React.PropTypes.func,
};
