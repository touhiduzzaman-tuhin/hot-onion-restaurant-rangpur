import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleFeature.css';

const SingleFeature = (props) => {
    const {mainImage, description, title, detailImage} = props.feature;
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);

    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <Card className="w-100">
                <Card.Img variant="top" src={mainImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <img src={detailImage} alt=""/> &nbsp; &nbsp; &nbsp;
                        {
                            descriptionCollapse ? description : description.substr(0, 100)
                        }

                    </Card.Text>
                    <Link className='see-link' onClick={() => setDescriptionCollapse(!descriptionCollapse)}>
                        {
                            descriptionCollapse ?
                            <span>See Less &nbsp; <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> </span> : 
                            <span>See More &nbsp; <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
                        }
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleFeature;