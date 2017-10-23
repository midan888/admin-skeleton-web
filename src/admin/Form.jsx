import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText, FormGroup } from 'material-ui/Form';

class Form extends Component {
  componentWillMount() {
    const { requestAdminData, match } = this.props;

    requestAdminData(match.params.id);
  }

  render() {
    const { form } = this.props;

    return (
      <div>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="first-name">First name</InputLabel>
            <Input id="first-name" value={form.firstName} />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="last-name">Last name</InputLabel>
            <Input id="last-name" value={form.lastName} />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" value={form.email} />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" value={form.password} />
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

Form.propTypes = {
  requestAdminData: PropTypes.func.isRequired,
  match: PropTypes.objectOf(Object).isRequired,
};


export default Form;
