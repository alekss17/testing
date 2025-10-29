import React from "react";
import { NavLink } from "react-router-dom";

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let name = props.name

    return (
        <div>
            <img className="Dialog-faces" src="https://www.meme-arsenal.com/memes/9e68a78a292b4ed1555a338561dca8c3.jpg" alt="" />
            <NavLink className="NAv" to={path}>{name}</NavLink>
        </div>
    );
};

export const Message = (props) => {
    return (<div> <p>{props.messages}</p> </div> );
};