import React, { useState, useEffect } from 'react'
import { Button } from '../components/button';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Signout } from '../helper/RequestAction'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                </div>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Modern Place
                    <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link
                            to='/maiantainance_log'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Maintainance log
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/water_bill' className='nav-links' onClick={closeMobileMenu}>
                            Water Bill
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/electric_bill'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Electric Bill
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/login'
                            className='nav-links-mobile'
                            onClick={Signout}
                        >
                            Sign Out
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' onClick={Signout} >SIGN OUT</Button>}
            </nav>
        </>
    );
}

export default Navbar;
