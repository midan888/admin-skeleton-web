import * as React from 'react';
import TextField from 'material-ui/TextField';
import FormGroup from 'material-ui/Form/FormGroup';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { RouteComponentProps } from 'react-router-dom';
import withStyles, {
  WithStyles,
  StyleRulesCallback,
  StyledComponentProps,
} from 'material-ui/styles/withStyles';
import { connect } from 'react-redux';
import { IAdminModel, ChangeModelType, SubmitModelType } from './interfaces';

export type ClassKeys = 'root' | 'formGroup';

export type Props = {
  model: IAdminModel;
  changeModel: ChangeModelType;
  submitModel: SubmitModelType;
  requestAdmin: any;
  requestAdminDelete: any;
};

export const styles: StyleRulesCallback<ClassKeys> = theme => ({
  root: {
    padding: 16,
  },
  formGroup: {
    marginBottom: '16px',
  },
});

class AdminForm extends React.Component<Props & WithStyles<ClassKeys> & RouteComponentProps<any>> {
  componentDidMount() {
    const { requestAdmin, match } = this.props;
    const adminId = match.params.id;

    if (adminId) {
      requestAdmin(adminId);
    }
  }

  handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    const { changeModel, model } = this.props;

    model[name] = value;

    changeModel(model);
  }

  handleSubmit = (event: React.MouseEvent<HTMLInputElement>): void => {
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
        <form noValidate={true} autoComplete="off">
          <TextField
            fullWidth={true}
            name="firstName"
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.firstName}
            label="First name"
          />
          <TextField
            fullWidth={true}
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.lastName}
            name="lastName"
            label="Last name"
          />
          <TextField
            fullWidth={true}
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.email}
            name="email"
            label="Email"
          />
          <TextField
            fullWidth={true}
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            value={model.email}
            name="phoneNumber"
            label="Phone number"
          />
          <TextField
            fullWidth={true}
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            name="password"
            label="Password"
          />
          <TextField
            fullWidth={true}
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
          {this.isEditMode() ? 'Create Admin' : 'Edit admin'}
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
