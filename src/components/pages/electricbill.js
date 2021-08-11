import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import { useFormik } from 'formik'
import { ElectricBillSubmit } from '../../helper/RequestAction'
import Navbar from '../Navbar'



function ElectricBill() {

    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => { setRedirect(null) }, [])

    const formik = useFormik({

        initialValues: {
            date: '',
            building: 'A',
            floor: '1',
            r01: '',
            r02: '',
            r03: '',
            r04: '',
            r05: '',
            r06: '',
            r07: '',
            r08: '',
            r09: '',
            r10: '',
            r11: '',
            r12: '',
            r13: '',
            r14: '',
            r15: ''
        },
        onSubmit: values => {
            setError(null)
            let payload = {}
            if (values && values.floor && values.floor === '1') {
                payload.date = values.date;
                payload.data = [];
                for (const key in values) {
                    if (!(key === "date" || key === "building" || key === "floor")) {
                        if (values[key] === "") {
                            break;
                        }
                        let room = {}
                        room.roomid = values.building + values.floor + key.replace("r", "")
                        room.unit = values[key]
                        payload.data.push(room)
                    }
                }
            }
            ElectricBillSubmit(payload).then(res => {
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
                <form name="electricbill_form" onSubmit={formik.handleSubmit} >
                    <label htmlFor="date">Electric Bill</label>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        required
                    ></input>

                    <label htmlFor="building">building</label>
                    <select name="building"
                        id="building"
                        className="field"
                        onChange={formik.handleChange}
                        value={formik.values.building}
                        required>

                        <option value="A">A</option>
                        <option value="B">B</option>

                    </select>

                    <label htmlFor="floor">floor</label>
                    <select name="floor"
                        id="floor"
                        className="field"
                        onChange={formik.handleChange}
                        value={formik.values.floor}
                        required>

                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select>


                    <label htmlFor="01">{formik.values.building + formik.values.floor}01</label>
                    <input
                        type="number"
                        name="r01"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.r01}
                        required
                    ></input>

                    <label htmlFor="02">{formik.values.building + formik.values.floor}02</label>
                    <input
                        type="number"
                        name="r02"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.r02}
                        required
                    ></input>

                    <label htmlFor="roomId">{formik.values.building + formik.values.floor}03</label>
                    <input
                        type="number"
                        name="r03"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.r03}
                        required
                    ></input>

                    <label htmlFor="roomId">{formik.values.building + formik.values.floor}04</label>
                    <input
                        type="number"
                        name="r04"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.r04}
                        required
                    ></input>

                    <label htmlFor="roomId">{formik.values.building + formik.values.floor}05</label>
                    <input
                        type="number"
                        name="r05"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.r05}
                        required
                    ></input>
                    <label htmlFor="roomId">{formik.values.building + formik.values.floor}06</label>
                    <input
                        type="number"
                        name="r06"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.r06}
                        required
                    ></input>
                    {formik.values.floor !== "1" ?
                        <>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}07</label>
                            <input
                                type="number"
                                name="r07"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r07}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}08</label>
                            <input
                                type="number"
                                name="r08"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r08}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}09</label>
                            <input
                                type="number"
                                name="r09"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r09}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}10</label>
                            <input
                                type="number"
                                name="r10"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r10}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}11</label>
                            <input
                                type="number"
                                name="r11"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r11}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}12</label>
                            <input
                                type="number"
                                name="r12"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r12}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}13</label>
                            <input
                                type="number"
                                name="r13"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r13}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}14</label>
                            <input
                                type="number"
                                name="r14"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r14}
                                required
                            ></input>

                            <label htmlFor="roomId">{formik.values.building + formik.values.floor}15</label>
                            <input
                                type="number"
                                name="r15"
                                className="field"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.r15}
                                required
                            ></input>
                        </> : null}

                    {error ? <p className="error">{error}</p> : null}

                    <input type="submit" value="Submit" className="btn"></input>
                </form>
            </div>


        </>
    )
}


export default ElectricBill