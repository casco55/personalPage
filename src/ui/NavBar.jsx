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
        <div className='menuIcon' onClick={handleMenu}>
        {visibleMenu ? <X size={18} /> : <List size={18}/>}
        </div>
        <motion.div
            className="d-flex flex-row justify-content-end"
            initial={{ width: '30px', height: '30px', opacity: 0 }}
            animate={!visibleMenu ? { width: '30px' } : { opacity: 1, width: '100%', height: 'auto', backgroundColor: '#000' }}
            transition={{ duration: 0.8 }}
            >
                <motion.li>
                    <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : '')}`} end to="/">Home</NavLink>
                </motion.li>
                <motion.li>
                    <NavLink className={`nav-link ${(navData) => (navData.isActive ? "active" : '')}`} end to="/us">Us</NavLink>
                </motion.li>
            </motion.div>
            
        </>
    );
}