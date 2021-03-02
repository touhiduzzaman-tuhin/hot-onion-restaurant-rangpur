import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import foodData from '../../fakeData/FoodData';
import './SingleFood.css';

const SingleFood = () => {
    document.title = 'Selected Food'
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [foodValue, setFoodValue] = useState(1);
    const [foodCard, setFoodCard] = useState({
        foodLength : 1,
        selectedFood : ''
    });
    const {id} = useParams();
    const food = foodData.find(fd => fd.id === id);
    // console.log(food);
    let foodPrice = food.price * foodValue;

    const handleAddFood = () => {
        const newFoodDetails = {...foodCard};
        newFoodDetails.foodLength = foodValue;
        newFoodDetails.selectedFood = food.id;
        setFoodCard(newFoodDetails);
        setLoggedInUser(newFoodDetails);
        alert('You Can Now Check Out Your Food From Home Page!!!')
        // setFoodCard(foodDetails);
        // setLoggedInUser(foodDetails)
        // sessionStorage.setItem('food', JSON.stringify(foodDetails))
        // console.log(foodValue);
        // console.log(foodCard)
        // console.log(loggedInUser);
    }

    return (
        <div className='container'>
            <div className="row">
            <div className="col-md-5 single-food-area">
                <h1 className='text-center'>{food.category} Item</h1>
                <hr style={{color : 'red'}}/>
                <p>{food.description}</p>
                <div className='d-flex'>
                    <h3>${foodPrice}</h3> &nbsp; &nbsp; &nbsp; &nbsp;
                                        
                    <Button onClick={ () => setFoodValue(foodValue - 1)}>
                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </Button>
                    <input className='w-25 text-center' type="text" name="foodLength" id="totalFood" value={foodValue}/>
                    <Button onClick={() => setFoodValue(foodValue + 1)}> 
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> 
                    </Button>

                </div>
                <Link to='/'>
                    <Button onClick={handleAddFood} className='mt-5 ml-5' variant='danger'>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> &nbsp;
                        Add
                    </Button>
                </Link>
                <br/> <br/>
                <img className='w-25' src={food.foodImage} alt=""/> &nbsp; &nbsp;
                <img className='w-25' src={food.foodImage} alt=""/>
            </div>
            <div className="col-md-6 mt-5">
                <img className='w-100' src={food.foodImage} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default SingleFood;