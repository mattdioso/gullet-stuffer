import React, { useState } from 'react';
import Carousel from '../components/carousel';
import merch3 from '../imgs/GulletStufferONEstills/jaybee_hype1.png';
import amateurs from '../imgs/GS2Stills/jaybee_spicy.jpg';
import handsin from '../imgs/GSIVeventPICS/propics/handsin.jpg';
import smile from '../imgs/GulletStufferONEstills/smile.png';
import video from '../imgs/TestVideo.mp4';
import home from '../imgs/Gulletmaindesigns/homepage3.jpg';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          ended: true
      }
      this.videoEnded = this.videoEnded.bind(this);
    }

    videoEnded() {
      this.setState({ ended: true })
      console.log("video ended: " + this.state.ended);
  }

    render() {
        return (
          <div className="w-full h-full overflow-y-hidden">
            {/* <div className={this.state.ended ?  "invisible max-h-0 transition-opacity ease-out opacity-0 duration-[2000ms]" : "visible h-screen w-full z-50"}>
                <video src={video} type="video/mp4" className="w-full h-screen" autoPlay={true} onEnded={this.videoEnded}>

                </video>
            </div> */}
            <div className={this.state.ended ? "visible block h-screen w-full" : "invisible max-h-0 opacity-0"}>
                {/* <img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepage3.jpg" className="h-0 md:w-full md:visible invisible md:h-full opacity-0 md:opacity-100 md:z-50" alt="home"></img> */}
                {/* <img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/home_alt.jpeg" className="visible h-full grayscale m-auto md:invisible md:h-0 md:opacity-0" alt="home"></img>  */}
                
                <div className="visible h-full flex pt-96 md:pt-0 m-auto md:invisible md:h-0 md:opacity-0">
                  <video autoPlay loop muted playsInline id='intro_video' className="object-bottom pb-4">
                      <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepagevideomobile.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className="h-0 md:w-full flex md:visible invisible md:h-full opacity-0 md:opacity-100 md:z-50">
                  <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto">
                      <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepagevideo.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className="absolute top-32 md:top-24 text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-auto w-full">
                  <p className="text-white text-center">Seattle's Finest</p>
                  
                  <p className="text-orange-400 text-center">Competitive Eating Contest</p>
                </div>
                {/* <div className="absolute top-80 md:top-32 text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-auto w-full"> */}
                
            </div>

          </div>
        );
    }
}

export default HomePage;