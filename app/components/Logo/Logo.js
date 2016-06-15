import React, { Component } from 'react';

import logo from '../../assets/imgs/logo.png';

const logoStyle = {
  width: '100%',
};

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return <img src={logo} style={logoStyle} alt="Logo Ricochet" />;
  }
}
