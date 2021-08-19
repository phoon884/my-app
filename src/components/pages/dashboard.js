import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Room from '../room'
import { GuestRetrieveData } from '../../helper/RequestAction'
import { Loading } from '../loading'
import { useFormik } from 'formik'

function Dashboard() {
    const formik = useFormik({
        initialValues: {
            building: 'A',
            floor: '1'
        }
    })
    const [status, setStatus] = useState(null)
    useEffect(() => {
        setStatus(null)
        GuestRetrieveData(formik.values).then(data => {
            if (data.status === 200) {
                setStatus(data.data.data)
            }
            else {
                if (data.error) {
                    alert(data.error)
                }
                if (data.msg) {
                    alert(data.msg)
                }
            }
        })
    }, [formik.values])
    if (status === null) {
        return <Loading Loading={Loading} />
    }
    return (
        <>
            <Navbar />
            <div className="card-wrapper2">
                <div>Dashboard</div>
                <select name="building"
                    id="building"
                    className="field"
                    onChange={formik.handleChange}
                    value={formik.values.building}
                    required>

                    <option value="A">A</option>
                    <option value="B">B</option>

                </select>
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
            </div>
            <ul>
                {status.map(room => (
                    <Room key={room._id} RoomObj={room} />
                ))}
            </ul>
        </>
    )
}


export default Dashboard
