import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">CarBuildz.IO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/cars">Cars</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/builds">Builds</Link>
                </li>
            </ul>
        </div>
        </nav>
    )
}
