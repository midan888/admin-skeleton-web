import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Header from './Header';

const styles = {
  root: {
    fontFamily: 'Roboto',
    paddingTop: 64,
  },
};

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
};

export default injectSheet(styles)(Layout);
