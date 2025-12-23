import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';


class GS8 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="w-full pt-28 md:pt-40 bg-black">
                <section class="w-11/12 bg-neutral-800 mx-auto rounded-xl perspective">
                    <div className="md:flex mt-6 sm:mt-0">
                        <div class="md:w-1/2">
                            <img className="rounded-t-xl md:rounded-l-xl" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/cool_imgs/stuffer-308.jpg" alt="poster" />
                        </div>
                        <div class="md:w-1/2 md:pt-6 md:pl-1">
                            <p className="text-gold text-center text-4xl md:text-5xl 2xl:text-5xl">Gullet Stuffer VIII</p>
                            <p className="text-white text-center text-xl 2xl:text-2xl my-4">Join us for our eighth annual live event!</p>
                            <img className='h-40 w-40 mx-auto' src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/logos/GS1_logo.png" alt="GSlogo"></img>
                            <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-2">
                                <div className="w-1/2 text-center">
                                    <p className="text-gold text-2xl 2xl:text-3xl ml-6 mt-4 md:mt-8 2xl:mt-3">When</p>
                                    <p className="text-white text-xl 2xl:text-xl ml-6 mt-2">Saturday, July 11th 2026</p>

                                </div>
                                <div className="w-1/2 text-center">
                                    <p className="text-gold text-2xl 2xl:text-3xl mt-4 md:mt-8 2xl:mt-3">Where</p>
                                    <p className="text-white text-xl 2xl:text-xl">Grocery Outlet Bargain Market</p>
                                    <p className="text-white text-xl 2xl:text-xl">1126 MLK Jr Way</p>
                                    {/* <p className="text-white text-xl 2xl:text-xl ml-6">1126 Martin Luther King Jr Way</p> */}
                                    <p className="text-white text-xl 2xl:text-xl">Seattle, WA 98122</p>
                                </div>
                            </div>
                            <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-6">

                                <div className="w-full md:w-1/2 text-center mx-auto">
                                    <p className="text-gold text-2xl 2xl:text-3xl ml-6">Featured Food</p>
                                    <p className="text-white text-xl 2xl:text-xl ml-6">Coming soon... Vote in January!</p>
                                </div>


                                {/* <div className="w-full place-content-center mt-6">
                            <img className="w-3/4 mx-auto" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/logos/GS1_logo.png" alt="logo"></img>
                        </div> */}

                            </div>
                            
                        </div>
                    </div>
                </section>
                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default GS8;