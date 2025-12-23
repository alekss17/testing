import { connect } from "react-redux";
import { onAddMessage, DeleteMessageTH } from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import AuthRedirectComponent from "../../hoc/WithAuthNavigate";
import { dialogsMessagesSelector, dialogsSelector } from "../../redux/selectors/DialogsSelector";
import { RootState } from "../../redux/redux-store";

let MapStateToProps = (state: RootState) => {
  return {
  dialogs: dialogsSelector(state),
  dialogsMessages: dialogsMessagesSelector(state),
  }
}

export default compose(
  connect(MapStateToProps, {onAddMessage, DeleteMessageTH}),
  AuthRedirectComponent
)(Dialogs);