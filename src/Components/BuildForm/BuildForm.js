import React, { Component } from 'react'
import './BuildForm.css'

export default class BuildForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buildName: ''
        }
        this.modTypes = [
            'Exhaust',
            'Suspension',
            'Intake'
        ]

        this.parts = {
            "Exhaust": {
                "parts": [
                    "Tomei Expreme Ti Catback (Single Exit)",
                    "ISR Single Exit",
                    "Straight Piped",
                    "Custom Exhaust"
                ]
            },
            "Suspension": {
                parts: [

                ]
            },
            "Intake": {
                parts: [
                    
                ]
            }
        }
    }

    render() {

        let mods = this.modTypes.map((modType, index) => { return (<option key = {index}>{modType}</option>) })

        let list = this.parts.Exhaust.parts.map((part, index) => {return (<option key = {index} value = {part} />)})

        return (
        <form className = "BuildForm">
        <div class="mb-3">
            <label for = "buildName" class="form-label">Car Make</label>
            <input type="email" class="form-control" id="buildName" aria-describedby="BuildNameHelp" />
            <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Car Model</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Car Year</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>

        <div className = "modsContainer">

            <div className = "modFormGroup">
                <label className = "form-label">Type of Mod</label>
                <select className = "form-select">
                    <option defaultChecked = "true" disabled>Choose a mod type below</option>
                    {mods}
                </select>
            </div>
            <div className = "modFormGroup">
                <label className = "form-label">Name of the Mod</label>
                <input className = "form-control" autoComplete = "off" list = "mods" type = "text"/>
                <datalist id = "mods">
                    {list}
                </datalist>
            </div>
            <button type = "button" className = "btn btn-outline-dark">Add a Mod</button>
        </div>

        <button type="submit" class="btn btn-dark">Submit</button>
        </form>
        )
    }
}
