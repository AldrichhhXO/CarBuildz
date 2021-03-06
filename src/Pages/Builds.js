import React from 'react'
import PageLayout from '../Layout/PageLayout'
import AddBuildContainer from '../Containers/AddBuildContainer/AddBuildContainer'
import BuildsContainer from '../Containers/BuildsContainer/BuildsContainer'

import BuildCarFilters from '../Components/BuildCardFilters/BuildCarFilters'

export default function Builds() {
    return (
        <PageLayout>
            <div className = "centered build-div">
                <h2>What exactly is a car <i>build?</i></h2>
                <p>A car build is exactly what is is. It is what makes your vehicle unique. Whether it be something as small as an aftermarket bumper or a performance fuel system, 
                    by sharing your build you are able to motivate and market the parts within your build.
                </p>
                
            </div>

            <div className = "centered build-div">
                <p>
                    A car build is exactly what is is. It is what makes your vehicle unique. Whether it be something as small as an aftermarket bumper or a performance fuel system, 
                    by sharing your build you are able to motivate and market the parts within your build.
                </p>
                <button type = "button" data-bs-toggle = "modal" data-bs-target = "#buildModal" className = "btn btn-outline-dark add-build-button">Add a Build</button>
            </div>
            <AddBuildContainer />
            <h3 style = {{textAlign: 'center', margin: '50px 0px'}}>Featured Builds</h3>
            <BuildCarFilters />
            <BuildsContainer />
        </PageLayout>
    )
}
