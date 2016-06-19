import React, { Component } from 'react';
import { Link } from 'react-router';

import './Navbar.styl';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    // <li className="Navbar-link"><Link to="/experience/">l expérience</Link></li>
    // <li className="Navbar-link"><Link to="/gallerie/">gallerie</Link></li>

    return (
      <nav className="Navbar">
        <li className="Navbar-link"><Link to="/">le projet</Link></li>
        <li className="Navbar-link Navbar-link_right Navbar-link_hidden"><Link to="/experiment/">L experience</Link></li>
        <li className="Navbar-link Navbar-link_right Navbar-link_hidden"><Link to="/galery/">Galerie</Link></li>
        <li className="Navbar-link Navbar-link_right Navbar-link_hidden"><Link to="/apropo/">a propos</Link></li>
      </nav>
    );
  }
}
