import {Message, DialogItem} from './DialogsMapsItems'
import '../Styles/Dialogs.css';


const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map((dialog, index) => (<DialogItem key={index} name={dialog.name} id={dialog.id} />));
    const PeresDialog = props.dialogsMessages.map((Messages, index) => (<Message key={index} messages={Messages.messages} />));

    const onAddMessage = () => {
        if (!props.newDialogText.trim()) return;
        props.onAddMessage()
    };

    const onDialogChange = (e) => {
        const text = e.target.value;
        props.onDialogChange(text)
    };

    return (
        <div className="dialog">
            <div className="Del">{dialogsElements}</div>
            <div className="mesD">{PeresDialog}</div>
            <div className="dopRef">
                <textarea className="TextAreaDialogs" placeholder="type message" onChange={onDialogChange}
                 value={props.newDialogText}/>
                <button className="GetPostButton" onClick={onAddMessage}>добавить</button>
            </div>
        </div>
    );
};

export default Dialogs;