import React, { Component } from 'react';
import NavBarComp from '../../GlobalComponent/NavBarComp/NavBarComp'


class HeaderComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
            activeUser: [],
        }
    }
    render() {
        return (
            <div>
                <NavBarComp changeActiveUser={this.changeActiveUser} changeIsActive={this.changeIsActive} />
            </div>
        );
    }
}

export default HeaderComp;
