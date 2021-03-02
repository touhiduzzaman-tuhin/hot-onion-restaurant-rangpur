import React, { useContext } from 'react';
import map from '../../images/icon/ordercomplete.png';
import './OrderDelivery.css';
import rider from '../../images/icon/Group 1151.png';
import { UserContext } from '../../App';
import riderImage from '../../images/icon/Group 2.png';
import { Button } from 'react-bootstrap';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const OrderDelivery = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const date = new Date();
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + (minutes + 5) + ' ' + ampm;
        return strTime;
      }
      
    //   console.log(formatAMPM(new Date));
      const date = formatAMPM(new Date);
      console.log(date);
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-8 map-area">
                <img className='w-75' src={map} alt=""/>              
            </div>
            <div className="col-md-3 rider-area">
                <h5 style={{marginTop: '40px'}}>Your Details</h5>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                <br/>
                <p>Name : {loggedInUser.name || 'Tuhin'} <br/> Phone : {loggedInUser.phone} <br/> Address :  {loggedInUser.address}</p>
                <h5>Shop Address</h5>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                <br/>
                <p>Rangpur Devil Restaurant</p>
                <h3>{date}</h3>
                <small>Estimated Delivery Time</small>
                <div style={{marginTop: '-10px'}}>
                    <img className='mb-5 mt-3' src={rider} alt=""/>
                    <h4 style={{marginTop : '-50px'}}>Manik <span style={{fontSize: '10px'}}>(Your Rider)</span></h4>
                </div>
                
                <Link to='/finish'>
                    <Button>
                        Finish
                    </Button> 
                </Link>  
            </div>
        </div>
    );
};

export default OrderDelivery;