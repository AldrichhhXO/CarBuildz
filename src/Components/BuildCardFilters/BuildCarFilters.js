import React from 'react'
import './BuildCardFilters.css'

export default function BuildCarFilters() {
    let years = [], makes = ['Subaru']
    for (let i = 2021; i >= 2000; i--) {
        years.push(i)
    }
    let yearOptions = years.map((value, index) => {
        return (
            <option key = {index}>{value}</option>
        )
    })




    const checkCarYear = (e) => {
        if (e.target.value !== "Select a Year") document.getElementById("build-select-make").disabled = false
        else document.getElementById("build-select-make").disabled = true
    }


    const checkCarMake = (e) => {
        if (e.target.value !== "Select a Model") document.getElementById("build-select-model").disabled = false
        else document.getElementById("build-select-model").disabled = true
    }


    return (
        <div className = "Build-Card-Filters centered">
            <h2>Search Filters</h2>
            <form className = "build-filters-form">
                <div className = "mb-3 aligned-row">
                    <label className = "form-label">Year</label>
                    <select onChange = {checkCarYear} className = "form-select build-filter">
                        <option selected>Select a Year</option>
                        {yearOptions}
                    </select>
                </div>
                <div className = "mb-3 aligned-row">
                    <label className = "form-label">Make</label>
                    <select onChange = {checkCarMake} disabled className = "form-select build-filter" id = "build-select-make">
                        <option selected>Select a Make</option>
                        <option >Subaru</option>
                    </select>
                </div>
                <div className = "mb-3 aligned-row">
                    <label className = "form-label">Model</label>
                    <select disabled className = "form-select build-filter" id = "build-select-model">
                        <option selected>Select a Model</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
