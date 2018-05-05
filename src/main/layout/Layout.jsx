import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';

import Header from './Header';
import Nav from './Nav';

const styles = {
  root: {
    fontFamily: 'Roboto',
    paddingTop: 64,
    padding: 16,
  },
};

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <Header />
    <Nav />
    {children}
  </div>
);

export default withStyles(styles)(Layout);
