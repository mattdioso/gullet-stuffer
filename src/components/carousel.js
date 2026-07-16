import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';

const SPRING_OPTS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;


const Carousel = ({ images = [] }) => {
    const [dragging, setDragging] = useState(false);
    const [imgIndex, setImgIndex ] = useState(0);
    const activeImgIndex = images.length === 0
        ? 0
        : Math.min(imgIndex, images.length - 1);

    const DRAG_BUFFER = 50;

    const dragX = useMotionValue(0);
    const dragXProgress = useMotionValue(0);

    useMotionValueEvent(dragX, "change", (latest) => {
        if (typeof latest === "number" && dragging) {
            dragXProgress.set(latest);
        } else {
            dragXProgress.set(0);
        }
    })

    useEffect(() => {
        setImgIndex((currentIndex) => {
            if (images.length === 0) {
                return 0;
            }

            return Math.min(currentIndex, images.length - 1);
        });
    }, [images.length]);

    useEffect(() => {
        if (images.length === 0) {
            return undefined;
        }

        const intervalRef = setInterval(() => {
            const x = dragXProgress.get();
            if (x === 0) {
                setImgIndex(pv => {
                    if (pv === images.length -1) {
                        return 0;
                    }
                    return pv + 1;
                })
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [dragXProgress, images.length])

    const onDragStart = () => {
        setDragging(true);
        
    }
    const onDragEnd = () => {
        setDragging(false);
        const x = dragX.get();
        if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    }

    

    return (
        <div className='md:mt-28 overflow-hidden bg-black'>
            <motion.div 
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                style={{
                    x: dragX,

                }}
                animate={{
                    translateX: `-${activeImgIndex * 100}%`
                }}
                transition={SPRING_OPTS}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className='w-full flex items-center cursor-grab active:cursor-grabbing '>
                <Images images={images}/>
            </motion.div>
            <div
                className='flex w-full justify-center gap-2'
            >
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === activeImgIndex ? "bg-neutral-50" : "bg-neutral-500"} `}
                    >
                    
                    </button>
                ))}
            </div>
        </div>
        
    );
}

const Images = ({ images }) => {
    
    return (
        <>
            {images.map((imgSrc, idx) => (
                <motion.div
                    key={idx}
                    style = {{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    animate={{ scale: 0.85 }}
                    transition={SPRING_OPTS}
                    className='aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover'
                />
            ))}
        </>
    );
}


export default Carousel;
