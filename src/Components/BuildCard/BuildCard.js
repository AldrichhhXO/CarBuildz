import React from 'react'
import './BuildCard.css'



export default function BuildCard(props) {
    return (
        <div class="card">
            <img src= { props.image } class="card-img-top" alt="Car Showcase" />
            <div class="card-body">
                <h5 class="card-title">{props.buildName}</h5>
                <p class="card-text">{props.buildDescription}</p>
                <a href="#" class="btn btn-dark">View Build</a>
            </div>
    </div>
    )
}
