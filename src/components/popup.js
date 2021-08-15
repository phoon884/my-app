import React from 'react';
import './popup.css'


export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <p>Room Number:</p>
                <p>status:</p>
                <p>rent:</p>
                <p>deposit:</p>
            </div>

        </div>
    ) : "";

}
