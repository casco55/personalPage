import React, { useState } from "react";
import {  NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import { List, X } from 'react-bootstrap-icons';

export const NavBar = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const handleMenu = () => {
        setVisibleMenu(!visibleMenu);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block">
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
                           
                        </ul>
                </div>
            </nav>
            <div className='menuIcon d-lg-none' onClick={handleMenu}>
                {visibleMenu ? <X size={18} /> : <List size={18}/>}
            </div>
            <motion.div
                className="d-flex flex-column d-lg-none"
                initial={{ width: '30px', height: '30px', opacity: 0, position: 'fixed', top: '0', left: '0', zIndex: '1' }}
                animate={!visibleMenu ? { width: '30px' } : { opacity: 1, position: 'fixed', zIndex: '80', width: '150px', height: 'auto', backgroundColor: '#000' }}
                transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ marginLeft: '60px' }}
                    >
                    <motion.li>
                        <NavLink end to="/" className='text-decoration-none colorWhite' onClick={handleMenu}>Home</NavLink>
                    </motion.li>
                    <motion.li>
                        <NavLink end to="/us" className='text-decoration-none colorWhite' onClick={handleMenu}>Us</NavLink>
                    </motion.li>
                    </motion.div>
                </motion.div>
            
        </>
    );
}