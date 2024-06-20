import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'

class GS6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main class="w-full pt-28 md:pt-40 bg-black">
                <section class="md:flex w-11/12 bg-neutral-800 mx-auto rounded-xl perspective">
                    <div class="md:w-1/2 ">
                        <img class="w-full h-full rounded-l-xl " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/GS6_event_poster.jpeg" alt="event_announcement"></img>
                    </div>
                    <div class="md:w-1/2 md:pt-10">
                        <p className="text-[#de7090] text-center text-4xl md:text-6xl 2xl:text-8xl">Gullet Stuffer 6</p>
                        <p className="text-white text-center text-xl 2xl:text-3xl my-4">Join us for our sixth annual live event!</p>
                        <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-4">
                            <div className="w-1/2 text-center">
                                <p className="text-[#de7090] text-2xl 2xl:text-4xl ml-6 mt-4 md:mt-8 2xl:mt-24">When</p>
                                <p className="text-white text-xl 2xl:text-2xl ml-6 mt-2">Saturday, July 13th 2024</p>
                                <p className="text-white text-xl 2xl:text-2xl ml-6 mt">7pm to 10pm</p>
                            </div>
                            <div className="w-1/2 text-center">
                                <p className="text-[#de7090] text-2xl 2xl:text-4xl mt-4 md:mt-8 2xl:mt-24">Where</p>
                                <p className="text-white text-xl 2xl:text-2xl">Grocery Outlet Bargain Market</p>
                                <p className="text-white text-xl 2xl:text-2xl">1126 MLK Jr Way</p>
                                {/* <p className="text-white text-xl 2xl:text-xl ml-6">1126 Martin Luther King Jr Way</p> */}
                                <p className="text-white text-xl 2xl:text-2xl">Seattle, WA 98122</p>
                            </div>
                        </div>
                        <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-12">
                            
                            <div className="w-full md:w-1/2 text-center mx-auto">
                                <p className="text-[#de7090] text-2xl 2xl:text-4xl ml-6">Featured Food</p>
                                <p className="text-white text-xl 2xl:text-2xl ml-6">Mini Donuts, provided by The Portland Mini Donut Company</p>
                            </div>
                            
                        </div>
                        <div className="w-full place-content-center mt-6">
                            <img className="w-3/4 mx-auto" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/logos/mini_donut_Horizontal%20png%20file.png" alt="mini_donut_banner"></img>
                        </div>
                        <div className="w-full md:mt-6 text-center">
                            <p className="text-[#de7090] md:ml-6 text-xl 2xl:text-3xl">Want to Participate?</p>
                        </div>
                        <div className="w-full flex mt-4 place-content-center space-x-12 pb-6">
                            <a className="w-1/3 h-[54px]" href="https://docs.google.com/forms/d/e/1FAIpQLSdxoIUFxZy8FQ_oga8EFz-seF2dF67oov13g18pbKgNJPOJ3g/closedform" target="_blank">
                                <div className="w-full h-full bg-[#de7090] flex place-content-center rounded-2xl">
                                    <p className="text-white my-auto text-sm md:text-base text-center">Contestant Application</p>
                                    <FaExternalLinkAlt className="my-auto w-10" color="white"/>
                                </div>
                            </a>
                            <a className="w-1/3 h-[54px]" href="https://docs.google.com/forms/d/e/1FAIpQLSclZjSLQM0sYTGmc7vvsLzPWODRre0UAvr7W902W62x0sWqjA/viewform" target="_blank">
                                <div className="w-full h-full bg-[#de7090] flex place-content-center rounded-2xl">
                                    <p className="text-white my-auto text-sm md:text-base text-center">Volunteer Application</p>
                                    <FaExternalLinkAlt className="my-auto w-10" color="white"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                {/* <section className="mt-16 md:mt-28">
                    <div class="w-full">
                        <div className="top-24 text-4xl md:text-6xl px-auto w-full">
                          <p className="text-[#de7090] text-center">Gullet Stuffer Resolution</p>
                        </div>
                        <div class="w-11/12 mx-auto mt-8 border-2 border-amber-200">
                            <img className='w-3/4 h-3/4 mx-auto' src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/FinalBracket2024.png" alt="bracket"></img>
                        </div>
                        <div class="w-11/12 mx-auto mt-8">
                            <div class="bg-red-600 w-4/6 mx-auto border-2 border-amber-200">
                                <p className="text-white text-center text-xl">
                                    Gullet Stuffer fans nominated 30+ foods
                                </p>
                                <p className="text-white text-center text-xl">
                                    16 Foods were selected and seeded by their estimated popularity
                                </p>
                            </div>
                        </div>
                        <div class="w-11/12 mx-auto mt-8">
                            <img className='w-1/2 h-1/2 mx-auto' src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/FinalFourResults.png" alt="bracket"></img>
                        </div>
                        <div class="flex w-11/12 mx-auto mt-8">
                            <div class="w-1/2 mx-auto mt-8">
                                <img className='w-3/4 h-full mx-auto border-2 border-amber-200' src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/pickles.jpeg" alt="bracket"></img>
                            </div>
                            <div class="w-1/2 mx-auto mt-8">
                                <img className='w-3/4 h-full mx-auto border-2 border-amber-200' src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/pickles.jpeg" alt="bracket"></img>
                            </div>
                        </div>
                        <div class="w-11/12 mx-auto mt-8">
                            <div class="bg-red-600 w-4/6 mx-auto border-2 border-amber-200">
                                <div class="flex w-full justify-center px-auto">
                                    <p className="text-green-500 text-center text-xl">
                                        #2 Pickles &nbsp;
                                    </p>
                                    <p className="text-white text-center text-xl">
                                        faced off with &nbsp;
                                    </p>
                                    <p className="text-blue-500 text-center text-xl">
                                        #5 Mini Donuts
                                    </p>
                                </div>
                                <p className="text-white text-center text-xl">
                                    In the finale tallying more than 1000 votes!
                                </p>
                            </div>
                        </div>
                        <div class="w-11/12 mx-auto mt-8">
                            <img className='w-1/2 h-1/2 mx-auto border-2 border-amber-200' src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/minidonutannouncem.png" alt="bracket"></img>
                        </div>
                    </div>
                </section> */}
                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default GS6;