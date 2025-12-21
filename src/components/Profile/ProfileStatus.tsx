import React, { useEffect, useState } from "react";
import '../../Styles/Myposts.css'


interface ComponentProps {
    profileStatus: string;
    isOwner: boolean;
    UpdateProfileStats: (status: string) => void;
}

const ProfileStatus = ({profileStatus, isOwner, UpdateProfileStats}: ComponentProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(profileStatus)

    useEffect(() => {
        setStatus(profileStatus ?? '')
    }, [profileStatus])

    const ActivateEditMode = () => {
            setEditMode(true)
    }
    
    const ReActivateEditMode = () => {
        setEditMode(false)
        UpdateProfileStats(status)
    }

    const OnStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
        {!editMode && 
            <div className="Status">

            <p className="ProfileStatus">{profileStatus || '---------'}  </p> {isOwner === true ? <button onClick={ActivateEditMode} >Write Status</button> : null}
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