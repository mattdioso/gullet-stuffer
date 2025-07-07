import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { gs7_contestants } from "../data/gs7_contestants"
import AthleteCard from '../components/athlete_card';
import { motion } from 'framer-motion';

class GS7 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="w-full pt-28 md:pt-40 bg-black">
                <section class="w-11/12 bg-neutral-800 mx-auto rounded-xl perspective">
                    <div className="md:flex mt-6 sm:mt-0">
                        <div class="md:w-1/2">
                            <img className="rounded-l-xl" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/gs7_poster-1.jpg" alt="poster" />
                        </div>
                        <div class="md:w-1/2 md:pt-10 md:pl-1">
                            <p className="text-gold text-center text-4xl md:text-6xl 2xl:text-8xl">Gullet Stuffer VII</p>
                            <p className="text-white text-center text-xl 2xl:text-3xl my-4">Join us for our seventh annual live event!</p>
                            <img className='h-40 w-40 mx-auto' src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/logo%20fire.png" alt="GS7logo"></img>
                            <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-4">
                                <div className="w-1/2 text-center">
                                    <p className="text-gold text-2xl 2xl:text-4xl ml-6 mt-4 md:mt-8 2xl:mt-3">When</p>
                                    <p className="text-white text-xl 2xl:text-2xl ml-6 mt-2">Saturday, July 12th 2025</p>

                                </div>
                                <div className="w-1/2 text-center">
                                    <p className="text-gold text-2xl 2xl:text-4xl mt-4 md:mt-8 2xl:mt-3">Where</p>
                                    <p className="text-white text-xl 2xl:text-2xl">Grocery Outlet Bargain Market</p>
                                    <p className="text-white text-xl 2xl:text-2xl">1126 MLK Jr Way</p>
                                    {/* <p className="text-white text-xl 2xl:text-xl ml-6">1126 Martin Luther King Jr Way</p> */}
                                    <p className="text-white text-xl 2xl:text-2xl">Seattle, WA 98122</p>
                                </div>
                            </div>
                            <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-6">

                                <div className="w-full md:w-1/2 text-center mx-auto">
                                    <p className="text-gold text-2xl 2xl:text-4xl ml-6">Featured Food</p>
                                    <p className="text-white text-xl 2xl:text-2xl ml-6">Gyoza! Check out the voting results below!</p>
                                </div>


                                {/* <div className="w-full place-content-center mt-6">
                            <img className="w-3/4 mx-auto" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/logos/GS1_logo.png" alt="logo"></img>
                        </div> */}
                                <div className="w-full md:w-1/2 text-center mx-auto">
                                    <div className="w-full md:mt-6 text-center">
                                        <p className="text-gold md:ml-6 text-xl 2xl:text-3xl">Want to volunteer?</p>
                                    </div>
                                    <div className="w-full mt-4 place-content-center space-x-12 pb-6">
                                        <a className="block w-3/4 sm:w-2/3 h-[60px] mx-auto" href="https://docs.google.com/forms/d/e/1FAIpQLSdv_X2rBRE_VGDmpYoO_wcgwBMkBGeoc_ZH0MZksF0YcFZm-A/viewform" target="_blank">
                                            <div className="w-3/4 md:w-2/3 h-full md:h-full bg-gold flex mx-auto place-content-center rounded-2xl my-auto">
                                                <p className="text-black my-auto text-sm md:text-lg 2xl:text-xl text-center">Apply here!</p>
                                                <FaExternalLinkAlt className="my-auto w-10" color="black" />
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full text-center mx-auto mb-8">
                                <a className="block w-3/4 sm:w-2/3 h-[60px] mx-auto" href="https://go.dojiggy.io/gyoza/Campaign/Details" target="_blank">
                                    <div className="w-3/4 md:w-2/3 h-full md:h-full bg-gold flex mx-auto place-content-center rounded-2xl my-auto">
                                        <p className="text-black my-auto text-sm md:text-xl 2xl:text-xl text-center">Support an Athlete!</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <motion.div layout transition={{ duration: 0.4, delay: 0.2 }} style={{ height: "fit-content" }} className="w-11/12 mx-auto rounded-xl mt-4 border border-white">
                    <h2 className="text-gold ml-4 text-3xl">Gullet Stuffer 7 Amateurs</h2>
                    <div className="flex flex-wrap w-11/12 sm:space-x-6 mx-auto justify-center my-4">
                        {gs7_contestants.amateurs.map((contestant) => (
                            <AthleteCard name={contestant.name} campaignUrl={contestant.campaignUrl} imgUrl={contestant.img} />
                        ))}
                    </div>
                </motion.div>

                <motion.div layout transition={{ duration: 0.4, delay: 0.2 }} style={{ height: "fit-content" }} className="w-11/12 mx-auto rounded-xl mt-4 border border-white">
                    <h2 className="text-gold ml-4 text-3xl">Gullet Stuffer 7 Professionals</h2>
                    <div className="flex flex-wrap w-11/12 sm:space-x-6 mx-auto justify-center my-4">
                        {gs7_contestants.pros.map((contestant) => (
                            <AthleteCard name={contestant.name} campaignUrl={contestant.campaignUrl} imgUrl={contestant.img} />
                        ))}
                    </div>
                </motion.div>

                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default GS7;