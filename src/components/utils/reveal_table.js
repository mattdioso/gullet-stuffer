import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useIsPresent, AnimatePresence } from 'framer-motion';

const RevealTable = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    //const isInView = useInView(ref);
    const mainControls = useAnimation();
    

    // useEffect(() => {
    //     if (isInView) {
    //         mainControls.start("visible");
            
    //     }
    // }, [isInView]);

    return (
        <AnimatePresence intial={false}>
        
            <motion.div variants = {{
                hidden: { opacity: 0, height: 0 },
                visible: { opacity: 1, height: "auto" }
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition= {{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}>
                {children}
            </motion.div>
            
            
        
        </AnimatePresence>
    )
}

export default RevealTable;