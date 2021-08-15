import React, { useState } from 'react'
import Popup from './popup'
import './room.css'

export const Room = ({ RoomObj }) => {
    const [button, setButton] = useState(false);
    return (<>
        <button
            className={`room ${RoomObj.status}`}
            onClick={() => setButton(true)}
        >
            {RoomObj._id}
        </button>
        <Popup trigger={button} setTrigger={setButton}/>
        </>
    )
}
export default Room;