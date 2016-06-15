import React, { Component } from 'react';

// import './Cube.styl';
import cubeImg from '../../assets/imgs/cube.png';

const cubeStyle = {
  width: '100%',
};


export default class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return <img src={cubeImg} style={cubeStyle} alt="Image cube" />;
  }
}
