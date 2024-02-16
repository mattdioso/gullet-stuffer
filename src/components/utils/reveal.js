import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion';

const Reveal = ({ children, width, useBar = "true"}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    //const isInView = useInView(ref);
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible")
        }
    }, [isInView]);

    return (
        <div ref={ref} className='relative w-full px-auto overflow-hidden'>
            <motion.div variants = {{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition= {{ duration: 0.5, delay: 0.25 }}>
                {children}
            </motion.div>
            { useBar === "true" ? 
            <motion.div
                variants = {{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 2.0, ease: "easeIn"}}
                className="absolute top-2 bottom-2 left-0 mt-72 right-0 z-20"
            >
                <div className='h-48 w-3/5 mx-auto bg-orange-400'>

                </div>
            </motion.div> : <></>
            }
            
        </div>
    )
}

export default Reveal;