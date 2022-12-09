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
                <div className="row mt-2 mx-0">
                    <h3>Filtres</h3>
                </div>
                <div className="row my-3 mx-0">
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
                <div className="row my-3 mx-0">
                    <div className="input-group px-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Prix</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Minimum" aria-label="Username" />
                        <div className="input-group-prepend">
                            <span className="input-group-text">€</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Maximum" aria-label="Username" />
                        <div className="input-group-prepend">
                            <span className="input-group-text">€</span>
                        </div>
                    </div>
                </div>
                <div className="row my-3 mx-0">
                    <div className="input-group px-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Durée</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Minimum" aria-label="Username" />
                        <div className="input-group-prepend">
                            <span className="input-group-text">jours</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Maximum" aria-label="Username" />
                        <div className="input-group-prepend">
                            <span className="input-group-text">jours</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-start align-items-center my-3 mx-0">
                    <span className='mx-3'>Certification.s</span>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
                <hr />
                <div className="row my-3 mx-0">
                    <div className="col col-12 text-start">
                        <span className='ms-1'>Commence...</span>
                    </div>
                    <div className="row my-3 mx-0">
                        <div className="input-group px-0">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Au plus tôt</span>
                            </div>
                            <input type="date" className="form-control" placeholder="Minimum" aria-label="Username" />
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="input-group px-0">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Au plus tard</span>
                            </div>
                            <input type="date" className="form-control" placeholder="Minimum" aria-label="Username" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
