import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo/logo2.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
            {/* <h3>{loggedInUser.name}</h3> */}
            <div className="container">
                <Link to="/" className="navbar-brand logo-image">
                    <img src={logo} alt="Hot Onion Logo" />
                </Link>

                <h3>{loggedInUser.name}</h3>
                {/* <Button disabled>{loggedInUser.name}</Button> */}
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to='/contact' className='nav-link'>
                            <Button>Contact</Button>
                        </Link>
                    </li>
                    <li className="nav-item active mx-4">
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className='nav-link'>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className='nav-link'>
                            <Button>Sign Up</Button>
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;