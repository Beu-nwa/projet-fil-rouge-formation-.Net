import React, { Component } from 'react';
import NavBarComp from '../../GlobalComponent/NavBarComp/NavBarComp'


class HeaderComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <NavBarComp activeUser={this.props.activeUser} />
            </header>
        );
    }
}

export default HeaderComp;
