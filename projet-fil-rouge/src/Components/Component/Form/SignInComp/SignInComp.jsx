import React, { Component } from 'react'

export default class SignInComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='card p-2'>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Email :</div>
                    <input className='col-7 input-group-text' type="text" placeholder='Email...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Mot de passe :</div>
                    <input className='col-7 input-group-text' type="text" placeholder='Mot de passe...' />
                </label>
                <hr />
                <div className='d-flex align-items-center justify-content-around mb-3'>
                    <div className=''>
                        <span>
                            créer un compte...
                        </span>
                    </div>
                    <div className=''>
                        <button className='btn btn-outline-dark'>se connecter</button>
                    </div>
                </div>
            </div>
        )
    }
}
