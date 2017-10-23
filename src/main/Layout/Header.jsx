import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const Header = () => (
  <AppBar color="default">
    <Toolbar>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <Typography>
        Admin skeleton
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
