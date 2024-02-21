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
                <div className='md:w-1/2'>
                    <div className='md:pl-28 text-center md:text-left'>
                        <p className='text-7xl md:text-9xl text-white'>Gullet</p>
                        <p className='text-7xl md:text-9xl text-orange-400'>Stuffer</p>
                    </div>

                    <div className='md:pl-28 pt-8 w-full text-center md:text-left'>
                        <div className='w-full 2xl:w-4/5'>
                            <p className='text-xs md:text-md text-white'>Born in a backyard, carried by the athletes that light its stage each summer… Light the sign, it's Gullet Stuffer time!
                            We are an annual competitive eating contest based in Seattle. All profits from events go to food-based aid organizations in the area.</p>
                            <br/>
                            <p className='text-xs md:text-md text-orange-400'>Current Home Field: Central District Grocery Outlet Bargain Market</p>
                            <br/>
                            <p className='text-xs md:text-md text-white'>Total Competitors (All Time): 84</p>
                            <br/>
                            <p className='text-xs md:text-md text-orange-400'>Eggos Eliminated in 10 mins @ Gullet Stuffer V: 327</p>
                            <br/>
                            <p className='text-xs md:text-md text-white'>Next Event: Gullet Stuffer VI - July 13th, 2024</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 my-auto'>
                    <Carousel/>
                </div>
                
            </section>
        )
    }
}

export default AboutPage;