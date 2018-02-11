import * as React from 'react';
import Header from './Header';
import withStyles, { WithStyles, StyledComponentProps } from 'material-ui/styles/withStyles';

const styles = {
  root: {
    fontFamily: 'Roboto',
    paddingTop: 64,
    padding: 16,
  },
};

export interface Props {
  children: any;
}

export type ClassKeys = 'root';
export type PropsWithStyles = Props & WithStyles<ClassKeys>;

const Layout = ({ classes, children }: PropsWithStyles) => (
  <div className={classes.root}>
    <Header />
    {children}
  </div>
);

export default withStyles(styles)(Layout);
