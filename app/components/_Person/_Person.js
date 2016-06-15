import React, { Component } from 'react';

import './_Person.styl';

export default class _Person extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.image); // TODO
  }

  render() {
    return (
      <div className="Person">
        <div className="Person-image">
          <span className="Person-job">{this.props.job}</span>
        </div>
        <p className="Person-firstname">{this.props.firstname}</p>
        <p className="Person-lastname">{this.props.lastname}</p>
      </div>
    );
  }
}
