import * as React from 'react';
import { connect } from 'react-redux';

import { requestAdmins } from './actions';
import AdminItem from './AdminItem';

class AdminSearch extends React.Component {
  componentDidMount() {
    this.props.requestAdmins();
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item => (
          <AdminItem data={item} key={item.id} />
        ))}
      </div>
    );
  }
}

const mapState = ({ admin }) => ({
  items: admin.search.items,
});

const mapDispatch = {
  requestAdmins,
};

export default connect(mapState, mapDispatch)(AdminSearch);
