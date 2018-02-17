import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import { changeModel, submitModel } from './actions';
import { IRootState } from '../../main/interface';

const mapState = ({ admin }: IRootState) => ({
  model: admin.form.model,
});

const mapDispatch = {
  changeModel,
  submitModel,
};

export default connect(mapState, mapDispatch)(AdminForm);
