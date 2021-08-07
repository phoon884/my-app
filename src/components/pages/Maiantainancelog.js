import React from 'react'
import { MaintenancelogSubmit } from '../../helper/RequestAction'
import Navbar from '../Navbar'



function Maintenancelog() {

        return (
            <>
            <Navbar/>
            <div><p>maintenance log</p>
                <button onClick={MaintenancelogSubmit}>click me</button>
            
            </div>

            </>
        )
    }


export default Maintenancelog
