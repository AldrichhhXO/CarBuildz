import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function PageLayout(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}
