import React from 'react'
import './BuildForm.css'

/**
 * @name BuildFormModal
 * @param {*} props 
 * @returns 
 */
export default function BuildFormModal(props) {


    let checkForInputs = (e) => {
        if (document.getElementById("add-year-input").nodeValue != 'null' && document.getElementById("add-make-input").nodeValue !== 'null' && document.getElementById("add-model-input").nodeValue !== 'null') document.getElementById('add-build-continue-btn').disabled = false
        alert('srt')
    }

    return (
        <div id = "buildModal" className = "modal fade" tabIndex = "-1" aria-labelledby = "" aria-hidden = "true">
            <div className = "modal-dialog modal-lg modal-dialog-centered">
                <div className = "modal-content">
                    <div className = "modal-header">
                        <h3 className = "modal-title" id = "buildModalTitle">Enter information about your build</h3>
                        <button type = "button" data-bs-dismiss = "modal" className = "btn btn-close"></button>
                    </div>
                    <div className = "modal-body">
                        <form>
                            <div className = "mb-3">
                                <label className = "form-label">Car Year</label>
                                <input required className = "form-control" value = {props.carYear} onChange = {props.carYearHandler} id = "add-year-input"/>
                            </div>
                            <div className = "mb-3">
                                <label className = "form-label">Car Make</label>
                                <input required className = "form-control" value = {props.carMake} onChange = {props.carMakeHandler} id = "add-make-input" />
                            </div>
                            <div className = "mb-3">
                                <label className = "form-label">Car Model</label>
                                <input required className = "form-control" value = {props.carModel} onChange = {props.carModelHandler} id = "add-model-input" />
                                <small id="carModelHelp" class="form-text text-muted">Example: Impreza WRX</small>
                            </div>
                        </form> 
                    </div>
                    <div className = "modal-footer">
                        <button type = "button" className = "btn btn-light" data-bs-dismiss = "modal">Cancel</button>
                        <button disabled  className = "btn btn-dark" data-bs-target = "#buildModsModal" data-bs-toggle = "modal" data-bs-dismiss = "modal" id = "add-build-continue-btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
