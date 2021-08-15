import React from 'react';
import './popup.css'


export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <p>Room Number: {props.data._id}</p>
                <p>status: {props.data.status}</p>
                <p>rent: {props.data.rent}</p>
                <p>deposit: {props.data.deposit}</p>
                {props.data.guest !== "" && <p>guest: {props.data.guest._id}</p>}
            </div>

        </div>
    ) : "";

}
