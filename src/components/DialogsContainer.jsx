import { addMessageActionCreator, updateNewdialogChangeActionCreator } from "../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let stateReducer = props.store.getState().DialogsReducer

    const onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    const onDialogChange = (text) => {
        props.store.dispatch(updateNewdialogChangeActionCreator(text));
    };

    return (<Dialogs onAddMessage={onAddMessage} onDialogChange={onDialogChange}
         dialogs={stateReducer.dialogs}
     dialogsMessages={stateReducer.Messages}
     newDialogText={stateReducer.newDialogText}
     />);
};

export default DialogsContainer;