import React from 'react'

export default function BuildFormModsModal() {
    return (
        <div id = "buildModsModal" className = "modal fade" tabIndex = "-1" aria-labelledby = "" aria-hidden = "true">
        <div className = "modal-dialog modal-lg modal-dialog-centered">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h3 className = "modal-title" id = "buildModalTitle">Enter your mods below</h3>
                    <button type = "button" data-bs-dismiss = "modal" className = "btn btn-close"></button>
                </div>
                <div className = "modal-body">
                    <form>
                        <div>
                            <div className = "mb-3">
                                <label className = "form-label">Mod Type</label>
                                <select className = "form-select">
                                    <option selected>Choose a Mod Type</option>
                                    <option>Exhaust</option>
                                </select>
                            </div>
                            <div className = "mb-3">
                                <label>Mod Name</label>
                                <input className = "form-control" />
                            </div>
                        </div>
                        <button type = "button" className = "btn btn-outline-dark">Add Another Mod</button>
                    </form>
                </div>
                <div className = "modal-footer">
                    <button type = "button" className = "btn btn-light" data-bs-dismiss = "modal">Cancel</button>
                    <button className = "btn btn-dark" data-bs-dismiss = "modal">Submit</button>
                </div>
            </div>
        </div>
    </div>
    )
}
