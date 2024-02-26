import React from 'react';

class GS6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main class="w-full pt-28 md:pt-40 bg-black">
                <section class="md:flex w-11/12 bg-neutral-800 mx-auto rounded-xl perspective">
                    <div class="md:w-1/2 ">
                        <img class="w-full h-full rounded-l-xl " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS6/event_announcement.jpg" alt="event_announcement"></img>
                    </div>
                    <div class="md:w-1/2 md:pt-10">
                        <p className="text-orange-400 text-center text-4xl md:text-6xl 2xl:text-8xl">Gullet Stuffer 6</p>
                        <p className="text-white text-center text-xl 2xl:text-3xl my-4">Join us for the sixth annual Gullet Stuffer event!</p>
                        <p className="text-orange-400 text-xl 2xl:text-3xl ml-6 mt-4 md:mt-8 2xl:mt-24">Date and Time</p>
                        <p className="text-white text-sm 2xl:text-xl ml-6 mt-2">Saturday, July 13th 2024</p>
                        <p className="text-white text-sm 2xl:text-xl ml-6 mt">6pm to 10pm</p>
                        <div className="w-full flex mt-6 pb-6 md:pb-0 md:mt-12">
                            <div className="w-1/2">
                                <p className="text-orange-400 text-xl 2xl:text-3xl ml-6">Location</p>
                                <p className="text-white text-sm 2xl:text-xl ml-6">Grocery Outlet Bargain Market</p>
                                <p className="text-white text-sm 2xl:text-xl ml-6">1126 Martin Luther King Way Jr</p>
                                <p className="text-white text-sm 2xl:text-xl ml-6">Seattle, WA 98122</p>
                            </div>
                            <div className="w-1/2">
                                <p className="text-orange-400 text-xl 2xl:text-3xl ml-6">Featured Food</p>
                                <p className="text-white text-sm 2xl:text-xl ml-6">Mini Donuts</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-16 md:mt-28">
                    <div class="w-full">
                        <div className="top-24 text-4xl md:text-6xl px-auto w-full">
                          <p className="text-orange-400 text-center">Gullet Stuffer Resolution</p>
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
                </section>
                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default GS6;