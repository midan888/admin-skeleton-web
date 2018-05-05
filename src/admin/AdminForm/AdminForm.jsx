import * as React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import withStyles from 'material-ui/styles/withStyles';

export const styles = () => ({
  root: {
    padding: 16,
  },
  formGroup: {
    marginBottom: '16px',
  },
});

class AdminForm extends React.Component {
  componentDidMount() {
    const { requestAdmin, match } = this.props;
    const adminId = match.params.id;

    if (adminId) {
      requestAdmin(adminId);
    }
  }

  handleFieldChange = (event) => {
    const { name, value } = event.currentTarget;
    const { changeModel, model } = this.props;

    model[name] = value;

    changeModel(model);
  }

  handleSubmit = () => {
    const { model, submitModel } = this.props;

    submitModel(model);
  }

  isEditMode() {
    const { model } = this.props;

    return Boolean(model.id);
  }

  handleDeleteClick = async () => {
    const { model, requestAdminDelete, history } = this.props;

    requestAdminDelete(model.id);
    history.push('/admin');
  }

  render() {
    const { classes, model } = this.props;

    return (
      <Paper className={classes.root}>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            name="firstName"
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.firstName}
            label="First name"
          />
          <TextField
            fullWidth
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.lastName}
            name="lastName"
            label="Last name"
          />
          <TextField
            fullWidth
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.email}
            name="email"
            label="Email"
          />
          <TextField
            fullWidth
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.phoneNumber}
            name="phoneNumber"
            label="Phone number"
          />
          <TextField
            fullWidth
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            name="password"
            label="Password"
          />
          <TextField
            fullWidth
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            name="confirmPassword"
            label="Confirm password"
          />
        </form>
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleSubmit}
        >
          {this.isEditMode() ? 'Edit admin' : 'Create Admin'}
        </Button>
        {this.isEditMode() && (
          <Button
            variant="raised"
            onClick={this.handleDeleteClick}
          >
            Delete admin
          </Button>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(AdminForm);
