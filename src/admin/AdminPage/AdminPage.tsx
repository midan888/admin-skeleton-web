import * as React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import { History } from 'history';
import { withStyles, WithStyles, StyleRules } from 'material-ui/es/styles';
import PageHeader from '../../main/layout/PageHeader';

const styles: StyleRules = {
  root: {
    padding: '16px',
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'grid',
    paddingTop: '16px',
  },
  buttonWrap: {
    marginBottom: 16,
  }
}

export type ClassKeys = 'root' | 'content' | 'buttonWrap' | 'pageHeader';

export type  RouteStyleInterface = RouteComponentProps<any> & WithStyles<ClassKeys>

interface Props extends RouteStyleInterface {

}

const onButtonClick = (history: History) => () => {
  history.push('/admin/create')
};

const AdminPage = ({ classes, history }: Props) => (
  <Paper className={classes.root}>
    <PageHeader
      title="Administrators"
      buttonTitle="Create"
      onButtonClick={onButtonClick(history)}
    />
  </Paper>
);

export default withStyles(styles)(withRouter(AdminPage));
