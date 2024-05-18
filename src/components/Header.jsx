
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from './assets/about1.jpg';

function Header() {
    return (
        <nav className="navbar bg-light navbar-light navbar-expand-sm">
            <div className="container-fluid">
                <NavLink>
                    <img src="..\assets\logo.jpg" alt="LOGO" width="30" height="24"></img>
                </NavLink>
                <a className="navbar-brand" >


                </a>

                <ul className="navbar-nav container">

                    <li className="navbar-item ">
                        <a className="navbar-link text-dark" href="#">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link text-dark" href="#">Category</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link text-dark" href="#">About US</a>

                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link text-dark" href="#">FAQ</a>

                    </li>

                    <li className="navbar-item">
                        <a className="navbar-link text-dark" href="#">BLog</a>

                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link text-dark" href="#">Contact</a>

                    </li>

                </ul>
                <button type="button">Search</button>
            </div>

        </nav>
    )
}
export default Header;