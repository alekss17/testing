import { connect } from "react-redux";
import { onAddMessage} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import AuthRedirectComponent from "../../hoc/WithAuthNavigate";

let MapStateToProps = (state) => {
  return {
  dialogs: state.DialogsReducer.dialogs,
  dialogsMessages: state.DialogsReducer.Messages,
  isAuth: state.auth.isAuth,
  isAuthChecking: state.auth.isAuthChecking
  }
}

export default compose(
  connect(MapStateToProps, {onAddMessage}),
  AuthRedirectComponent
)(Dialogs);