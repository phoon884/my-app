import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { RetrievePaymentDue, RemovePaymentDue } from '../../helper/RequestAction'
import { Loading } from '../loading'
import "./payment.css"

export default function Payment() {
    const [status, setStatus] = useState(null)
    useEffect(() => {
        setStatus(null)
        RetrievePaymentDue().then(data => {
            if (data.status === 200) {
                setStatus(data.data.data)
                console.log(data.data.data);
            }
        })
    }, [])
    if (status === null) {
        return <Loading Loading={Loading} />
    }
    return (
        <>
            <Navbar />
            <ul>
                {status.map(room => (
                    <div key={room.roomid + room.date} className="container">
                        <p className="content"> RoomId: {room.roomid} </p>
                        <p className="content"> Amount: {room.amount} </p>
                        <p className="content"> Name: {room.first_name} {room.last_name} </p>
                        <p className="content"> Date: {room.date} </p>
                        <button className="checkout-btn" onClick={() => RemovePaymentDue(room)
                            .then((res) => {
                                if (res.status === 200) {
                                    window.location.reload()
                                }
                                else {
                                    if (res.error) {     
                                        alert(res.error)
                                    }
                                    if (res.msg) {
                                        alert(res.msg)
                                    }
                                }
                            })
                        }> Remove </button>
                    </div>

                ))}
            </ul>
        </>
    )
}
