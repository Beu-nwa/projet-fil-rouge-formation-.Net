import React, { Component } from 'react';
import './OneCardComp.css';
import {StarFill} from 'react-bootstrap-icons';
import {StarHalf} from 'react-bootstrap-icons';

//TODO :::  Incrémenter prix date etc.. Avec BDD//

class OneCardComp extends Component {
    render() {
        return (
            <div className="card">
<div className="card-image"> <StarFill color='yellow'/> <StarFill color='yellow' />  <StarFill color='yellow'/> <StarFill color='yellow'/> <StarHalf color='yellow'/>  <hr/>
    <p className='infoForma'>Développez vos compétences techniques en C# React et Docker ainsi que vos softskills <hr/>Prix : 2500€<hr/>Durée: 6 mois<hr/>Prochaine session: 03/02/2023</p></div>
  <div className="card-description">
    <p className="text-title">Ma formation
    </p>
    <button className='btn-post'>Postuler</button>
    <button className='btn-cart'>Ajouter au panier</button>
    <p className="text-body">Blabla ma formation de 6mois pour faire fullstack gnagnagna</p>
  </div>
</div>
        );
    }
}

export default OneCardComp;
