import { connect } from "react-redux";
import { addMessageActionCreator, updateNewdialogChangeActionCreator } from "../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";

let MapDispatchToProps = (dispatch) => {
    return {
    onAddMessage: () => {
    dispatch(addMessageActionCreator());
    },
    onDialogChange: (text) => {
    dispatch(updateNewdialogChangeActionCreator(text));
    }
}
}

let MapStateToProps = (state) => {
    return {
    dialogs: state.DialogsReducer.dialogs,
    dialogsMessages: state.DialogsReducer.Messages,
    newDialogText: state.DialogsReducer.newDialogText
    }
}

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)

export default DialogsContainer;