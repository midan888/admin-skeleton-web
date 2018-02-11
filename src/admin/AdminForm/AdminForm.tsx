import * as React from 'react';
import { TextField } from 'material-ui';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import withStyles, {
  WithStyles,
  StyleRulesCallback,
  StyledComponentProps,
} from 'material-ui/styles/withStyles';
import { IAdminModel } from './interfaces';

export type ClassKeys = 'root' | 'formGroup';

export type State = {
  model: IAdminModel;
};

export type Props = WithStyles<ClassKeys>;

export const styles: StyleRulesCallback<ClassKeys> = theme => ({
  root: {
    padding: 16,
  },
  formGroup: {
    marginBottom: '16px',
  },
});

class AdminForm extends React.Component<Props> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      model: {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
      },
    };
  }

  handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
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
      </Paper>
    );
  }
}

export default withStyles(styles)<{}>(AdminForm);
