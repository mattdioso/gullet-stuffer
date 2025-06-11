import React from 'react';
import GulletStufferForm from '../components/gulletstuffer_form';
import GulletStufferSubscribe from '../components/mailchimp_subscribe';
import { FaExternalLinkAlt } from 'react-icons/fa'

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

          <p className="text-gold text-center">Competitive Eating Contest</p>
        </div>
        <div className="visible h-fit w-11/12 flex pt-4 md:pt-0 m-auto md:invisible md:w-0 md:h-0 md:opacity-0">
          <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto perspective border border-gray-600 rounded-xl">
            <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/homepage.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-0 md:w-10/12 md:mx-auto flex md:pt-12 md:visible invisible md:h-fit opacity-0 md:opacity-100 md:z-50">
          <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto perspective border border-gray-600 rounded-xl">
            <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/homepage.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="md:flex w-full mt-6">
          <div className="w-10/12 md:w-5/12 2xl:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 text-center md:text-left md:pl-20 py-auto mx-auto pb-12">
            <p className='text-7xl md:text-9xl text-white mx-auto'>Gullet</p>
            <p className='text-[4.5rem] md:text-[7.5rem] text-gold leading-[35px] md:leading-[60px]'>Stuffer</p>
          </div>
          <div className="w-full md:w-7/12 2xl:w-2/3 px-8 pt-4">
            <p className='text-xs md:text-base font-heavitas text-white'>A neon orange glow fills the Grocery Outlet parking lot... It's time for Gullet Stuffer! This annual eating contest
              supports local food aid, bringing the community together with every bite.</p>
            <br />
            <p className='text-xs md:text-base font-heavitas text-gold'>Current Home Field: Central District Grocery Outlet Bargain Market</p>
            <br />
            <div className='md:flex w-full'>
              <div className="w-full md:w-2/3">
                <p className='text-xs md:text-base font-heavitas text-white'>Total Competitors (All Time): 95</p>
                <br />
                <p className='text-xs md:text-base font-heavitas text-gold'>Mini Donuts Eliminated in 10 mins @ Gullet Stuffer VI: 922</p>
                <br />
                <p className='text-xs md:text-base font-heavitas text-white'>Next Event: Gullet Stuffer VII - July 12th, 2025</p>
                <br />
                <p className='text-xs md:text-base font-heavitas text-white'>Money Raised for Seattle Community Fridge: $13,200</p>
              </div>
              <div className="w-full h-16 md:h-20 md:w-2/3 mt-6 md:mt-0">
                <a className="w-full h-[54px] mx-auto" href="https://docs.google.com/forms/d/e/1FAIpQLSdv_X2rBRE_VGDmpYoO_wcgwBMkBGeoc_ZH0MZksF0YcFZm-A/viewform" target="_blank">
                  <div className="w-1/2 md:w-1/2 h-full md:h-full bg-gold flex mx-auto place-content-center rounded-2xl my-auto">
                    <p className="text-black my-auto text-sm md:text-2xl 2xl:text-2xl text-center">Join the Team!</p>
                    <FaExternalLinkAlt className="my-auto w-10" color="black" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <GulletStufferSubscribe />
        <footer className='h-24 bg-black'></footer>
      </div>
    );
  }
}

export default HomePage;