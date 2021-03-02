import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import foodData from '../../fakeData/FoodData';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './OrderSummary.css';

const OrderSummary = () => {
    document.title = 'Order Details';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const foods = foodData.filter(food => food.id === loggedInUser.selectedFood);
    console.log(foods);
    const {price, title, foodImage} = foods[0];

    const foodPrice = price * loggedInUser.foodLength;
    const deliveryPrice = Math.round(Math.random() * 40);
    const totalPrice = foodPrice + deliveryPrice;
    return (
        <div className="order-summary container d-flex justify-content-center align-items-center">
            <div align='center'>
                    <p>From <span style={{color: 'red'}}>Rangpur Devil Restaurant</span></p>
                    <p style={{color: 'green'}}>Arriving in 20-30 minutes</p>
                    <h5>{loggedInUser.address}</h5>
                    <div align='center' className='d-flex justify-content-around align-items-center food-cart-style'>
                        
                        <img className='w-25' src={foodImage} alt=""/>
                        <div>
                            <h3>{title}</h3>
                            <h4>${foodPrice}</h4>
                            <small>Delivery Fee : ${deliveryPrice}</small>
                        </div>
                        <div>
                            <h3>{loggedInUser.foodLength}</h3>
                            <h5>Total Price : ${totalPrice.toFixed(2)}</h5>
                        </div>
                    </div>

                    <ProcessPayment></ProcessPayment>
                     
                    {/* <Button>
                        Place Order
                    </Button>  */}
                </div>
        </div>
    );
};

export default OrderSummary;