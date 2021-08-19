import React from 'react';
import './popup.css'
import { Link } from 'react-router-dom';
import {GuestCheckOut} from '../helper/RequestAction'


export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                <p>Room Number: {props.data._id}</p>
                <p>status: {props.data.status}</p>
                <p>rent: {props.data.rent}</p>
                <p>deposit: {props.data.deposit}</p>
                {props.data.guest !== "" && <p>guest citizenID: {props.data.guest._id}</p>}
                {props.data.guest !== "" && <p>guest: {props.data.guest.first_name} {props.data.guest.last_name}</p>}
                {props.data.guest !== "" && <p>Date of Birth: {props.data.guest.DoB}</p>}
                {props.data.guest !== "" && <p>Check-In Date: {props.data.guest.rooms[props.data.guest.rooms.length - 1].check_in_date
                }</p>}
                {props.data.guest !== "" && <button className="checkout-btn" onClick={() => GuestCheckOut({ "roomid": props.data._id }).then(res => { if (res.status === 200) { window.location.reload() } })
                }>Check Out</button>}
                {props.data.guest === "" && <button className="checkout-btn"><Link to={"/check-in/"+props.data._id} className='Links'>Check-In</Link></button>}
            </div>
        </div>
    ) : "";

}
