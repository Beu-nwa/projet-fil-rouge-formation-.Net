import React, { Component } from 'react';
import CardsComp from '../../Components/Component/Formation/CardsComp/CardsComp';
import './FormationView.css'

class FormationView extends Component {
    render() {
        return (
            <div className='cardsDisplay'>
                <CardsComp />
            </div>
        );
    }
}

export default FormationView;
