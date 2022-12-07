import React, { Component } from 'react';
import OneCardComp from '../OneCardComp/OneCardComp';

class CardsComp extends Component {
    render() {
        return (
            <div className='col col-9'>
                <OneCardComp />
            </div>
        );
    }
}

export default CardsComp;
