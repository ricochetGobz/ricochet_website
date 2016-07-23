import React from 'react';

import utils from '../../../core/utils';
import SpritePlayer from '../../../core/SpritePlayer';
import TextAnimation from '../../../core/TextAnimation/TextAnimation';

import _Section from '../../../components/_Section/_Section';
import _Title from '../../../components/_Title/_Title';
import Cube from '../../../components/Cube/Cube';

import './Project.styl';


export default class Project extends _Section {
  constructor(props) {
    super(props);

    this._rotationStarted = false;
    this._projectAnimation = new TimelineLite();
    this._notesSprite = [];

    this.state = {
      openned: false,
      face: -1,
      startRotation: false,
      lastFace: 0,
    };

    this._loadSprite = this._loadSprite.bind(this);
  }

  componentDidMount() {
    super.componentDidMount();
    this._projectAnimation.from(this.refs.project, 0.5, { ease: Power2.easeIn, opacity: 0 });
    this._titleHeadAnimation = new TextAnimation(this.refs.titleHead, 50, 'right');
    this._titleHeadAnimation.addEffectForEachLetter(
      (animationsArray) => animationsArray[utils.getRandomInt(1, animationsArray.length - 1)]
    );
    this._loadSprites();
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    if (this.state.startRotation && !this._rotationStarted) this._startRotation();
  }

  _open() {
    // this._projectAnimation.play();
    this._titleHeadAnimation.show(() => {
      this.setState({ openned: true, face: this.state.lastFace, startRotation: true });
    });
    // this._notesSprite[this.state.lastFace].player.play();
  }

  _close() {
    if (this.state.openned) {
      // this._projectAnimation.reverse();
      this._titleHeadAnimation.hide();
      this.setState({ openned: false, face: -1, startRotation: false });
    }
  }

  _startRotation() {
    this._rotationStarted = true;
    setTimeout(() => {
      this._rotationStarted = false;
      const newFace = ((this.state.lastFace + 1) % 6);
      this.setState({ face: newFace, lastFace: newFace });
      // this._notesSprite[newFace].player.play();
    }, 3500);
  }

  _loadSprites() {
    for (let i = 1; i <= 6; i++) {
      this._notesSprite.push({
        player: new SpritePlayer(this.refs.notes),
        url: require(`../../../assets/imgs/sprites/son${i}/son${i}.png`),
        data: require(`../../../assets/imgs/sprites/son${i}/son${i}.json`),
      });
    }
    this._loadSprite(0);
  }

  _loadSprite(id) {
    if (id < this._notesSprite.length) {
      const loadSprite = (_id) => this._loadSprite(_id);
      this._notesSprite[id].player.load(
        this._notesSprite[id].url,
        this._notesSprite[id].data,
        loadSprite.bind(this, id + 1)
      );
    } else {
      console.log('All sprites loaded');
    }
  }

  render() {
    return (
      <section ref="project" className="Home-section Project" style={this.props.style}>
        <div className="Project-column Project-column_left">
          <canvas ref="notes" className="Project-notes" />
          <div className="Project-cube">
            <Cube face={this.state.face} />
          </div>
        </div>
        <div className="Project-column Project-column_right">
          <p className="Project-titleHead" ref="titleHead" >le projet</p>
          <_Title _className="Project-title" openned={this.state.openned}>Ricochet</_Title>
          <p className="Project-subtitle">Une musique insonore</p>
          <p className="Project-paragraph"> Nous n’avons pas pour objectif de faire
            à nouveau entendre les personnes sourdes/malentendantes,
            de leur faire retrouver l’ouïe, de retrouver un sens perdu.
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
};
