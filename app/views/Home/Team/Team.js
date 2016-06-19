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
        <h2 className="Team-title">{'L\'Équipe'}</h2>
        <ul className="Team-persons">
          <li className="Team-person">
            <Person job="Designer" firstname="Tony" lastname="Tran" image={require('../../../assets/imgs/team/tony_tran.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Arthur" lastname="Robert" image={require('../../../assets/imgs/team/arthur_robert.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Designer" firstname="Sophie" lastname="Broche" image={require('../../../assets/imgs/team/sophie_broche.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Jérémie" lastname="Boulay" image={require('../../../assets/imgs/team/jeremie_boulay.jpg')} />
          </li>
          <li className="Team-person">
            <Person job="Développeur" firstname="Chloé" lastname="Henaut" image={require('../../../assets/imgs/team/chloe_henaut.jpg')} />
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
