import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons'
import './NavBarComp.css'
class NavBarComp extends Component {

    render() {
        return (
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
                                <Link to="/log"><PersonFill className='navIcon' /></Link>
                            </div>
                            <div>
                                <div className='navIconText'>Se connecter</div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default NavBarComp;

