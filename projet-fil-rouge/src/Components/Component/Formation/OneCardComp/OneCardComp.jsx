import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { formations } from '../../../../datas/formations';
import CareScaleComponent from '../CareScaleComponent/CareScaleComponent';
import './OneCardComp.css';

///TODO Difficulté en fonction de la BDD

export default class OneCardComp extends Component {

 


  render() {
    return (
      formations.map((forma, index) => (
        <React.Fragment key={index}>
          <div className='col col-sm-5 col-lg-4 col-xl-3'>
            <div className="card" >
              <div className="card-image"> <CareScaleComponent note={forma.note} /> <hr />
                <div className='cate'>{forma.category}</div>
                <hr />
                Durée : {forma.durée} jours
                <hr />
                Prix : {forma.price}€
                <hr />
                Débute le : {forma.sessions}
                <hr />
                Certification : {forma.certification}
              </div>
              <div className="card-description">
                <div className="text-title">
                  {forma.name}
                </div>
                <Link  to={`/training/details/${forma.id}`} className='Linkbtn'>
                  <button className='btn-post'> Détails</button>
                </Link>
                <Link to='/cart' className='Linkbtn'>
                  <button className='btn-cart'> Sauvegarder </button>
                </Link>
                <div className="text-body">{forma.image}</div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))
    );
  }
}