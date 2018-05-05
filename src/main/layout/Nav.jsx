import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { Person } from 'material-ui-icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeSideBar, changeUrl } from './action';

class Nav extends React.Component {
  handleMenuClick = path => () => {
    const { history } = this.props;

    history.push(path);
    this.props.closeSideBar();
  }

  render() {
    const { sideBarStatus } = this.props;

    return (
      <Drawer
        anchor="left"
        open={sideBarStatus === 1}
        onClose={this.props.closeSideBar}
      >
        <MenuList>
          <MenuItem onClick={this.handleMenuClick('/admin')}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Administrators" />
          </MenuItem>
        </MenuList>
      </Drawer>
    );
  }
}

const mapState = ({ layout }) => ({
  sideBarStatus: layout.sideBarStatus,
});

const mapDispatch = {
  closeSideBar,
  changeUrl,
};

export default connect(mapState, mapDispatch)(withRouter(Nav));
