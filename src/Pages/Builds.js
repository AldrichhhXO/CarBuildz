import React from 'react'
import PageLayout from '../Layout/PageLayout'
import AddBuildContainer from '../Containers/AddBuildContainer/AddBuildContainer'
import BuildsContainer from '../Containers/BuildsContainer/BuildsContainer'

export default function Builds() {
    return (
        <PageLayout>
            <p className = "Build-Text">View builds of various makes and models</p>
            <button type = "button" data-bs-toggle = "modal" data-bs-target = "#buildModal" className = "btn btn-dark add-build-button">Add a Build</button>
            <AddBuildContainer />
            <h3 style = {{textAlign: 'center', margin: '20px 0px'}}>Featured Builds</h3>
            <BuildsContainer />
        </PageLayout>
    )
}
