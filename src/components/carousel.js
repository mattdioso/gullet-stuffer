import React from 'react';
import max from '../imgs/GS2Stills/Maxpoint.jpg';
import sparklers from '../imgs/GS2Stills/sparklergang2.jpg';
import carter from '../imgs/GulletStufferIIIpics/DSCF1771.JPG';
import handsin from '../imgs/GSIVeventPICS/propics/handsin.jpg';

const Carousel = () => {
    const images = [max, sparklers, carter];
    const [currentImage, setCurrentImage] = React.useState(0);
    const refs = images.reduce((acc, val, i) => {
        acc[i] = React.createRef();
        return acc;
    }, {});

    const scrollToImage = (i) => {
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    };

    const totalImages = images.length;

    const nextImage = () => {
        if (currentImage >= totalImages -1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

    const arrowStyle = "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

    const sliderControl = (isLeft) => (
        <button type="button" onClick={isLeft ? previousImage : nextImage }
        className={`${arrowStyle} ${isLeft ? "left-2": "right-2"}`}
        style={{ top: "40%" }}>
            <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
                {isLeft ? "◀" : "▶"}
            </span>
        </button>
    )

    return (
        
        <div className="m-2 carousel slide relative w-screen md:w-2/3 float-right" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full" data-mdb-interval="1">
                    <img src={max} className="block w-full" alt="max"/>
                </div>
                <div className="carousel-item relative float-left w-full" data-mdb-interval="1">
                    <img src={sparklers} className="block w-full" alt="sparklers"/>
                </div>
                <div className="carousel-item relative float-left w-full" data-mdb-interval="1">
                    <img src={carter} className="block w-full" alt="carter"/>
                </div>
                <div className="carousel-item relative float-left w-full" data-mdb-interval="1">
                    <img src={handsin} className="block w-full" alt="handsin"/>
                </div>
            </div>
        </div>
    );
}

export default Carousel;