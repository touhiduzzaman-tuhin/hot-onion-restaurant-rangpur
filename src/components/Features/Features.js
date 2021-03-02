import React from 'react';
import feature from '../../fakeData/FeaturesData';
import SingleFeature from '../SingleFeature/SingleFeature';

const Features = () => {
    return (
        <div className='container'>
            <div className="col-12 col-md-6">
                <h3>Why You Choose Us?</h3>
                <p className='text-justify'>Clients also choose us because they need one trusted advisor who can come into their inner circle and understand what they care about deeply: their family, their business and their long-term goals. But clients also choose us because they need a partner who can direct a team of people to achieve their goals</p>
            </div>
            <div className="row">
                {
                    feature.map(ftr => <SingleFeature key={ftr.id} feature={ftr}></SingleFeature>)
                }
            </div>
        </div>
    );
};

export default Features;