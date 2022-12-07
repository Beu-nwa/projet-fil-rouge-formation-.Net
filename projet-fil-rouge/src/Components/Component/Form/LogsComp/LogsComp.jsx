import React, { Component } from 'react';
import LoginComp from '../LoginComp/LoginComp';
import SignInComp from '../SignInComp/SignInComp';
import './LogsComp.css';

export default class LogsComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
            activeUser: [],
        }
    }
    changeActiveUser = (user) => {
        this.setState({
            activeUser: user
        })
    }
    changeIsActive = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        return this.state.isActive ? (
            <div className='formContainer col col-sm-11 col-md-8 col-lg-6 col-xl-4 col-xxl-3 my-4 mx-auto'>
                <LoginComp changeActiveUser={this.changeActiveUser} changeIsActive={this.changeIsActive} />
            </div>
        ) : (
            <div className='formContainer col col-sm-11 col-md-8 col-lg-6 col-xl-4 col-xxl-3 my-4 mx-auto'>
                <SignInComp />
            </div >
        )
    }
}
