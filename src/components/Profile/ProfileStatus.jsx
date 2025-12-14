import React, { useEffect, useState } from "react";
import '../../Styles/Myposts.css'

const ProfileStatus = ({profileStatus, userId, meId, UpdateProfileStats}) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(profileStatus)

    useEffect(() => {
        setStatus(profileStatus)
    }, [profileStatus])

    const ActivateEditMode = () => {
        if (userId !== meId) {
            return;
        }
            setEditMode(true)
    }
    
    const ReActivateEditMode = () => {
        setEditMode(false)
        UpdateProfileStats(status)
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
        {!editMode && 
            <div>

            <p onDoubleClick={ActivateEditMode} className="ProfileStatus">{profileStatus || '---------'}</p>
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