import React from 'react';

import utils from '../../../core/utils';
import SpritePlayer from '../../../core/SpritePlayer';
import TextAnimation from '../../../core/TextAnimation/TextAnimation';

import _Section from '../../../components/_Section/_Section';
import _Paragraph from '../../../components/_Paragraph/_Paragraph';
import _Parallax from '../../../components/_Parallax.temp/_Parallax.temp';
import Cube from '../../../components/Cube/Cube';

import './Project.styl';


export default class Project extends _Section {
  constructor(props) {
    super(props);

    this._rotationStarted = false;
    this._titleHeadAnimation = false;
    this._cubeAnimation = new TimelineLite();
    this._notesSprite = [];

    this.state = {
      openned: false,
      face: -1,
      startRotation: false,
      lastFace: 0,
    };

    this._loadSprite = this._loadSprite.bind(this);
    this._onParagraphShowed = this._onParagraphShowed.bind(this);
  }

  componentDidMount() {
    super.componentDidMount();
    // this._cubeAnimation.from(this.refs.cube, 0.7, { opacity: 0 }, '+=1.5');
    this._titleHeadAnimation = new TextAnimation(this.refs.titleHead, 50);
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
    // this._cubeAnimation.play();
    this._titleHeadAnimation.show(() => {
      this.setState({ openned: true, face: this.state.lastFace, startRotation: true });
    });
    // this._notesSprite[this.state.lastFace].player.play();
  }

  _onParagraphShowed() {
    if (this.state.openned) {
      // NEXT
    }
  }

  _close() {
    if (this.state.openned) {
      this._titleHeadAnimation.hide();
      this.setState({ openned: false, face: -1, startRotation: false });
      // this._cubeAnimation.reverse();
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
        <div ref="cube" className="Project-column Project-column_left _foreground">
          <_Parallax
            speed={2}
            width="160px"
            top={`${super._getPosYWithPurcent(165)}px`}
            scrollTop={this.props.scrollTop}
          >
            <canvas ref="notes" className="Project-notes" />
            <div className="Project-cube">
              <Cube face={this.state.face} />
            </div>
          </_Parallax>
        </div>
        <div className="Project-column Project-column_right">
          <p className="Project-titleHead" ref="titleHead" >le projet</p>
          <_Paragraph
            title="Ricochet"
            openned={this.state.openned}
            onAnimationEnded={this._onParagraphShowed}
          >
            <p className="_hidden_mobile Project-subtitle">Une musique insonore</p>
            <p className="_hidden_mobile"> Nous n’avons pas pour objectif de faire
              à nouveau entendre les personnes sourdes/malentendantes,
              de leur faire retrouver l’ouïe, de retrouver un sens perdu.
            </p>
            <p className="_hidden_mobile">
              Notre projet, au contraire souhaite s’appuyer sur tout les autres
              sens et sur un dispositif collaboratif afin de faire découvrir
              la musique autrement (autant aux sourds qu’aux personnes ordinaires ).
              Cette expérience a pour but de faire découvrir et partager.
            </p>
          </_Paragraph>
        </div>
      </section>
    );
  }
}

Project.propTypes = {
  style: React.PropTypes.object,
  openned: React.PropTypes.bool,
};
