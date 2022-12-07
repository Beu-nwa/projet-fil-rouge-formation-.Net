import React, { Component } from 'react';
import CardsComp from '../../Components/Component/Formation/CardsComp/CardsComp';
import FilterComp from '../../Components/Component/Formation/FilterComp/FilterComp';
import './FormationView.css';

export default class FormationView extends Component {
    render() {
        return (
            <div>
                <div className='row m-0 p-0'>
                    <div className='cardsDisplay col col-9 m-0 p-0'>
                        <CardsComp />
                    </div>
                    <div className=' col col-3 m-0 p-0'>
                        <FilterComp />
                    </div>
                </div>
            </div>
        );
    }
}
