import React, { Component } from 'react';

import Slider from '../../components/Slider/Slider';

import Acceuil from './Acceuil/Acceuil';
import Project from './Project/Project';
import Videos from './Videos/Videos';
import Team from './Team/Team';

import './Home.styl';


export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="Home">
        <Acceuil />
        <Project />
        <Videos />
        <Team />

        <Slider />
      </div>
    );
  }
}
