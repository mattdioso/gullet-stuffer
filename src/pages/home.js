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
          <div className="w-full h-full">
            {/* <div className={this.state.ended ?  "invisible max-h-0 transition-opacity ease-out opacity-0 duration-[2000ms]" : "visible h-screen w-full z-50"}>
                <video src={video} type="video/mp4" className="w-full h-screen" autoPlay={true} onEnded={this.videoEnded}>

                </video>
            </div> */}
            <div className={this.state.ended ? "visible block h-screen w-full" : "invisible max-h-0 opacity-0"}>
                <img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepage3.jpg" className="h-0 md:w-full md:visible invisible md:h-full opacity-0 md:opacity-100 md:z-50" alt="home"></img>
                <img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/home_alt.jpeg" className="visible h-full grayscale m-auto md:invisible md:h-full md:opacity-0" alt="home"></img>
                <div className="absolute top-80 md:top-32 text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-auto w-full">
                  <p className="text-white text-center">Seattle's Finest</p>
                  
                  <p className="text-orange-400 text-center">Competitive Eating Contest</p>
                </div>
            </div>

          {/* <div className={this.state.ended ? "visible md:flex h-5/6 pt-24 bg-gray-900 text-gray-200 transition-opacity ease-in opacity-100 duration-[2000ms]" : "invisible max-h-0 opacity-0 overflow-hidden"}>
            <div className={ this.state.ended ? "w-max-content md:w-1/3" : "invisible max-h-0 opacity-0"}>
              <p className={ this.state.ended ? "text-5xl tracking-wider md:text-6xl text-center text-yellow-300 p-6 pt-20" : "invisible max-h-0 opacity-0"}>
                Seattle's Finest Amateur Competitive Eating Competition
              </p>
            </div>
            <div className={ this.state.ended ? "w-2/3" : "invisible max-h-0 opacity-0"}>
              <div className={ this.state.ended ? "flex mr-2" : "invisible max-h-0 opacity-0"}>
                <div className={ this.state.ended ? "block w-1/3" : "invisible max-h-0 opacity-0"}>
                  <div className={ this.state.ended ? "m-2 h-fit animate-fadeLeft" : "invisible max-h-0 opacity-0"}>
                    <img src={handsin} className={ this.state.ended ? "block w-full" : "invisible max-h-0 opacity-0"} alt="merch" />
                  </div>
                  <div className={ this.state.ended ? "w-3/5 h-fit float-right mr-2 animate-fadeLeft" : "invisible max-h-0 opacity-0"}>
                    <img
                      src={merch3}
                      className={ this.state.ended ? "block w-full" : "invisible max-h-0 opacity-0"}
                      alt="asher"
                    />
                  </div>
                </div>
                <Carousel className={ this.state.ended ? "" :"invisible max-h-0 opacity-0"}/> 
                <div className={ this.state.ended ? "m-2 carousel slide relative w-screen md:w-2/3 float-right": "invisible max-h-0 opacity-0" }>
                <img src={handsin} className={ this.state.ended ? "block w-full" : "invisible max-h-0 opacity-0"} alt="merch" />
                </div>
              </div>
              <div className={ this.state.ended ? "w-2/3 flex float-right h-1/3 mr-4" : "invisible max-h-0 opacity-0"}>
                
                <div className={ this.state.ended ? "w-1/3 px-4 h-fit animate-fadeLeft" : "invisible max-h-0 opacity-0"}>
                    <img src={smile} className={ this.state.ended ? "block w-full" : "invisible max-h-0 opacity-0"} alt="smile"/>
                </div>
                <div className={ this.state.ended ? "w-2/3 h-fit animate-fadeLeft" : "invisible max-h-0 opacity-0"}>
                  <img src={amateurs} className={ this.state.ended ? "block w-full" : "invisible max-h-0 opacity-0"} alt="amateurs" />
                </div>
                
              </div>
            </div>
          </div> */}
          </div>
        );
    }
}

export default HomePage;