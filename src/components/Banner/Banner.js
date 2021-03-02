import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner d-flex justify-content-center align-items-center">            
            <div className="container col-md-6">
                <h1>Best Food Waiting For Your Bally</h1>
                <div className='d-flex'>
                    <input type="text" name="" id="" className="form-control" placeholder="Search Your Food"/>
                    <Button variant='danger' className='btn-rounded text-center'>Search</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;