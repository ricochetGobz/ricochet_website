import React, { Component } from 'react';
import TweenLite from 'gsap';

import utils from '../../core/utils';

import Slider from '../../components/Slider/Slider';

import Accueil from './Accueil/Accueil';
import Project from './Project/Project';
import Videos from './Videos/Videos';
import Team from './Team/Team';

import './Home.styl';


export default class Layout extends Component {
  constructor(props) {
    super(props);

    this._marginTop = 100;
    this._marginBottom = 64;

    if (utils.mobileCheck()) {
      this._marginTop = 0;
      this._marginBottom = 0;
    }

    this.state = {
      currentView: 0,
      nextView: -1,
      height: 500,
      style: {
        height: '500px',
        margin: '200px auto',
      },
      views: [
        { id: 0, name: 'Accueil' },
        { id: 1, name: 'Projet' },
        // { id: 2, name: 'Vidéos' },
        { id: 2, name: 'L\'Équipe' },
      ],
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
    window.addEventListener('resize', this._resizeView);
  }

  _resizeView() {
    const margin = `${this._marginTop}px auto ${this._marginBottom}px auto`;
    const height = `${window.innerHeight - this._marginTop - this._marginBottom}px`;
    this.refs.homeWrapper.style.marginTop = `${-this.state.currentView * window.innerHeight}px`;
    this.setState({ height: window.innerHeight, style: { height, margin } });
  }

  _onScroll(e) {
    if (this.state.nextView === -1 && Math.abs(e.deltaY) > 20) {
      if (e.deltaY > 0) {
        if (this.state.currentView !== 0) {
          this._selectView(this.state.currentView - 1);
        }
      } else {
        if (this.state.currentView < this.state.views.length - 1) {
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
      'margin-top': -(this.state.nextView * this.state.height) }
    );
  }

  render() {
    // <Videos style={this.state.style} openned={(this.state.currentView === this.state.views[2].id)} changeView={this._changeView} />
    return (
      <div ref="home" className="Home">
        <div ref="homeWrapper" className="Home-wrapper">
          <Accueil style={this.state.style} openned={(this.state.currentView === this.state.views[0].id)} changeView={this._changeView} />
          <Project style={this.state.style} openned={(this.state.currentView === this.state.views[1].id)} changeView={this._changeView} />
          <Team style={this.state.style} openned={(this.state.currentView === this.state.views[2].id)} changeView={this._changeView} />
        </div>

        <Slider views={this.state.views} currentView={this.state.currentView} selectView={this._selectView} />
      </div>
    );
  }
}
