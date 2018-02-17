import * as React from 'react';
import TextField from 'material-ui/TextField';
import FormGroup from 'material-ui/Form/FormGroup';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
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
};

export const styles: StyleRulesCallback<ClassKeys> = theme => ({
  root: {
    padding: 16,
  },
  formGroup: {
    marginBottom: '16px',
  },
});

class AdminForm extends React.Component<Props & WithStyles<ClassKeys>> {
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

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <form noValidate={true} autoComplete="off">
          <TextField
            fullWidth={true}
            name="firstName"
            onChange={this.handleFieldChange}
            className={classes.formGroup}
            id="name"
            label="First name"
          />
          <TextField
            fullWidth={true}
            className={classes.formGroup}
            id="name"
            label="Last name"
          />
          <TextField
            fullWidth={true}
            className={classes.formGroup}
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
        <Button variant="raised" onClick={this.handleSubmit}>Create Admin</Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(AdminForm);
