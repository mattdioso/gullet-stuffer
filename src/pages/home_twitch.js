import React from 'react';
import GulletStufferForm from '../components/gulletstuffer_form';
import GulletStufferSubscribe from '../components/mailchimp_subscribe';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

class HomeTwitchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

      }

      
    }


    render() {
        return (
          <div className="block w-full h-full overflow-y-scroll">
            
                <div className="mt-32 md:top-24 text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-auto w-full">
                  <p className="text-white text-center">Seattle's Finest</p>
                  
                  <p className="text-orange-400 text-center">Competitive Eating Contest</p>
                </div>
                
                <div className="w-11/12 md:w-11/12 mx-auto border border-white rounded-md mt-4 p-2 md:pt-12 md:h-fit md:z-50">
                  {/* <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto perspective border border-gray-600 rounded-xl">
                      <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepagevideo.mp4" type="video/mp4"/>
                  </video> */}
                  <ReactTwitchEmbedVideo channel="gulletstuffer" layout="video-with-chat" width="100%" height="480"/>
                </div>
                <div className="md:flex w-full mt-6">
                  <div className="w-10/12 md:w-5/12 2xl:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 text-center md:text-left md:pl-20 py-auto mx-auto pb-12">
                    <p className='text-7xl md:text-9xl text-white mx-auto'>Gullet</p>
                    <p className='text-[4.5rem] md:text-[7.5rem] text-orange-400 leading-[35px] md:leading-[60px]'>Stuffer</p>
                  </div>
                  <div className="w-full md:w-7/12 2xl:w-2/3 px-8 pt-4">
                      <p className='text-xs md:text-base font-heavitas text-white'>A neon orange glow fills the Grocery Outlet parking lot... It's time for Gullet Stuffer! This annual eating contest
                            supports local food aid, bringing the community together with every bite.</p>
                      <br/>
                      <p className='text-xs md:text-base font-heavitas text-orange-400'>Current Home Field: Central District Grocery Outlet Bargain Market</p>
                      <br/>
                      <div className='md:flex w-full'>
                        <div className="w-full md:w-2/3">
                          <p className='text-xs md:text-base font-heavitas text-white'>Total Competitors (All Time): 84</p>
                          <br/>
                          <p className='text-xs md:text-base font-heavitas text-orange-400'>Eggos Eliminated in 10 mins @ Gullet Stuffer V: 327</p>
                          <br/>
                          <p className='text-xs md:text-base font-heavitas text-white'>Next Event: Gullet Stuffer VI - July 13th, 2024</p>
                        </div>
                        <div className="w-full h-16 md:h-20 md:w-2/3 mt-6 md:mt-0">
                          <a className="w-full h-[54px] mx-auto" href="https://docs.google.com/forms/d/e/1FAIpQLSdxoIUFxZy8FQ_oga8EFz-seF2dF67oov13g18pbKgNJPOJ3g/closedform" target="_blank">
                                <div className="w-1/2 md:w-1/2 h-full md:h-full bg-orange-400 flex mx-auto place-content-center rounded-2xl my-auto">
                                    <p className="text-white my-auto text-sm md:text-3xl 2xl:text-3xl text-center">Apply NOW</p>
                                    <FaExternalLinkAlt className="my-auto w-10" color="white"/>
                                </div>
                            </a>
                        </div>
                      </div>
                  </div>
                </div>
                <GulletStufferSubscribe/>
            <footer className='h-24 bg-black'></footer>
            
          </div>
        );
    }
}

export default HomeTwitchPage;