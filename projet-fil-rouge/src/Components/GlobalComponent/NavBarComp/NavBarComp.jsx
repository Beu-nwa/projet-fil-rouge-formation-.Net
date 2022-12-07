import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons'
import { PersonFillX } from 'react-bootstrap-icons'
import './NavBarComp.css'
class NavBarComp extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            console.log(this.props.activeUser[0].status),
            this.props.activeUser[0].status === "moderateur" ? (

                //Condition pour afficher la navBar en fonction du status de l'utilisateur         
                <div className="navBarContainer">
                    <ul>
                        <div className='navItem'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </div>
                        <div className='navItem'>
                            <li>
                                <Link to="/formation">Formations</Link>
                            </li>
                        </div>
                        <div className='navItem'>
                            <li>
                                <a href="">Ajout Formation</a>   {/* <Link to="/formation">Profil</Link>  */}
                            </li>
                        </div>

                        <div className='navItemBoxIcon'>
                            <div className='navItemIconText'>
                                <div className='iconConnection'>

                                    <button><Link to="/log"><PersonFillX className='navIcon' /></Link>
                                    <div className='navIconText'>Se deconnecter</div>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>

                    </ul>
                </div>
                /////////////////////////////////////////////si l'utilisitaeur est stagiaire ou formateur ///
            ) : this.props.activeUser[0].status === "formateur" || this.props.activeUser[0].status === "stagiaire" ?
                (
                    <div className="navBarContainer">
                        <ul>
                            <div className='navItem'>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </div>
                            <div className='navItem'>
                                <li>
                                    <Link to="/formation">Formations</Link>
                                </li>
                            </div>
                            <div className='navItem'>
                                <li>
                                    <a href="">Profil</a>   {/* <Link to="/formation">Profil</Link>  */}
                                </li>
                            </div>

                            <div className='navItemBoxIcon'>
                            <div className='navItemIconText'>
                                <div className='iconConnection'>

                                    <button><Link to="/log"><PersonFillX className='navIcon' /></Link>
                                    <div className='navIconText'>Se deconnecter</div>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>

                        </ul>
                    </div>
                ) : 
                ////////////////////NavBar par default (visiteur)
                <div className="navBarContainer">
                    <ul>
                        <div className='navItem'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </div>
                        <div className='navItem'>
                            <li>
                                <Link to="/formation">Formations</Link>
                            </li>
                        </div>

                        <div className='navItemBoxIcon'>
                            <div className='navItemIconText'>
                                <div className='iconConnection'>

                                    <button><Link to="/log"><PersonFill className='navIcon' /></Link>
                                    <div className='navIconText'>Se connecter</div>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                
        );
    }

}


export default NavBarComp;

