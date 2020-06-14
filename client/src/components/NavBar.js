import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Employee App</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav text-center ml-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Show</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/create'>Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
