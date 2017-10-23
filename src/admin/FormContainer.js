import { connect } from 'react-redux';
import Form from './Form';
import { requestAdminData } from './actions';

const mapDispatch = {
  requestAdminData,
};

const mapState = ({ admin }) => ({
  form: admin.form,
});

export default connect(mapState, mapDispatch)(Form);
