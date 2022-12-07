import React, { Component } from 'react';
import OneCardComp from '../OneCardComp/OneCardComp';

class CardsComp extends Component {
    render() {
        return (
            <div className="container">

            <div className='row'>
                <OneCardComp />
            </div>
            </div>
        );
    }
}

export default CardsComp;
