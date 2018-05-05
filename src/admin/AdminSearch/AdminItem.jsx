import * as React from 'react';
import Typography from 'material-ui/Typography';
import Edit from 'material-ui-icons/Edit';
import { withRouter } from 'react-router-dom';
import withStyles from 'material-ui/styles/withStyles';

const styles = () => ({
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

const handleEditClick = (history, id) => () => {
  history.push(`/admin/form/${id}`);
};

const AdminItem = ({
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

export default withStyles(styles)(withRouter(AdminItem));
