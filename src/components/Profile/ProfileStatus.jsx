import React, { useEffect, useState } from "react";
import '../../Styles/Myposts.css'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.profileStatus)

    useEffect(() => {
        setStatus(props.profileStatus)
    }, [props.profileStatus])

    const ActivateEditMode = () => {
        if (props.userId !== props.meId) {
            return;
        }
            setEditMode(true)
    }
    
    const ReActivateEditMode = () => {
        setEditMode(false)
        props.UpdateProfileStats(status)
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
        {!editMode && 
            <div>

            <p onDoubleClick={ActivateEditMode} className="ProfileStatus">{props.profileStatus || '---------'}</p>
            </div>
        }
        {editMode &&
        <div>
            <input onChange={OnStatusChange} autoFocus={true} onBlur={ReActivateEditMode} value={status} className="ProfileStatus"/>
        </div>
        }
        </>
    )
}

export default ProfileStatus;