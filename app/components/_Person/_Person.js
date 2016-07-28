import React, { Component } from 'react';

import './_Person.styl';

export default class _Person extends Component {

  render() {
    return (
      <div className="Person" onClick={() => {window.open(this.props.url, '_blank').focus();}} >
        <div className="Person-capsule">
          <img className="Person-image"
            src={this.props.image}
            alt={`${this.props.firstname} ${this.props.lastname}`}
          />
          <span className="Person-job">{this.props.job}</span>
        </div>
        <p className="Person-firstname">{this.props.firstname}</p>
        <p className="Person-lastname">{this.props.lastname}</p>
      </div>
    );
  }
}


_Person.propTypes = {
  image: React.PropTypes.string,
  firstname: React.PropTypes.string,
  lastname: React.PropTypes.string,
  job: React.PropTypes.string,
  url: React.PropTypes.string,
};
