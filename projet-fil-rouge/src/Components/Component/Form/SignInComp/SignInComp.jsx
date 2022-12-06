import React, { Component } from 'react'

export default class SignInComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            passWord: "",
            confirmPassWord: "",
        }
    }
    changeFirstname = (e) => {
        this.setState({
            firstname: e.target.value
        });
    }
    changeLastname = (e) => {
        this.setState({
            lastname: e.target.value
        });
    }
    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    changePassword = (e) => {
        this.setState({
            passWord: e.target.value
        });
        this.comparePasswords(1, e);
    }
    changeConfirmePassword = (e) => {
        this.setState({
            confirmPassWord: e.target.value
        });
        this.comparePasswords(2, e);
    }
    comparePasswords = (x, e) => {
        switch (x) {
            case 1: e.target.value === this.state.confirmPassWord ? this.changePasswordColors("ok") : this.changePasswordColors("nok");
                break;
            case 2: e.target.value === this.state.passWord ? this.changePasswordColors("ok") : this.changePasswordColors("nok");
                break;
            default: console.log('la fonction comparePasswords a été déclanché sans passer par les cases');
                break;
        }
    }
    changePasswordColors = (x) => {
        return x === "ok" ? (
            document.getElementById('passwordInput').classList.remove("border-danger"),
            document.getElementById('confirmPasswordInput').classList.remove("border-danger"),
            document.getElementById('passwordInput').classList.add("border-success"),
            document.getElementById('confirmPasswordInput').classList.add("border-success")
        ) : (
            document.getElementById('passwordInput').classList.remove("border-success"),
            document.getElementById('confirmPasswordInput').classList.remove("border-success"),
            document.getElementById('passwordInput').classList.add("border-danger"),
            document.getElementById('confirmPasswordInput').classList.add("border-danger"));
    }
    render() {
        return (
            <div className='card p-2'>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Nom :</div>
                    <input onChange={(e) => this.changeFirstname(e)} className='col-7 input-group-text' name='nom' type="text" placeholder='Nom...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Prénom :</div>
                    <input onChange={(e) => this.changeLastname(e)} className='col-7 input-group-text' name='prenom' type="text" placeholder='Prénom...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Email :</div>
                    <input onChange={(e) => this.changeEmail(e)} className='col-7 input-group-text' name='email' type="email" placeholder='Email...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Mot de passe :</div>
                    <input onChange={(e) => this.changePassword(e)} id='passwordInput' className='col-7 input-group-text' name='password' type="password" placeholder='Mot de passe...' />
                </label>
                <label className='input-group row my-2 d-flex align-items-center'>
                    <div className="col-5 d-flex align-items-start">Confirmer :</div>
                    <input onChange={(e) => this.changeConfirmePassword(e)} id='confirmPasswordInput' className='col-7 input-group-text' type="password" placeholder='Confirmer mot de passe...' />
                </label>
                <hr />
                <div className='d-flex align-items-center justify-content-end mb-3'>
                    <button className='btn btn-outline-dark'>S'inscrire</button>
                </div>
            </div>
        )
    }
}
