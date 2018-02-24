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

    requestAdmin(match.params.id);
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
            id="name"
            label="First name"
          />
          <TextField
            fullWidth={true}
            className={classes.formGroup}
            value={model.lastName}
            id="name"
            label="Last name"
          />
          <TextField
            fullWidth={true}
            className={classes.formGroup}
            value={model.email}
            id="name"
            label="email"
          />
          <TextField
            fullWidth={true}
            className={classes.formGroup}
            id="name"
            label="Password"
          />
          <TextField
            fullWidth={true}
            className={classes.formGroup}
            id="name"
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
      </Paper>
    );
  }
}

export default withStyles(styles)(AdminForm);
