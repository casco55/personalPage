import React from "react";
import {  NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand nav-link active" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} end to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} end to="/us">Us</NavLink>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link " id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menú
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li className="nav-item">
                            <NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} end to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} end to="/us">Us</NavLink>
                            </li>
                            </ul>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    );
}