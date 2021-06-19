import React from 'react'
import PageLayout from '../Layout/PageLayout'
import BuildsContainer from '../Containers/BuildsContainer/BuildsContainer'
import BuildForm from '../Components/BuildForm/BuildForm'

export default function Builds() {
    return (
        <PageLayout>
            <p>Want to feature your car Build? Add it below!</p>
            <BuildForm />
            <BuildsContainer />
        </PageLayout>
    )
}
