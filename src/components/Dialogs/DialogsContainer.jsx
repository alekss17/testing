import { connect } from "react-redux";
import { onAddMessage, onDialogChange} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import AuthRedirectComponent from '../../hoc/WithAuthNavigate'
import { compose } from "redux";

let MapStateToProps = (state) => {
  return {
  dialogs: state.DialogsReducer.dialogs,
  dialogsMessages: state.DialogsReducer.Messages,
  newDialogText: state.DialogsReducer.newDialogText,
  isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(MapStateToProps, {onAddMessage, onDialogChange}),
  AuthRedirectComponent
)(Dialogs);