import React, { Component } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import './OneCardComp.css';

//TODO :::  Incrémenter prix date etc.. Avec BDD//

class OneCardComp extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <StarFill color='yellow' /> <StarFill color='yellow' />  <StarFill color='yellow' /> <StarFill color='yellow' /> <StarHalf color='yellow' />
          <hr />
        </div>
        <div className="card-description">
          <p className="text-title">Ma formation
          </p>
          <button className='btn-post'>Plus de détails</button>
          <button className='btn-cart'>Ajouter au panier</button>
          <p className="text-body">Blabla ma formation de 6mois pour faire fullstack gnagnagna</p>
        </div>
      </div>
    );
  }
}

export default OneCardComp;
