import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'

class GS7 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="w-full pt-28 md:pt-40 bg-black">
                {/* <div className="flex">
                    <div className="flex mx-auto">
                        <img className="winner-left w-1/2" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/AthleteSquares/2024%20amateurs/george_win.jpg" alt="event_announcement">
                        </img>
                        <img className="winner-right w-1/2" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/AthleteSquares/2024%20pros/dee_win.jpg" alt="event_announcement">
                        </img>
                        </div>
                        
                    </div> */}
                <section class="w-11/12 bg-neutral-800 mx-auto rounded-xl perspective">
                    <div className="md:flex mt-6 sm:mt-0">
                        <div class="md:w-1/2">
                            <video autoPlay loop muted playsInline id='intro_video' className="object-bottom m-auto perspective border border-gray-600 rounded-xl">
                                <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/gyozawins.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div class="md:w-1/2 md:pt-10 md:pl-1">
                            <p className="text-orange-400 text-center text-4xl md:text-6xl 2xl:text-8xl">Gullet Stuffer VII</p>
                            <p className="text-white text-center text-xl 2xl:text-3xl my-4">Join us for our seventh annual live event!</p>
                            <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-4">
                                <div className="w-1/2 text-center">
                                    <p className="text-orange-400 text-2xl 2xl:text-4xl ml-6 mt-4 md:mt-8 2xl:mt-24">When</p>
                                    <p className="text-white text-xl 2xl:text-2xl ml-6 mt-2">Saturday, July 12th 2025</p>

                                </div>
                                <div className="w-1/2 text-center">
                                    <p className="text-orange-400 text-2xl 2xl:text-4xl mt-4 md:mt-8 2xl:mt-24">Where</p>
                                    <p className="text-white text-xl 2xl:text-2xl">Grocery Outlet Bargain Market</p>
                                    <p className="text-white text-xl 2xl:text-2xl">1126 MLK Jr Way</p>
                                    {/* <p className="text-white text-xl 2xl:text-xl ml-6">1126 Martin Luther King Jr Way</p> */}
                                    <p className="text-white text-xl 2xl:text-2xl">Seattle, WA 98122</p>
                                </div>
                            </div>
                            <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-12">

                                <div className="w-full md:w-1/2 text-center mx-auto">
                                    <p className="text-orange-400 text-2xl 2xl:text-4xl ml-6">Featured Food</p>
                                    <p className="text-white text-xl 2xl:text-2xl ml-6">Gyoza! Check out the voting results below!</p>
                                </div>

                            </div>
                            {/* <div className="w-full place-content-center mt-6">
                            <img className="w-3/4 mx-auto" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/logos/GS1_logo.png" alt="logo"></img>
                        </div> */}
                            <div className="w-full md:mt-6 text-center">
                                <p className="text-orange-400 md:ml-6 text-xl 2xl:text-3xl">Want to Participate?</p>
                            </div>
                            <div className="w-full flex mt-4 place-content-center space-x-12 pb-6">
                                <p className="text-white text-xl 2xl:text-2xl ml-6">Applications coming soon!</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/2025BracketChampionship.png" alt="bracket" />
                    </div>
                </section>

                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default GS7;