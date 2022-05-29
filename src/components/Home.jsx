import { motion } from "framer-motion";
import React, { useState } from "react";

export const Home = () => {
    
    return (
        <>                    
            <motion.div
                initial={{ color: '#fff' }}
                transition={{ duration: 1 }}
                animate={{ 
                y: 100,
                color: "#000",
                }}>Home
            </motion.div>
        </>
    )
}