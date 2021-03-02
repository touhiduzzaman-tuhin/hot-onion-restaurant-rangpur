import React from 'react';
import './Footer.css';
import foodLogo from '../../images/logo/logo2.png';
import { Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container row">
                <div className="col-12 col-md-6">
                    <img src={foodLogo} alt=""/>
                </div>
                <div className="col-6 col-md-3">
                    <ul>
                        <li>
                            <Link className='footer-link' to='/aboutFood'>About Online Food</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/readBlog'>Read Our Blog</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/signUpDelivery'>Sign Up to Delivery</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/addRestaurant'>Add Your Restaurant</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md-3">
                    <ul>
                        <li>
                            <Link className='footer-link' to='/getHelp'>Get Help</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/readFaq'>Read FAQs</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/viewClients'>View All Clients</Link>
                        </li>
                        <li>
                            <Link className='footer-link' to='/restaurantNear'>Restaurant Near Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container row">
                <div className="col-6 col-sm-6 col-md-6">
                    <small style={{color: 'gray'}}>Copyright &copy; 2021, Online Food</small>
                </div>
                <div className="col-2 col-sm-2 col-md-2">
                    <Link className='footer-link' to='/privacyPolicy'>Privacy Policy</Link>
                </div>
                <div className="col-2 col-sm-2 col-md-2">
                    <Link className='footer-link' to='/termUse'>Terms of Use</Link>
                </div>
                <div className="col-2 col-sm-2 col-md-2">
                    <Link className='footer-link' to='/pricing'>Pricing</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;