import React, { Component } from 'react'
import BuildCard from '../../Components/BuildCard/BuildCard'
import  './BuildsContainer.css'

import Image from '../../Images/sti.jpg'
import Q50 from '../../Images/q50.jpg'
export default class BuildsContainer extends Component {

   

    render() {
        let description  = "This is an STI build with A Tomei Exhaust, Stillen Intake, and BC Racing Coilovers"
        return (
            <div className = "BuildsContainer">
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Image } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Image } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Image } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Image } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Image } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Image } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Q50 } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Q50 } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Image } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Q50 } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Q50 } />
                <BuildCard buildName = "2008 STI Build" buildDescription = {description} image = { Q50 } />
            </div>
        )
    }
}
