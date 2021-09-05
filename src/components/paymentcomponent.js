import React from 'react'
import "./payment.css"
import { RemovePaymentDue } from '../helper/RequestAction'
import { useFormik } from 'formik'

export default function Paymentcomponent(props) {
    const formik = useFormik({
        initialValues: {
            room: props.room,
            paymentType: "Cash"
        }
    })
    return (
        <div className="container">
            <p className="content"> RoomId: {props.roomid} </p>
            <p className="content"> Amount: {props.room.amount} </p>
            <p className="content"> Name: {props.room.first_name} {props.room.last_name} </p>
            <p className="content"> Date: {props.room.date} </p>
            <select name="paymentType"
                id="paymentType"
                onChange={formik.handleChange}
                value={formik.values.paymentType}
                required>

                <option value="Cash">Cash</option>
                <option value="SCB">SCB</option>
                <option value="UOB">UOB</option>
                <option value="Krungsri">Krungsri</option>
                <option value="KBank">KBank</option>

            </select>
            <button className="checkout-btn" onClick={() => RemovePaymentDue(formik.values)
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
            }> Submit </button>

        </div>
    )
}
