import React, { Component } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import { formations } from '../../../../datas/formations';
import './OneCardComp.css';

export default class OneCardComp extends Component {
  render() {
    return (
      formations.map((forma, index) => (
        <React.Fragment key={index}>
            <div className='col col-sm-5 col-lg-4 col-xl-3'>
            <div className="card" >
              <div className="card-image"> <h2><StarFill color='orange' /> <StarFill color='orange' />  <StarFill color='orange' /> <StarFill color='orange' /> <StarHalf color='orange' /> </h2> <hr/>
              Durée : {forma.Durée} jours
              <hr/>
              Prix : {forma.price}€ 
              <hr/>   
              Débute le : {forma.Sessions}
              <hr/>
              Adresse : {forma.lieux}
              </div>
              <div className="card-description"> 
                <div className="text-title">
                  {forma.name}
                </div>
                <Link to='/formation/'>
                  <button className='btn-post'> Plus de détails</button>
                </Link>
                <Link to='/cart'>
                  <button className='btn-cart'> Sauvegarder </button>
                </Link>
                <div className="text-body">{forma.category}<br/>{forma.image}</div>
            </React.Fragment>
            ))
    );
  }
}