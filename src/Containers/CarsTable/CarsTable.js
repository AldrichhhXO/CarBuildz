import React, { Component } from 'react'
import AddCarForm from '../AddCarForm/AddCarForm'
import Data from '../../Data.json'

export default class CarsTable extends Component {
    addCar = (e) => {}

    /**
     * @name sortData function
     * @description Sorts the car table data based on a filter.
     * @param { String } filter the filter to sort the data by.
     */
    sortData = (filter) => {
        let carArray
        switch(filter) {
            case 'year':
                carArray = Data.sort((a,b) => a.year.localeCompare(b.year)).map((car, index) => {
                    return (
                    <tr key = {index} style = {{cursor: 'pointer'}}>
                        <td>{car.year}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                    </tr>)})
                break;
            case 'make':
                carArray = Data.sort((a,b) => a.make.localeCompare(b.make)).map((car, index) => {
                    return (
                    <tr key = {index} style = {{cursor: 'pointer'}}>
                        <td>{car.year}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                    </tr>)})
                break;
                case 'model':
                    carArray = Data.sort((a,b) => a.model.localeCompare(b.model)).map((car, index) => {
                        return (
                        <tr key = {index} style = {{cursor: 'pointer'}}>
                            <td>{car.year}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                        </tr>)})
                    break;
            default:
                carArray = Data.map((car, index) => {
                    return (                   
                    <tr key = {index} style = {{cursor: 'pointer'}}>
                        <td>{car.year}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                    </tr>)})
                break;
        }
        return carArray
    }

    render() {
        if (this.props.searchQuery) {

        }

        let carArray = this.sortData(this.props.filter)
        return (
            <div>
                <AddCarForm addCarHandler = {this.addCar} />
                <table className = "table" style = {{width: '60%', border: '1px solid black', margin: '10px auto'}}>
                    <thead>
                        <tr>
                            <th scope = "col">Year</th>
                            <th scope = "col">Make</th>
                            <th scope = "col">Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carArray}
                    </tbody>
                </table>
            </div>

        )
    }
}
