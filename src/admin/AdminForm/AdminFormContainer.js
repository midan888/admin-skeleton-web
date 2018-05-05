import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { changeModel, submitModel, requestAdmin, requestAdminDelete } from './actions';

const mapState = ({ admin }) => ({
  model: admin.form.model,
});

const mapDispatch = {
  changeModel,
  submitModel,
  requestAdmin,
  requestAdminDelete,
};

export default connect(mapState, mapDispatch)(AdminForm);
