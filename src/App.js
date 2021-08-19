import React  from 'react';
//import Navbar from './components/Navbar';
import {BrowserRouter  ,Route,Switch} from 'react-router-dom';
import login from './components/pages/login';
import './App.css';
import Dashboard from './components/pages/dashboard';
import ProtectedRoute from './helper/ProtectedRoute';
import Maiantainancelog from './components/pages/Maiantainancelog';
import ElectricBill from './components/pages/electricbill';
import WaterBill from './components/pages/waterbilll';
import Checkin from './components/pages/checkin';
import Payment from './components/pages/payment';

function App() {
    // useEffect(() => {
    //     return () => {
    //       console.log('******************* UNMOUNTED');
    //     };
    //   }, []);
        return (
            <>
                <BrowserRouter>
                        <Switch>
                            <Route path='/login' exact component={login}/>
                            <ProtectedRoute path='/' exact component={Dashboard}/>
                            <ProtectedRoute path='/maiantainance_log' exact component={Maiantainancelog}/>
                            <ProtectedRoute path='/electric_bill' exact component={ElectricBill}/>
                            <ProtectedRoute path='/water_bill' exact component={WaterBill}/>
                            <ProtectedRoute path='/check-in/:id' component={Checkin}/>
                            <ProtectedRoute path='/payment_due' component={Payment}/>
                        </Switch>
                </BrowserRouter>
            </>
        );
    }


export default App
