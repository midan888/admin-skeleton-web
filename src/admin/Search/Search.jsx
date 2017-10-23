import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectStyles from 'react-jss';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Link } from 'react-router-dom';
import styles from './styles';

class Search extends Component {
  componentWillMount() {
    this.props.requestSearchData();
  }

  render() {
    const { admins } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map(admin => (
            <TableRow key={admin.email}>
              <TableCell>{admin.email}</TableCell>
              <TableCell>{admin.firstName}</TableCell>
              <TableCell>{admin.lastName}</TableCell>
              <TableCell>
                <Link to={`/admin/${admin._id}`}>edit</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

Search.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  })).isRequired,

  requestSearchData: PropTypes.func.isRequired,
};

export default injectStyles(styles)(Search);
