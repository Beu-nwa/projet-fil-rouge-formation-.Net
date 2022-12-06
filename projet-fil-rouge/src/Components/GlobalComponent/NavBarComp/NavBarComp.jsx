import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PersonFill} from 'react-bootstrap-icons'
import './NavBarComp.css'
class NavBarComp extends Component {

    render() {
        return (
            <div id="navBarContainer">
                <ul>
                    <div>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/formation">Formations</Link>
                        </li>
                    </div>
                    <div>
                       Connect<PersonFill/>
                    </div>

                </ul>
            </div>
        );
    }
}

export default NavBarComp;

