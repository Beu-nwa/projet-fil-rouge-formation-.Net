import React, { Component } from 'react';
import './OneCardComp.css';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import { formations } from '../../../../datas/formations';


export default class OneCardComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      price: "",
      difficulte: "",
      FormationsInfos: [...formations]

    }

  }


  render() {

    return (
        this.state.FormationsInfos.map((forma, index) => (
          <React.Fragment key={index}>
    
            <div className="card" >
              
              <div className="card-image"> <StarFill color='yellow' /> <StarFill color='yellow' />  <StarFill color='yellow' /> <StarFill color='yellow' /> <StarHalf color='yellow' />  <hr />
              </div>
              <div className="card-description">
                <div className="text-title">
                  {forma.name}
                </div>
                <Link to='/formation/'>
                  <button className='btn-post'>Plus de détails</button>
                </Link>
                <Link to='/cart'>
                  <button className='btn-cart'>Ajouter au panier</button>
                </Link>
                <div className="text-body"> {forma.category}<br/>{forma.category}</div>
              </div>
            </div>
            
            </React.Fragment>
            ))
    );
}
}