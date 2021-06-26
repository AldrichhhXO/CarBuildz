import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

export default function Landing() {
    return (
        <div className = "Container">
            <Navbar />
            <div>

            </div>
            <div className = "container" style = {{marginTop: '100px'}}>
                <div className = "row row-cols-1 text-center">
                    <div class="col">
                        <div className = "row row-cols-1">
                            <div className = "col">
                                <h3>What is Carbuildz.IO?</h3>
                            </div>
                            <div className = "col">
                                <p>
                                    Carbuildz.IO is a web application focused on connecting automotive enthusiasts of various ages.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

            <div style = {{marginTop: '100px'}} className = "container">
                <div className = "row row-cols-1 text-center">
                    <div className = "col" style = {{marginBottom: '50px'}}>
                        <h3>Carbuildz key Features</h3>
                    </div>
                    <div className = "row row-cols-3">
                        <div className = "col">
                            <p>
                                Be able to search a vehicle within the database of various makes and models.
                            </p>
                        </div>
                        <div className = "col">
                            <p>
                                Search builds based on the make, model, or even part
                            </p>
                        </div>
                        <div className = "col">
                            <p>
                                Be able to upload your own build to share across the automotive community
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "container text-center" style = {{ marginTop: '50px'}}>
                <button className = "btn btn-dark">View Builds</button>
            </div>
        </div>
    )
}
