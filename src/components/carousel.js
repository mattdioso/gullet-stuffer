import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { clear } from '@testing-library/user-event/dist/clear';

const images = [
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/merch.JPG",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/GS4_stage.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/all_pros.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/dee_won.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/jaybee_award.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/mom_front.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/par_par.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/pointing.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/pre-pros.jpg",
    "https://storage.googleapis.com/gulllet-stuffer.appspot.com/carousel/view_from_stage.jpg"
];

const SPRING_OPTS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;


const Carousel = () => {
    const [dragging, setDragging] = useState(false);
    const [imgIndex, setImgIndex ] = useState(0);

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
    }, [])

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
                    translateX: `-${imgIndex * 100}%`
                }}
                transition={SPRING_OPTS}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className='w-full flex items-center cursor-grab active:cursor-grabbing '>
                <Images imgIndex={imgIndex}/>
            </motion.div>
            <div
                className='flex w-full justify-center gap-2'
            >
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"} `}
                    >
                    
                    </button>
                ))}
            </div>
        </div>
        
    );
}

const Images = (imgIndex) => {
    
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
                    animate={{
                        scale: imgIndex === idx ? 0.95 : 0.85
                    }}
                    transition={SPRING_OPTS}
                    className='aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover'
                />
            ))}
        </>
    );
}


export default Carousel;