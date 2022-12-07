import React, { Component } from 'react';
import LogsComp from '../../Components/Component/Form/LogsComp/LogsComp';

export default class LogView extends Component {
    render() {
        return (
            <div id='logView' className='row'>
                <LogsComp />
            </div>
        )
    }
}
