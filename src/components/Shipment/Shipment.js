import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    document.title = 'Shipment'
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [details, setDetails] = useState({
        address: '',
        phone : ''
    });

    const handleBlur = (event) => {
        let validForm = true;
        if(event.target.name === 'phone'){
            let phoneLength = event.target.value.length > 10;
            let phoneHasNumber = /\d{10}/.test(event.target.value);
            validForm = phoneHasNumber && phoneLength;
        }
        else if (event.target.name === 'address'){
            validForm = true;
        }
        if(validForm){
            const detailsAddress = {...details};
            detailsAddress[event.target.name] = event.target.value;
            setDetails(detailsAddress);
            // setLoggedInUser(detailsAddress);
        }
    }

    const handlePayment = () => {
        const detailInformation = {...loggedInUser}
        detailInformation.address = details.address;
        detailInformation.phone = details.phone;
        // setDetails(detailInformation);
        setLoggedInUser(detailInformation)
        alert('Please Pay Your Order');
    }

    console.log(loggedInUser);
    console.log(details);

    return (
        <div>
            <div className="shipment-area">
                <div className="d-flex justify-content-center align-items-center">                   
                     <div>
                        <h3>Edit Your Delivery Details</h3>
                        <input className='form-control' type="text" name="" id="" placeholder="Name" required defaultValue={loggedInUser.name}/> <br/>

                        <input className='form-control' type="email" name="" id="" placeholder="Email" required defaultValue={loggedInUser.email}/> <br/>

                        <input className='form-control' type="tel" name="phone" id="" placeholder="Phone" onBlur={handleBlur} required/> <br/>

                        <input className='form-control' type="text" name="address" id="" placeholder="Address" onBlur={handleBlur}required/> <br/>

                        <Link to='/orderSummary'>
                            <Button  onClick={handlePayment}>
                                Save & Continue
                            </Button>
                        </Link>
                     </div>
                </div>
                
            </div>
        </div>
    );
};

export default Shipment;