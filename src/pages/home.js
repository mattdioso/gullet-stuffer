import React from 'react';
import GulletStufferForm from '../components/gulletstuffer_form';
import GulletStufferSubscribe from '../components/mailchimp_subscribe';

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
          <div className="block w-full h-full overflow-y-scroll">
            
                <div className="mt-32 md:top-24 text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-auto w-full">
                  <p className="text-white text-center">Seattle's Finest</p>
                  
                  <p className="text-orange-400 text-center">Competitive Eating Contest</p>
                </div>
                <div className="visible h-fit w-11/12 flex pt-4 md:pt-0 m-auto md:invisible md:w-0 md:h-0 md:opacity-0">
                  <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto perspective border border-gray-600 rounded-xl">
                      <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepagevideomobile.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className="h-0 md:w-10/12 md:mx-auto flex md:pt-12 md:visible invisible md:h-fit opacity-0 md:opacity-100 md:z-50">
                  <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto perspective border border-gray-600 rounded-xl">
                      <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepagevideo.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className="md:flex w-full mt-6">
                  <div className="w-10/12 md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 text-center md:text-left md:pl-20 py-auto mx-auto pb-12">
                    <p className='text-7xl md:text-9xl text-white'>Gullet</p>
                    <p className='text-[4.5rem] md:text-[8rem] text-orange-400 leading-[35px] md:leading-[60px]'>Stuffer</p>
                  </div>
                  <div className="w-full md:w-1/2 px-8 pt-4">
                      <p className='text-xs md:text-lg text-white'>Born in a backyard, carried by the athletes that light its stage each summer… Light the sign, it's Gullet Stuffer time!
                      We are an annual competitive eating contest based in Seattle. All profits from events go to food-based aid organizations in the area.</p>
                      <br/>
                      <p className='text-xs md:text-lg text-orange-400'>Current Home Field: Central District Grocery Outlet Bargain Market</p>
                      <br/>
                      <p className='text-xs md:text-lg text-white'>Total Competitors (All Time): 84</p>
                      <br/>
                      <p className='text-xs md:text-lg text-orange-400'>Eggos Eliminated in 10 mins @ Gullet Stuffer V: 327</p>
                      <br/>
                      <p className='text-xs md:text-lg text-white'>Next Event: Gullet Stuffer VI - July 13th, 2024</p>
                  </div>
                </div>
                <GulletStufferSubscribe/>
            <footer className='h-24 bg-black'></footer>
          </div>
        );
    }
}

export default HomePage;