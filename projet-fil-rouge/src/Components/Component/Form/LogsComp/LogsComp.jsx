import React, { Component } from 'react';
import LoginComp from '../LoginComp/LoginComp';
import SignInComp from '../SignInComp/SignInComp';
import './LogsComp.css';

export default class LogsComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
        }
    }
    render() {
        return this.state.isActive ? (
            <div className='formContainer row justify-content-center'>
                <div className='col col-3 my-4'>
                    <SignInComp isActive={this.state.isActive} />
                </div>
            </div>
        ) : (
            <div className='formContainer row justify-content-center'>
                <div className='col col-3 my-4'>
                    <LoginComp />
                </div>
            </div >
        )
    }
}
