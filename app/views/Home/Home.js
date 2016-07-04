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
      height: window.innerHeight,
      views: [
        { name: 'Accueil', elm: <Accueil /> },
        { name: 'Projet', elm: <Project /> },
        // { name: 'Vidéos', elm: <Videos /> },
        { name: 'L\'Équipe', elm: <Team /> },
      ],
    };

    this._onScroll = this._onScroll.bind(this);
    this._changeView = this._changeView.bind(this);
    this._resizeView = this._resizeView.bind(this);
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
    const currentView = parseInt((this.refs.home.scrollTop / this.state.height) + 0.55, 10);
    if (currentView !== this.state.currentView && currentView < this.state.views.length && !this._scrolling) {
      this.setState({ currentView });
    }
  }

  _changeView(nextView) {
    this._scrolling = true;
    this.setState({ currentView: nextView });
    TweenLite.to(this.refs.home, 1.5, {
      onComplete: () => { this._scrolling = false; },
      scrollTo: { y: nextView * this.state.height },
      ease: Power3.easeOut,
    });
  }

  render() {
    const style = { height: `${this.state.height}px` };
    // DOESN T WORK
    // {this.state.views.map((view, key) => {
    //   view.elm.props.style = this.state.style;
    //   view.elm.props.openned = (this.state.currentView === key);
    //   // view.elm.props.changeView = this.state.style;
    //   return view.elm;
    // })}

    // <Videos style={this.state.style} openned={(this.state.currentView === this.state.views[2].id)} changeView={this._changeView} />
    return (
      <div ref="home" className="Home">
        <Accueil style={style} openned={(this.state.currentView === 0)} />
        <Project style={style} openned={(this.state.currentView === 1)} />
        <Team style={style} openned={(this.state.currentView === 2)} />
        <Slider views={this.state.views} currentView={this.state.currentView} changeView={this._changeView} />
      </div>
    );
  }
}
