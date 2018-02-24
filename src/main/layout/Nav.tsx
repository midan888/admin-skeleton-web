import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import { Person } from 'material-ui-icons';
import { connect } from 'react-redux';
import { IRootState } from '../interface';
import { SideBarStatus, ICloseSideBar, IChangeUrl } from "./interfaces";
import { closeSideBar, changeUrl } from './action';
import { History } from 'history';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from "react-router-dom";

export interface Props extends RouteComponentProps<any>{
  sideBarStatus: SideBarStatus;
  closeSideBar: ICloseSideBar;
  changeUrl: IChangeUrl;
}

class Nav extends React.Component<Props> {
  handleMenuClick = (path: string) => () => {
    const { history, closeSideBar } = this.props;

    history.push(path);
    closeSideBar();
  }

  render() {
    const { sideBarStatus, closeSideBar, changeUrl } = this.props;

    return (
      <Drawer
        anchor='left'
        open={sideBarStatus === SideBarStatus.open}
        onClose={closeSideBar}
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

const mapState = ({ layout }: IRootState) => ({
  sideBarStatus: layout.sideBarStatus,
});

const mapDispatch = {
  closeSideBar,
  changeUrl,
};

export default connect(mapState, mapDispatch)(withRouter(Nav));
