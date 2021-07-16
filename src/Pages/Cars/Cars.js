import React, { Component } from 'react'
import CarsTable from '../../Containers/CarsTable/CarsTable'
import Filters from '../../Components/Filters/Filters'
import Navbar from '../../Components/Navbar/Navbar'
import Data from '../../Data.json'
// yee

export default class Cars extends Component {
    constructor() {
        super()
        this.state = {
            filter: '',
            searchQuery: '',
            models: []
        }
        this.applyFilter = this.applyFilter.bind(this)
        this.updateSearchQuery = this.updateSearchQuery.bind(this)
    }

    /**
     * 
     * @param { Event } e 
     */
    applyFilter = (e)  => {
        let filterInputs = document.getElementsByClassName("filterInput")
        for (let filterInput = 0; filterInput < filterInputs.length; filterInput++) {
            filterInputs[filterInput].checked = false
        }
        e.target.checked = true
        this.setState({filter: e.target.value})
    }
    updateSearchQuery = (e) => this.setState({searchQuery: e.target.value})

    
    populateModelButtons = () => {
        let carModels = new Set()
        for (let car = 0; car < Data.length; car++) {
            carModels.add(Data[car].model)
        }
    }

    render () {
        return (
            <div>
                <Navbar />
                <h1 style = {{textAlign: "center"}}>List of Cars</h1> 
                <div className = "Vehicle-Search">
                    <label>Search for a Vehicle</label>
                    <input type = "text" onChange = {this.updateSearchQuery} />
                </div>
                <Filters filterHandler = { this.applyFilter } filter = {this.state.filter} />
                <h1 style = {{textAlign: 'center'}}>Results</h1>
                <CarsTable filter = { this.state.filter } searchQuery = {this.state.searchQuery} />
        </div>)
    }
}