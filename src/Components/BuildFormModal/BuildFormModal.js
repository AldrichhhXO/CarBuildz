import React from 'react'
import './BuildForm.css'

/**
 * @name BuildFormModal
 * @param {*} props 
 * @returns 
 */
export default function BuildFormModal(props) {   
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
                                <input className = "form-control" value = {props.carYear} />
                            </div>
                            <div className = "mb-3">
                                <label className = "form-label">Car Make</label>
                                <input className = "form-control" value = {props.carMake} />
                            </div>
                            <div className = "mb-3">
                                <label className = "form-label">Car Model</label>
                                <input className = "form-control" value = {props.carModel} />
                                <small id="carModelHelp" class="form-text text-muted">Example: Impreza WRX</small>
                            </div>
                        </form> 
                    </div>
                    <div className = "modal-footer">
                        <button type = "button" className = "btn btn-light" data-bs-dismiss = "modal">Cancel</button>
                        <button className = "btn btn-dark" data-bs-target = "#buildModsModal" data-bs-toggle = "modal" data-bs-dismiss = "modal">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
