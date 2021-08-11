import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import { useFormik } from 'formik'
import { MaintenancelogSubmit } from '../../helper/RequestAction'
import Navbar from '../Navbar'



function Maintenancelog() {

    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(null);
    useEffect(() => {setRedirect(null)},[])

    const formik = useFormik({

        initialValues: {
            roomid: '',
            code: '',
            date: '',
            cost: '',
            note: ''
        },
        onSubmit: values => {
            
            setError(null)
            MaintenancelogSubmit(values).then(res => {
                console.log(res);
                if ("error" in res ) {
                    setError(res.error)
                }
                else if ("msg" in res){
                    setError(res.msg)
                }
                else{
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

                <form name="maintainance_form" onSubmit={formik.handleSubmit}>
                    <label htmlFor="roomId">RoomId</label>
                    <input
                        type="text"
                        name="roomid"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.roomid}
                        required
                    ></input>

                    <label htmlFor="code">Code</label>
                    <input
                        type="text"
                        name="code"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.code}
                        required
                    ></input>

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

                    <label htmlFor="cost">Cost</label>
                    <input
                        type="text"
                        name="cost"
                        className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cost}
                        required
                    ></input>

                    <label htmlFor="note" >Notes</label>
                    <textarea rows="4" cols="50" name="note" form="Notes" className="field"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.note}>
                    </textarea>

                   {error ? <p className="error">{error}</p> : null}

                    <input type="submit" value="Submit" className="btn"></input>
                </form>
            </div>


        </>
    )
}


export default Maintenancelog
