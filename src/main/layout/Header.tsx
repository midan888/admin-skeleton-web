import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui-icons/Menu';
import { connect } from 'react-redux';
import { openSideBar } from './action';
import { ICloseSideBar } from './interfaces';

export interface Props {
  openSideBar: ICloseSideBar;
}

const Header = ({ openSideBar }: Props) => (
  <AppBar color="default">
    <Toolbar>
      <IconButton onClick={openSideBar}>
        <Menu />
      </IconButton>
      <Typography>
        Admin skeleton
      </Typography>
    </Toolbar>
  </AppBar>
);

const mapDispatch = {
  openSideBar,
};

export default connect(null, mapDispatch)(Header);
