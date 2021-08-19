import React, { useState } from 'react'
import {GuestRetrieveRoom} from '../helper/RequestAction'
import Popup from './popup'
import './room.css'

export const Room = ({ RoomObj }) => {
    console.log(`room ${RoomObj.status}`);
    const [button, setButton] = useState(false);
    const [data, setData] = useState(null);
    return (<>
        <button
            className={`room room--${RoomObj.status}`}
            onClick={() => GuestRetrieveRoom({"room":RoomObj._id}).then(res =>{
                if (res.status === 200) {
                    setData(res.data.data);
                    setButton(true);
                }
                else {
                    if (res.error) {     
                        alert(res.error)
                    }
                    if (res.msg) {
                        alert(res.msg)
                    }
                }
            })}
        >
            {RoomObj._id}
        </button>
        <Popup trigger={button} setTrigger={setButton} data={data}/>
        </>
    )
}
export default Room;