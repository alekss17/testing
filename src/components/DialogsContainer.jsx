import MyContext from "../ContextApi";
import { addMessageActionCreator, updateNewdialogChangeActionCreator } from "../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = () => {
    return (
        <MyContext.Consumer>
            { 
            store => {
    let stateReducer = store.getState().DialogsReducer

    const onAddMessage = () => {
        store.dispatch(addMessageActionCreator());
    };

    const onDialogChange = (text) => {
        store.dispatch(updateNewdialogChangeActionCreator(text));
    };
    return (
    <Dialogs onAddMessage={onAddMessage} onDialogChange={onDialogChange}
         dialogs={stateReducer.dialogs}
     dialogsMessages={stateReducer.Messages}
     newDialogText={stateReducer.newDialogText}
     />
    )
}}
     </MyContext.Consumer>
     );
};

export default DialogsContainer;