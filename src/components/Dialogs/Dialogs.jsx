import {Message, DialogItem} from './DialogsMapsItems'
import AddDialogForm from '../Forms/AddDialogForm';
import '../../Styles/Dialogs.css';
import { Navigate } from 'react-router-dom';
import Preloader from '../common/Preloader/Prelooader'

const Dialogs = (props) => {
    if (props.isAuthChecking) {
        return <Preloader />
    }

    if (!props.isAuth) {
        return <Navigate to="/login" replace />
    }

    const dialogsElements = props.dialogs.map((dialog, index) => (<DialogItem key={index} name={dialog.name} id={dialog.id} />));
    const PeresDialog = props.dialogsMessages.map((Messages, index) => (<Message key={index} messages={Messages.messages} />));

    const addNewDialog = (values) => {
        props.onAddMessage(values.onDialogBody)
    }

    return (
        <div className="dialog">
            <div className="Del">{dialogsElements}</div>
            <div className="mesD">{PeresDialog}</div>
            <AddDialogForm onSubmit={addNewDialog}/>
        </div>
    );
};

export default Dialogs;