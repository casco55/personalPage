import { motion } from "framer-motion";
import React, { useState } from "react";
import imgHome from "../images/imagenHome.jpg";

export const Home = () => {
    
    return (
        <>
            <motion.div 
                layout
                className="marginTop__lg__10 marginTop__sm__50 container d-flex flex-column"
                initial={{ scale: 0.5}}
                transition={{ duration: 0.8 }}
                animate={{ scale: 1, borderRadius: 2}}
            >
                <motion.div 
                    className="row mx-auto col-12 d-flex flex-column position-relative">
                    <motion.img src={imgHome} 
                        initial={{ scale: 0.5, borderRadius: '50%'}}
                        transition={{ duration: 1 }}
                        animate={{ scale: 1, borderRadius: '0%'}}
                        alt='imagen home jrdesarrollos' className="img-fluid mx-auto brightness40" />
                    <div className="position-absolute text-center absolute-centered ">
                        <h1 className="text-white mb-0">JRDesarrollos</h1>
                        <h2 className="text-white mt-0">Desarrollo de Software</h2>
                        <p className="text-white col-9 mx-auto font-size-15 text-justify mt-3">Soy Juan Rivas, un desarrollador de software con fuerte expreriencia en la construcción de aplicaciones de gestión para empresas y negocios. Con proyectos realizados para pymes del rubro eléctrico, construcción y educación.</p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}