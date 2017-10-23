import { connect } from 'react-redux';
import Search from './Search/Search';
import { requestSearchData } from './actions';

const mapDispatch = {
  requestSearchData,
};

const mapState = ({ admin }) => ({
  admins: admin.admins,
});

export default connect(mapState, mapDispatch)(Search);
