import * as React from 'react';
import { IAdministrator } from './interfaces';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Edit from 'material-ui-icons/Edit';
import { History } from 'history';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { StyleRules, withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

type Props = {
  key: number;
  data: IAdministrator;
};

type PropsWithStyles = Props & WithStyles<'root' | 'editIcon'> & RouteComponentProps<any>;

const styles: StyleRulesCallback = () => ({
  root: {
    flex: '0 1 auto',
    flexFlow: 'row wrap',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
    padding: '8px',
  },
  editIcon: {
    cursor: 'pointer',
  },
});

const handleEditClick = (history: History, id: number) => () => {
  history.push(`/admin/${id}`);
};

export const AdminItem: React.SFC<PropsWithStyles> = ({
  data,
  classes,
  history,
}) => (
  <div className={classes.root}>
    <div>
      <Typography>{data.id}</Typography>
    </div>
    <div>
      <Typography>{data.firstName}</Typography>
    </div>
    <div>
      <Typography>{data.lastName}</Typography>
    </div>
    <div>
      <Typography>{data.email}</Typography>
    </div>
    <div>
      <Edit
        className={classes.editIcon}
        onClick={handleEditClick(history, data.id)}
      />
    </div>
  </div>
);

export default withStyles(styles)<Props>(withRouter(AdminItem));
