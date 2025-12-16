import { connect } from "react-redux";
import { onAddMessage, DeleteMessageTH } from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import AuthRedirectComponent from "../../hoc/WithAuthNavigate";
import { GetIsAuth, GetisAuthChecking } from "../../redux/selectors/authSelector";
import { dialogsMessagesSelector, dialogsSelector } from "../../redux/selectors/DialogsSelector";

let MapStateToProps = (state) => {
  return {
  dialogs: dialogsSelector(state),
  dialogsMessages: dialogsMessagesSelector(state),
  isAuth: GetIsAuth(state),
  isAuthChecking: GetisAuthChecking(state)
  }
}

export default compose(
  connect(MapStateToProps, {onAddMessage, DeleteMessageTH}),
  AuthRedirectComponent
)(Dialogs);