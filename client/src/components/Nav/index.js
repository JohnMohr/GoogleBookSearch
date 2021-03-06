import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">Book Shelf</Link>
                <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/shelf">Shelf</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;