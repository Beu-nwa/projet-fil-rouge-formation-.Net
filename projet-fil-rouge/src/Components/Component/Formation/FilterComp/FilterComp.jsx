import React, { Component } from 'react';
import './FilterComp.css';
import { formations } from '../../../../datas/formations.js';

export default class FilterComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [...formations],
            formationList: [],
        }
    }
    render() {
        return (
            <div className='filterContainer p-2 m-0'>
                <select className="form-select" aria-label="Default select example">
                    <option value="default">Catégories...</option>
                    {
                        formations.map((x, index) => {
                            return !this.state.formationList.includes(x.category) ? (
                                this.state.formationList.push(x.category),
                                <option value={index} key={index} >{x.category} </option>
                            ) : null;
                        })
                    }
                </select>
            </div>
        )
    }
}
