import React, { Component } from 'react';
import LoginComp from '../LoginComp/LoginComp';
import SignInComp from '../SignInComp/SignInComp';

export default class LogsComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
        }
    }
    render() {
        return this.isActive == true ? (
            <LoginComp isActive={this.isActive} />
        ) : (
            <SignInComp />
        )
    }
}
