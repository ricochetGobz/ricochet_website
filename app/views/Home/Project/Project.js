import React, { Component } from 'react';

import Cube from '../../../components/Cube/Cube';

import './Project.styl';


export default class Project extends Component {
  constructor(props) {
    super(props);

    this._rotationStarter = false;

    this.state = {
      face: -1,
      startRotation: false,
      lastFace: 0,
    };
  }

  componentDidMount() {
    this._checkStatus();
  }

  componentDidUpdate() {
    this._checkStatus();
    if (this.state.startRotation && !this._rotationStarter) this._startRotation();
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
    console.log('open Project');
    this.setState({ face: this.state.lastFace, startRotation: true });
  }

  _close() {
    console.log('close Project');
    this.setState({ face: -1, startRotation: false });
    this.props.changeView();
  }

  _startRotation() {
    this._rotationStarter = true;
    setTimeout(() => {
      this._rotationStarter = false;
      const newFace = ((this.state.lastFace + 1) % 6);
      this.setState({ face: newFace, lastFace: newFace });
    }, 3500);
  }

  render() {
    return (
      <section className="Home-section Project" style={this.props.style}>
        <div className="Project-column">
          <div className="Project-cube">
            <Cube face={this.state.face} />
          </div>
        </div>
        <div className="Project-column">
          <h2 className="Project-title"><span>le projet</span> <br /> ricochet</h2>
          <p className="Project-subtitle">Une musique insonore</p>
          <p className="Project-paragraph"> Nous n’avons pas pour objectif de faire
            à nouveau entendre les personnes sourdes/malentendants,
            de leurs faire retrouver l’ouïe, de retrouver un sens perdu.
            <br /> <br />
            Notre projet, au contraire souhaite s’appuyer sur tout les autres
            sens et sur un dispositif collaboratif afin de faire découvrir
            la musique autrement (autant aux sourds qu’aux personnes ordinaires ).
            Cette expérience a pour but de faire découvrir et partager.
          </p>
        </div>
      </section>
    );
  }
}

Project.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
  changeView: React.PropTypes.func,
};
