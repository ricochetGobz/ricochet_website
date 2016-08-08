import React, { Component } from 'react';
import TweenLite from 'gsap';
import '../../../node_modules/gsap/src/minified/plugins/ScrollToPlugin.min.js';

import Slider from '../../components/Slider/Slider';

import Accueil from './Accueil/Accueil';
import Project from './Project/Project';
import Videos from './Videos/Videos';
import Team from './Team/Team';

import './Home.styl';


export default class Layout extends Component {
  constructor(props) {
    super(props);

    this._scrolling = false;

    this.state = {
      currentView: 0,
      scrollTop: 0,
      height: window.innerHeight,
      views: [
        { name: 'Accueil', elm: <Accueil /> },
        { name: 'Projet', elm: <Project /> },
        { name: 'Vidéos', elm: <Videos /> },
        { name: 'L\'Équipe', elm: <Team /> },
      ],
    };

    this._onScroll = this._onScroll.bind(this);
    this._changeView = this._changeView.bind(this);
    this._resizeView = this._resizeView.bind(this);
    this._onAutoScrollEndded = this._onAutoScrollEndded.bind(this);
  }

  componentDidMount() {
    this.refs.home.addEventListener('scroll', this._onScroll);

    // Get height view
    window.addEventListener('resize', this._resizeView);
    this._resizeView();
  }

  _resizeView() {
    this.setState({ height: window.innerHeight });
  }

  _onScroll() {
    const scrollTop = this.refs.home.scrollTop;
    const _currentView = parseInt((scrollTop / this.state.height) + 0.55, 10);
    const currentView = (_currentView !== this.state.currentView && _currentView < this.state.views.length && !this._scrolling)
      ? _currentView
      : this.state.currentView
    ;

    this.setState({ scrollTop, currentView });
  }

  _changeView(nextView) {
    this._scrolling = true;
    this.setState({ currentView: nextView });
    TweenLite.to(this.refs.home, 1.5, {
      ease: Power1.easeOut,
      scrollTo: {
        y: nextView * this.state.height,
        onAutoKill: this._onAutoScrollEndded,
      },
      onComplete: this._onAutoScrollEndded,
    });
  }

  _onAutoScrollEndded() {
    this._scrolling = false;
  }

  render() {
    // Create an array woth each array view
    const views = this.state.views.map((view, key) =>
      React.cloneElement(view.elm, {
        key,
        id: key,
        height: this.state.height,
        scrollTop: this.state.scrollTop,
        openned: this.state.currentView === key,
      })
    );

    return (
      <div ref="home" className="Home">
        {views}
        <Slider views={this.state.views} currentView={this.state.currentView} changeView={this._changeView} />
      </div>
    );
  }
}
