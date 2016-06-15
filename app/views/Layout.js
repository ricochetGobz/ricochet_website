import React, { Component } from 'react';

import Navbar from '../components/Navbar/Navbar';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="layout" ref="layout" className="_layout">
        <Navbar />
        { this.props.children }
      </div>
    );
  }
}
Layout.propTypes = { children: React.PropTypes.node };
