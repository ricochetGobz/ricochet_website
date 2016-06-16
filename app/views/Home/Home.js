import React, { Component } from 'react';
import TweenLite from 'gsap';

import Slider from '../../components/Slider/Slider';

import Acceuil from './Acceuil/Acceuil';
import Project from './Project/Project';
import Videos from './Videos/Videos';
import Team from './Team/Team';

import './Home.styl';

const ACCEUIL = 0;
const PROJECT = 1;
const VIDEOS = 2;
const TEAM = 3;


export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: ACCEUIL,
      nextView: -1,
      height: 500,
      style: {
        height: '500px',
        margin: '200px auto',
      },
      currentPosition: 0,
    };

    this._onScroll = this._onScroll.bind(this);
    this._selectView = this._selectView.bind(this);
    this._changeView = this._changeView.bind(this);
    this._resizeView = this._resizeView.bind(this);
  }

  componentDidMount() {
    this.refs.home.addEventListener('mousewheel', this._onScroll);

    // Get height view
    this._resizeView();
    document.addEventListener('resize', this._resizeView);
  }

  _resizeView() {
    const marginTop = 160;
    const marginBottom = 64;
    this.setState({ height: window.innerHeight, style: {
      height: `${window.innerHeight - marginTop - marginBottom}px`,
      margin: `${marginTop}px auto ${marginBottom}px auto`,
    },
    });
  }

  _onScroll(e) {
    if (this.state.nextView === -1 && Math.abs(e.deltaY) > 20) {
      if (e.deltaY > 0) {
        if (this.state.currentView !== ACCEUIL) {
          this._selectView(this.state.currentView - 1);
        }
      } else {
        if (this.state.currentView !== TEAM) {
          this._selectView(this.state.currentView + 1);
        }
      }
    }
  }

  _selectView(nextView) {
    this.setState({ currentView: -1, nextView });
  }

  _changeView() {
    if (this.state.nextView === -1) {
      console.log('Home._changeView() ERROR : no nextView saved');
      return;
    }

    TweenLite.to(this.refs.homeWrapper, 1, { onComplete: () => {
      this.setState({ currentView: this.state.nextView, nextView: -1 });
    },
      ease: Power3.easeOut,
      'margin-top': this.state.currentPosition - (this.state.nextView * this.state.height) }
    );
  }

  render() {
    return (
      <div ref="home" className="Home">
        <div ref="homeWrapper" className="Home-wrapper">
          <Acceuil style={this.state.style} openned={(this.state.currentView === ACCEUIL)} changeView={this._changeView} />
          <Project style={this.state.style} openned={(this.state.currentView === PROJECT)} changeView={this._changeView} />
          <Videos style={this.state.style} openned={(this.state.currentView === VIDEOS)} changeView={this._changeView} />
          <Team style={this.state.style} openned={(this.state.currentView === TEAM)} changeView={this._changeView} />
        </div>

        <Slider currentView={this.state.currentView} selectView={this._selectView} />
      </div>
    );
  }
}
