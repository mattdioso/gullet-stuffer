const EventInvite = () => {
    return (
        <div class="w-11/12 md:w-8/12 bg-neutral-800 mx-auto rounded-xl perspective mt-6">
            <div className="md:flex mt-6 sm:mt-0">

                <div class="w-full md:pt-6 md:pl-1">
                    <p className="text-gold text-center text-4xl md:text-5xl 2xl:text-5xl">Gullet Stuffer VIII</p>
                    <p className="text-white text-center text-xl 2xl:text-2xl my-4">Join us for our eighth annual live event!</p>
                    <div className="md:flex md:flex-row-reverse">
                        <div className="md:w-1/2 md:flex justify-center my-auto">
                            <img className="h-28 w-28 md:h-56 md:w-56 mx-auto md:mx-0" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/logos/GS1_logo.png" alt="logo" />
                        </div>
                        <div className="md:w-1/2 mt-6 pb-6 md:pb-0 md:mt-2">
                            <div className="text-center">
                                <p className="text-gold text-2xl 2xl:text-3xl ml-6 mt-4 md:mt-2 2xl:mt-3">When</p>
                                <p className="text-white text-xl 2xl:text-xl ml-6 mt-2">Saturday, July 11th 2026</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gold text-2xl 2xl:text-3xl mt-4 md:mt-4 2xl:mt-3">Where</p>
                                <p className="text-white text-xl 2xl:text-xl">Grocery Outlet Bargain Market</p>
                                <p className="text-white text-xl 2xl:text-xl">1126 MLK Jr Way</p>
                                <p className="text-white text-xl 2xl:text-xl">Seattle, WA 98122</p>
                            </div>
                            <div className="mt-6 pb-6 md:pb-0 md:mt-4 mb-6">
                                <div className="w-full text-center mx-auto">
                                    <p className="text-gold text-2xl 2xl:text-3xl ml-6">Featured Food</p>
                                    <p className="text-white text-xl 2xl:text-xl ml-6">Coming soon... Vote now on Instagram!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventInvite;