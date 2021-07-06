import React from 'react'

export default function Filters(props) {
    return (
        <div className = "Filter-Container">
            <h1>Filters</h1>
            <div style = {{border: '1px solid black', width: '30%', display: 'flex', justifyContent: 'space-around'}}>
                <div className = "Filter-Group">
                    <label>Year</label>
                    <input className = "filterInput" value = "year" type = "checkbox" onChange = {props.filterHandler}/>
                </div>
                <div className = "Filter-Group">
                    <label>Make</label>
                    <input className = "filterInput" value = "make" type = "checkbox" onChange = {props.filterHandler}/>
                </div>
                <div className = "Filter-Group">
                    <label>Model</label>
                    <input className = "filterInput" value = "model" type = "checkbox" onChange = {props.filterHandler} />
                </div>
            </div>
            <p>Filtered by: {props.filter || "Default"}</p>
        </div>
    )
}
