import React ,{useEffect} from 'react';
//import Navbar from './components/Navbar';
import {BrowserRouter  ,Route} from 'react-router-dom';
import login from './components/pages/login';
import './App.css';
import dashboard from './components/pages/dashboard';
import ProtectedRoute from './helper/ProtectedRoute';
import Maiantainancelog from './components/pages/Maiantainancelog';


function App() {
    // useEffect(() => {
    //     return () => {
    //       console.log('******************* UNMOUNTED');
    //     };
    //   }, []);
        return (
            <>
                <BrowserRouter>

                            <Route path='/login' exact component={login}/>
                            <ProtectedRoute path='/' exact component={dashboard}/>
                            <ProtectedRoute path='/maiantainance_log' exact component={Maiantainancelog}/>
                         
                    
                </BrowserRouter>
            </>
        );
    }


export default App
