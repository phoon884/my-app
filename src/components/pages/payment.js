import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { RetrievePaymentDue} from '../../helper/RequestAction'
import { Loading } from '../loading'
import Paymentcomponent from '../paymentcomponent'

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
                    <Paymentcomponent key={room.roomid + room.date} room={room}/>
                ))}
            </ul>
        </>
    )
}
