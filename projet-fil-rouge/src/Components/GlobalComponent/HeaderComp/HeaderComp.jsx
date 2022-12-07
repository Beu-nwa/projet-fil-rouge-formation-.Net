import React, { Component } from 'react';
import NavBarComp from '../../GlobalComponent/NavBarComp/NavBarComp'


class HeaderComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <NavBarComp activeUser={this.props.activeUser} />
            </div>
        );
    }
}

export default HeaderComp;
