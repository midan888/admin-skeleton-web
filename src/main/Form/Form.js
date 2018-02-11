import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      data: {},
    };
  }

  render() {
    const { children } = this.props;
    const { errors, data } = this.state;

    return (
      <form>

      </form>
    );
  }
}
