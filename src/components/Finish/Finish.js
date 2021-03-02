import React from 'react';
import thankYou from '../../images/icon/thankYou.gif';
const Finish = () => {
    document.title = 'Thank You'
    return (
        <div align='center' style={{marginTop: '100px'}}>
            <img src={thankYou} alt=""/>
        </div>
    );
};

export default Finish;