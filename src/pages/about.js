import React from 'react';
import IntroVideo from '../components/intro_video';
import video from '../imgs/TestVideo.mp4';
import Carousel from '../components/carousel';
import { Car } from 'react-ionicons';
class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        
        return (
            <section class="w-full h-screen md:flex pt-28 md:pt-36 bg-black">
                <div className='md:w-1/2 md:h-1/2'>
                    <div className='md:pl-28 text-center md:text-left '>
                        <p className='text-7xl md:text-9xl text-white'>Gullet</p>
                        <p className='text-[4.5rem] md:text-[8rem] text-orange-400 leading-[35px] md:leading-[60px]'>Stuffer</p>
                    </div>
                    <div className="w-full flex mx-auto my-auto mt-12">
                        <img class="w-9/12 h-9/12 md:ml-28 mx-auto rounded-l-xl " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/event_announcement.jpg" alt="event_announcement"></img>
                    </div>
                    
                </div>
                <div className='md:w-1/2 my-auto'>
                    {/* <Carousel/> */}
                    <div className='mt-4 md:mt-0 md:pl-8 px-4 md:px-0 md:pr-8 pt-0 w-full text-center md:text-left'>
                        <div className='w-full 2xl:w-4/5'>
                            <p className='text-xs md:text-base font-heavitas text-white'>A neon orange glow fills the Grocery Outlet parking lot... It's time for Gullet Stuffer! This annual eating contest
                            supports local food aid, bringing the community together with every bite.</p>
                            <br/>
                            <p className='text-xs md:text-base font-heavitas text-orange-400'>Current Home Field: Central District Grocery Outlet Bargain Market</p>
                            <br/>
                            <p className='text-xs md:text-base font-heavitas text-white'>Total Competitors (All Time): 84</p>
                            <br/>
                            <p className='text-xs md:text-base font-heavitas text-orange-400'>Eggos Eliminated in 10 mins @ Gullet Stuffer V: 327</p>
                            <br/>
                            <p className='text-xs md:text-base font-heavitas text-white'>Next Event: Gullet Stuffer VI - July 13th, 2024</p>
                        </div>
                    </div>
                </div>
                <footer className='h-36 bg-black'></footer>
            </section>
        )
    }
}

export default AboutPage;