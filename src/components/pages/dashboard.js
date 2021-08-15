import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Room from '../room'
import { GuestRetrieveData } from '../../helper/RequestAction'
import { Loading } from '../loading'
import { useFormik } from 'formik'

function Dashboard() {
    const formik = useFormik({
        initialValues: {
            building: 'A'
        }
    })
    const [status, setStatus] = useState(null)
    useEffect(() => {
        setStatus(null)
        const value = { building: formik.values.building }
        GuestRetrieveData(value).then(data => {
            if (data.status === 200) {
                setStatus(data.data.data)
            }
        })
    }, [formik.values.building])
    if (status === null) {
        return <Loading Loading={Loading} />
    }
    return (
        <>
            <Navbar />
            <div>dashboard</div>
             <select name="building"
                        id="building"
                        onChange={formik.handleChange}
                        value={formik.values.building}
                        required>

                        <option value="A">A</option>
                        <option value="B">B</option>

                    </select>
            <ul>
                {status.map(room => (
                    <Room key={room._id} RoomObj={room} />
                ))}
            </ul>
        </>
    )
}


export default Dashboard
