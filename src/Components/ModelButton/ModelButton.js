import React from 'react'

export default function ModelButton(props) {
    return (
        <button className = "ModelButton" value = {props.carModel}>{props.carModel}</button>
    )
}
