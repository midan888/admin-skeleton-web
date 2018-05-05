import React, { Component } from 'react';

class Form extends Component {
  componentDidMount() {


    const { request, match } = this.props;
    const adminId = match.params.id;

    if (adminId) {
      requestAdmin(adminId);
    }
  }

  isEditMode() {
    const { model } = this.props;

    return Boolean(model.id);
  }

  handleFieldChange = (event) => {
    const { name, value } = event.currentTarget;
    const { changeModel, model } = this.props;

    model[name] = value;

    changeModel(model);
  }

  handleSubmit = (event) => {
    const { model, submitModel } = this.props;

    submitModel(model);
  }

  render() {
    const { children } = this.props;

    return (
      {children}
    );
  }
}
