import React, { Component } from 'react'
import BuildFormModal from '../../Components/BuildFormModal/BuildFormModal';
import BuildFormModsModal from '../../Components/BuildFormModsModal/BuildFormModsModal';

export default class AddBuildContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carYear: "",
            carMake: "",
            carModel: "",
            mods: [{

            }]
        }

        this.updateCarYear = this.updateCarYear.bind(this)
        this.updateCarMake  = this.updateCarMake.bind(this)
        this.updateCarModel = this.updateCarModel.bind(this)
    }

    updateCarYear = (e) => this.setState({carYear: e.target.value})
    updateCarMake = (e) => this.setState({carMake: e.target.value})
    updateCarModel = (e) => this.setState({carModel: e.target.value})

    render() {

        let buildHandlers = {
            carYear: this.updateCarYear,
            carMake: this.updateCarMake,
            carModel: this.updateCarModel
        }

        return (
            <div>
                <BuildFormModal carYear = {this.state.carYear} carMake = {this.state.carMake} carModel = {this.state.carModel} carYearHandler = {buildHandlers.carYear} carMakeHandler = {buildHandlers.carMake} carModelHandler = {buildHandlers.carModel} />
                <BuildFormModsModal />
            </div>
        )
    }
}
