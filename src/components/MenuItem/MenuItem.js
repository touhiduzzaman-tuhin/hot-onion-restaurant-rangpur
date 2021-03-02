import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuItem.css';

const MenuItem = (props) => {
    const {title, foodImage, shortDescription, price, id} = props.category;
    // const {handleAddFood} = props.handleAddFood;
    return (
        <div className='col-12 col-sm-6 col-md-4 card-style'>
            <Link to={`/singleFood/${id}`}>
                <Button variant='light' onClick={() => props.handleAddFood(props.category)}>
                    <Card className='w-100'>
                        <Card.Img variant="top" src={foodImage} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {shortDescription}
                            </Card.Text>
                            <h3>${price}</h3>
                        </Card.Body>
                    </Card>
                </Button>
            </Link>
        </div>
    );
};

export default MenuItem;