import React, {  useContext, useEffect, useState } from 'react';
import {  Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import foodData from '../../fakeData/FoodData';
import MenuItem from '../MenuItem/MenuItem';

const Menu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('lunch');    
    const selectedFood = foodData.filter(fd => fd.category === selectedCategory);
    // console.log(selectedFood);
    const [cartFood, setCartFood] = useState([]);

    const handleAddFood = (food) => {
        const newFood = [...cartFood, food];
        setCartFood(newFood);
        // sessionStorage.setItem('cartFood', newFood);
    }
    // console.log(cartFood);

    console.log(loggedInUser);

    // const handleSelectCategory = (category) => {
    //     setSelectedCategory(category);
    //     // document.span.style.color = 'red';
    // }
    // if(loggedInUser.foodLength >= 0){
    //     setIsDisabled(true);
    // }
    // const handleDisabled = () => {
    //     isDisabled ? 
    //     disabled : enabled
    // }
    useEffect( () => {
        if(loggedInUser.foodLength > 0){
            setIsDisabled(false);
        }
    }, [])

    // console.log(isDisabled);
    // console.log(cartFood);

    return (
        <div className="container">
            <Navbar bg="light" variant="dark">
                <Nav className="mx-auto mt-5 mb-3">
                    <Nav.Link className="text-dark">
                        <span onClick={() => setSelectedCategory('breakfast')}>
                            Breakfast
                        </span>
                    </Nav.Link>
                    <Nav.Link className="text-dark">
                        <span onClick={() => setSelectedCategory('lunch')}>
                            Lunch
                        </span>
                    </Nav.Link>
                    <Nav.Link className="text-dark">
                        <span onClick={() =>setSelectedCategory('dinner')}>
                            Dinner
                        </span>
                    </Nav.Link>
                    {/* <Nav.Link className="text-dark">
                        <span onClick={() => handleSelectCategory('breakfast')}>
                            Breakfast
                        </span>
                    </Nav.Link>
                    <Nav.Link className="text-dark">
                        <span onClick={() => handleSelectCategory('lunch')}>
                            Lunch
                        </span>
                    </Nav.Link>
                    <Nav.Link className="text-dark">
                        <span onClick={() =>handleSelectCategory('dinner')}>
                            Dinner
                        </span>
                    </Nav.Link> */}
                </Nav>               
            </Navbar>
            
            <div className="row">
                {
                    selectedFood.map(category => <MenuItem key={category.id} handleAddFood={handleAddFood} category={category}></MenuItem>)
                }
            </div>
            
            <div align="center">
                <Link to='/shipment'>
                    <Button className='my-5' disabled={isDisabled} >
                        Check-Out Your Food
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;