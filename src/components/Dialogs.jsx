import React from "react";

import { NavLink } from "react-router-dom";
import '../App.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name

    return (
        <div className="dialog-item">
            <img className="Dialog-faces" src="https://www.meme-arsenal.com/memes/9e68a78a292b4ed1555a338561dca8c3.jpg" alt="" />
            <NavLink className="NAv" to={path}>{name}</NavLink>
        </div>
    );
};

const PeresMessage = (props) => {
    return (<div className="message"> <p>{props.messages}</p> </div> );
};

const NewReactRef = React.createRef()

 let textarea = () => {
    let text = NewReactRef.current.value;
    alert(text);
 }

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} /> );
    const PeresDialog = props.dialogsMessages.map((Messages, index) => <PeresMessage key={index} messages={Messages.messages} /> );
    return (
        <div className="dialog">
            <div className="Del">
                {dialogsElements}
            </div>
            <div className="mesD">
            {PeresDialog}
            </div>
            <div className="dopRef">
            <textarea placeholder="type message" ref={NewReactRef}></textarea>
            <button onClick={textarea}>добавить</button>
            </div>
        </div>
    );
};

export default Dialogs;
