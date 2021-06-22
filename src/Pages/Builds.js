import React from 'react'
import PageLayout from '../Layout/PageLayout'
import BuildFormModal from '../Components/BuildFormModal/BuildFormModal'
import BuildFormModsModal from '../Components/BuildFormModsModal/BuildFormModsModal'

export default function Builds() {
    return (
        <PageLayout>
            <p className = "Build-Text">View builds of various makes and models</p>
            <button type = "button" data-bs-toggle = "modal" data-bs-target = "#buildModal" className = "btn btn-dark add-build-button">Add a Build</button>
            <BuildFormModal />
            <BuildFormModsModal />
            {/*
            <BuildsContainer />
            */}
        </PageLayout>
    )
}
