import React, { Component } from 'react'

export default class AddCarForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carYear: '',
            carMake: '',
            carModel: ''
        }
        this.setCarYear = this.setCarYear.bind(this)
        this.setCarMake = this.setCarMake.bind(this)
        this.setCarModel = this.setCarModel.bind(this)
        this.addCar = this.addCar.bind(this)
    }


    setCarYear = (e) => this.setState({carYear: e.target.value})
    setCarMake = (e) => this.setState({carMake: e.target.value})
    setCarModel = (e) => this.setState({carModel: e.target.value})

    addCar = (e) => {
        e.preventDefault()
    }


    formGroups = [{
        "label": "Car Year",
        "input": {
            "type": "text",
            "value": this.carYear, 
            "handler": this.setCarYear
        }}, {
            "label": "Car Make",
            "input": {
                "type": "text",
                "value": this.carMake, 
                "handler": this.setCarMake
            }
        }, {
            "label": "Car Model",
            "input": {
                "type": "text",
                "value": this.carModel, 
                "handler": this.setCarModel
            }
        }]

        inputGroups = this.formGroups.map((inputGroup, index) => {
            return (
                <div key = {index} >
                    <label>{inputGroup.label}</label>
                    <input type = {inputGroup.input.type} value = {inputGroup.input.value} onChange = {inputGroup.input.handler} style = {{appearance: 'textfield'}}/>
                </div>
            )
        })

    render() {
        return (
            <form style = {{width: '50%', margin: '0 auto', display: 'flex', alignItems: 'flex-end'}} onSubmit = {this.props.addCarHandler}>
                {this.inputGroups}
                <button className = "btn btn-dark" style = {{width: '100px'}}>Add Car</button>
            </form>
        )
    }
}
