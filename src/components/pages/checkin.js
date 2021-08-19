import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { useFormik } from 'formik'
import { GuestCheckIn } from "../../helper/RequestAction"
import { Redirect } from "react-router-dom";

export default function Checkin(props) {
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(null);
    useEffect(() => { setRedirect(null) }, [])
    const formik = useFormik({
        initialValues: {
            id: "",
            roomid: props.match.params.id,
            first_name: "",
            last_name: "",
            DoB: "",
            check_in_date: "",
            check_out_date:"",
            status: "Monthly",
            rent: 0,
            deposit: 0

        },
        onSubmit: values => {
            GuestCheckIn(values).then(res => {
                if ("error" in res) {
                    setError(res.error)
                }
                else if ("msg" in res) {
                    setError(res.msg)
                }
                else {
                    alert("Success")
                    setRedirect(true)
                }
            });
        }
    })
    if (redirect) {
        return (<Redirect to="/" />)
    }
    return (
        <>
            <Navbar />
            <div className="card-wrapper">
                <form name="checkin" onSubmit={formik.handleSubmit}>
                    <label htmlFor="roomId">Check-in for {props.match.params.id}</label>
                    <label htmlFor="roomId">Citizen Id "X-XXXX-XXXXX-XX-X"</label>
                    <input
                        type="text"
                        name="id"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id}
                        required
                    ></input>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.first_name}
                        required
                    ></input>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.last_name}
                        required
                    ></input>
                    <label htmlFor="DoB">Date of Birth</label>
                    <input
                        type="date"
                        name="DoB"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DoB}
                        required
                    ></input>

                    <label htmlFor="check_in_date">Check-In Date</label>
                    <input
                        type="date"
                        name="check_in_date"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.check_in_date}
                        required
                    ></input>

                    <label htmlFor="check_in_date">Check-Out Date(optional)</label>
                    <input
                        type="date"
                        name="check_out_date"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.check_out_date}
                    ></input>

                    <label htmlFor="rent">Rent</label>
                    <input
                        type="number"
                        name="rent"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.rent}
                        required
                    ></input>

                    <label htmlFor="deposit">Deposit</label>
                    <input
                        type="number"
                        name="deposit"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.deposit}
                        required
                    ></input>
                    <label htmlFor="check_in_date">Rent Type</label>
                    <select name="status"
                        className="field"
                        id="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                        required>

                        <option value="Monthly">Monthly</option>
                        <option value="Daily">Daily</option>

                    </select>

                    {error ? <p className="error">{error}</p> : null}
                    <input type="submit" value="Submit" className="btn"></input>
                </form>
            </div>
        </>
    )
}
