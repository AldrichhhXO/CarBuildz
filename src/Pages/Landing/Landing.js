import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Landing.css'
import CarFlames from '../../Images/Landing/carflames.jpg'
import Frs from '../../Images/Landing/frs.jpg'
import Nissan from '../../Images/Landing/240sx.jpg'

export default function Landing() {
    return (
        <div className = "Container">
            <Navbar />
            <div className = "landing-banner">
                <h1>CarBuildz.IO</h1>
                <p></p>
            </div>
            <div className = "container" style = {{marginTop: '100px'}}>
                <div className = "row row-cols-1 text-center">
                    <div class="col">
                        <div className = "row row-cols-1">
                            <div className = "col">
                                <h3>Welcome to Carbuildz.IO</h3>
                            </div>
                            <div className = "col landing-intro-text" style = {{marginBottom: '100px'}}>
                                <p style = {{marginBottom: '50px'}}>
                                    Carbuildz.IO is a web application focused on connecting automotive enthusiasts of various ages.
                                    Whether you're looking to gain bragging rights about how low your car looks or comparing horsepower gains
                                    in certain setups, you'll be able to gain knowledge and learn about anything and everything car related.
                                </p>

                                <p>
                                    CarBuildz.IO is meant to welcome car enthusiasts of all levels, whether it be about sharing specific parts of your builds
                                    or just to get tips on specific aspects of your vehicle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

            <div  className = "Container">
                <div className = "row row-cols-1 text-center">
                    <div className = "col" style = {{marginBottom: '50px'}}>
                        <h3>Carbuildz key Features</h3>
                    </div>
                    <div className = "row" style = {{width: '100%'}}>
                        <div className = "col landing-features-col">
                        <img  className = "landing-features-image" src = {Frs} />
                            <p className = "landing-intro-text">
                                Be able to search a vehicle within the database of various makes and models.
                            </p>
                        </div>
                        <div className = "col landing-features-col">
                        <img src = {CarFlames} className = "landing-features-image"/>
                            <p className = "landing-intro-text">

                                Search builds based on the make, model, or even part. The key is simplicity in this web application, and it'll allow you to easily search for what you need.
                            </p>
                        </div>
                        <div className = "col landing-features-col">
                        <img src = {Nissan} className = "landing-features-image"/>
                            <p className = "landing-intro-text">
                                Be able to upload your own build to share across the automotive community
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "container text-center" style = {{ marginTop: '50px'}}>
                <button className = "btn btn-outline-dark">View Builds</button>
            </div>
        </div>
    )
}
