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
                    <div class="input-group px-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Prix</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Minimum" aria-label="Username" />
                        <div class="input-group-prepend">
                            <span class="input-group-text">€</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Maximum" aria-label="Username" />
                        <div class="input-group-prepend">
                            <span class="input-group-text">€</span>
                        </div>
                    </div>
                </div>
                <div className="row my-3 mx-0">
                    <div class="input-group px-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Durée</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Minimum" aria-label="Username" />
                        <div class="input-group-prepend">
                            <span class="input-group-text">jours</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Maximum" aria-label="Username" />
                        <div class="input-group-prepend">
                            <span class="input-group-text">jours</span>
                        </div>
                    </div>
                </div>
                <div className="row my-3 mx-0">
                    <span class="col">
                        Certification.s
                    </span>
                </div>
            </div>
        )
    }
}
