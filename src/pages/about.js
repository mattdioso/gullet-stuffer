import React from 'react';
import IntroVideo from '../components/intro_video';
import Carousel from '../components/carousel';
import { Car } from 'react-ionicons';
import IGFeed from '../components/ig_feed';
import { FaExternalLinkAlt } from 'react-icons/fa'
class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <section class="w-full h-screen pt-28 md:pt-36 bg-black">
                <div className="md:flex w-full">
                    <div className='md:w-1/2 md:h-1/2'>
                        <div className='md:pl-28 text-center md:text-left '>
                            <p className='text-7xl md:text-9xl text-white'>Gullet</p>
                            <p className='text-[4.5rem] md:text-[8rem] text-gold leading-[35px] md:leading-[60px]'>Stuffer</p>
                        </div>
                        <div className="w-full flex mx-auto my-auto mt-12">
                            <img class="w-9/12 h-9/12 md:ml-28 mx-auto rounded-l-xl " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/event_announcement.jpg" alt="event_announcement"></img>
                        </div>

                    </div>
                    <div className='md:w-1/2 my-auto'>
                        {/* <Carousel/> */}
                        <div className='mt-4 md:mt-0 md:pl-8 px-4 md:px-0 md:pr-8 pt-0 w-full text-center md:text-left'>
                            <div className='w-full 2xl:w-4/5'>
                                <p className='text-xs md:text-base 2xl:text-xl font-heavitas text-white'>It was set to be a one-off event. A gathering of friends to see who could do the best Matt Stonie impersonation... But it wasn't enough!</p>
                                <br />
                                <p className='text-xs md:text-base 2xl:text-xl font-heavitas text-gold'>Brought back by popular demand and here to stay, this infamous annual event serves as a fundraiser, community gathering, and showcase of local eating talent.</p>
                                <br />
                                <p className='text-xs md:text-base 2xl:text-xl font-heavitas text-white'>Gullet Stuffer fundraising efforts have raised a combined total of over $20,000 for local food-based organizations, entirely powered by small donations. Our primary beneficiary is Seattle Community Fridge, a mutual-aid group that provides permanent fridge locations for those in need.</p>
                            </div>
                            <div className="w-full 2xl:w-4/5 mt-12">
                                <a href="https://www.seattlecommunityfridge.org/" target="_blank"><img class="mx-auto rounded-xl " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/SCFbanner_new.png" alt="scf_banner"></img></a>
                            </div>

                        </div>
                        <div className="w-full text-center mx-auto mt-8">
                            <a className="block w-3/4 sm:w-2/3 h-[60px] mx-auto" href="https://www.seattlecommunityfridge.org/" target="_blank">
                                <div className="w-3/4 md:w-2/3 h-full md:h-full bg-gold flex mx-auto place-content-center rounded-2xl my-auto">
                                    <p className="text-black my-auto text-sm md:text-xl 2xl:text-xl text-center">Check them out here</p>
                                    <FaExternalLinkAlt className="my-auto w-10" color="black" />
                                </div>
                            </a>
                        </div>
                        <div className="mt-4 md:mt-0 md:pl-8 px-4 md:px-0 md:pr-8 pt-0 w-full 2xl:w-4/5 text-center">
                            <br />
                            <p className='text-sm md:text-base 2xl:text-xl font-heavitas text-gold'>Gullet Stuffer is a 501c3 non-profit organization. EIN: 99-2709550</p>
                        </div>
                    </div>
                </div>

                <IGFeed />

                <footer className='h-36 w-full bg-black'></footer>
            </section>
        )
    }
}

export default AboutPage;