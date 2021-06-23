import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

export default function Landing() {
    return (
        <div className = "Container">
            <Navbar />
            <div className = "IntroductionContainer">
                <h1>Welcome to Carbuilds.IO</h1>
            </div>

            <div>
                <p>CarBuildz.IO is used to promote and experiment with various builds for a specific car.</p>
                <p>Be able to view and/or add cars into the system.</p>
            </div>            
        </div>
    )
}
