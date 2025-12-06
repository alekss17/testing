import { connect } from "react-redux";
import { onAddMessage} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";

let MapStateToProps = (state) => {
  return {
  dialogs: state.DialogsReducer.dialogs,
  dialogsMessages: state.DialogsReducer.Messages,
  isAuth: state.auth.isAuth,
  isAuthChecking: state.auth.isAuthChecking
  }
}

export default connect(MapStateToProps, {onAddMessage})(Dialogs);