import React, { useState } from "react";
import '../../Styles/Myposts.css'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)

    const ActivateEditMode = () => {
        setEditMode(true)
    }
    
    const ReActivateEditMode = () => {
        setEditMode(false)
    }
    return (
        <>
        {!editMode && 
            <div>
            <p onDoubleClick={ActivateEditMode} className="ProfileStatus">{props.profileStatus}</p>
            </div>
        }
        {editMode &&
        <div>
            <input onDoubleClick={ReActivateEditMode} value={props.profileStatus} className="ProfileStatus"/>
        </div>
        }
        </>
    )
}

export default ProfileStatus;