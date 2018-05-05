import * as React from 'react';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/es/styles';
import PageHeader from '../../main/layout/PageHeader';
import AdminSearch from '../AdminSearch';

const styles = {
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
  },
};

const onButtonClick = history => () => {
  history.push('/admin/form');
};

const AdminPage = ({ classes, history }) => (
  <Paper className={classes.root}>
    <PageHeader
      title="Administrators"
      buttonTitle="Create"
      onButtonClick={onButtonClick(history)}
    />
    <AdminSearch />
  </Paper>
);

export default withStyles(styles)(withRouter(AdminPage));
