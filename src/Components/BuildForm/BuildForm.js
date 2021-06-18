import React, { Component } from 'react'
import { builds } from '../../Data'

export default class BuildForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buildName: ''
        }

        
    }

    render() {
        return (
        <form>
        <div class="mb-3">
            <label for = "buildName" class="form-label">Car Make</label>
            <input type="email" class="form-control" id="buildName" aria-describedby="BuildNameHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Car Model</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Car Year</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        )
    }
}
