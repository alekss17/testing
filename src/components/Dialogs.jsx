import React from "react";

import { NavLink } from "react-router-dom";
import '../Styles/Dialogs.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name

    return (
        <div>
            <img className="Dialog-faces" src="https://www.meme-arsenal.com/memes/9e68a78a292b4ed1555a338561dca8c3.jpg" alt="" />
            <NavLink className="NAv" to={path}>{name}</NavLink>
        </div>
    );
};

const PeresMessage = (props) => {
    return (<div> <p>{props.messages}</p> </div> );
};

const Dialogs = (props) => {
    debugger;
    const dialogsElements = props.dialogs.map((dialog, index) => (<DialogItem key={index} name={dialog.name} id={dialog.id} />));
    const PeresDialog = props.dialogsMessages.map((Messages, index) => (<PeresMessage key={index} messages={Messages.messages} />));

    const NewReactRef = React.createRef();

    const onAddMessage = () => {
        if (!props.newDialogText.trim()) return;
        props.addMessage();
    };

    const onDialogChange = () => {
        const text = NewReactRef.current.value;
        props.updateNewDialogChange(text);
    };

    return (
        <div className="dialog">
            <div className="Del">{dialogsElements}</div>
            <div className="mesD">{PeresDialog}</div>
            <div className="dopRef">
                <textarea className="TextAreaDialogs" placeholder="type message" onChange={onDialogChange} value={props.newDialogText} ref={NewReactRef}/>
                <button className="GetPostButton" onClick={onAddMessage}>добавить</button>
            </div>
        </div>
    );
};

export default Dialogs;