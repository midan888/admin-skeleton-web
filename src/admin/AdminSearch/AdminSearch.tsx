import * as React from 'react';
import { connect } from 'react-redux';
import { IAdministrator } from './interfaces';
import { IRootState } from '../../main/interface';
import { requestAdmins } from './actions';
import AdminItem from './AdminItem';

interface Props {
  items: IAdministrator[];
  requestAdmins: any;
}

class AdminSearch extends React.Component<Props> {
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

const mapState = ({ admin }: IRootState) => ({
  items: admin.search.items,
})

const mapDispatch = {
  requestAdmins,
}

export default connect(mapState, mapDispatch)(AdminSearch);
