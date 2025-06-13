import React, { useState } from "react";

import { NavLink as Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {

    let [open, setOpen] = useState(false);
    return (
        <div className="w-full">
            <section className="fixed w-full mx-auto bg-black p-4 flex items-center z-50">
                <div className="md:flex items-center justify-between bg-black">
                    <div className="items-center p-2">
                        {/* <a className='w-28 h-20 md:w-20' href="https://www.gulletstuffer.com"><img className="w-28 h-20 md:w-20" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/logos/Gullet-Stuffer-II.png" alt="logo"/></a> */}
                        <a className='w-28 h-20 md:w-20' href="https://www.gulletstuffer.com"><img className="w-28 h-26 md:w-28" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/logo%20fire.png" alt="logo" /></a>
                    </div>
                </div>
                <div className="w-full md:hidden">

                </div>
                <button id="hamburger-button" onClick={() => setOpen(!open)} className={`text-3xl md:hidden text-white cursor-pointer relative w-8 h-8 ${open ? "hidden" : "block"}`}>
                    <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 
                    before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before: duration-500 before:-translate-x-4 before:-translate-y-3 
                    after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after: duration-500 after:-translate-x-4 after:translate-y-3">

                    </div>
                </button>
                <button id="close-button" onClick={() => setOpen(!open)} className={`text-5xl md:hidden text-white cursor-pointer relative w-16 h-16 ${open ? "block" : "hidden"}`}>
                    <div>
                        &times;
                    </div>
                </button>
                <nav className="hidden w-full md:block space-x-8 text-xl">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-0 gap-8 w-full">
                        <Link to="/" className="md:ml-8 md:my-0 my-7 text-gray-500 hover:text-gray-700 focus:text-gray-700">Home</Link>
                        <Link to="/about" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">About</Link>
                        <Link to="/events" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">History</Link>
                        <Link to="/gs7" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">GSVII</Link>
                        <Link to="/hof" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700 ">Hall of Fame</Link>
                        <Link to="/partners" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">Community</Link>
                        {/* <Link to="/merch" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">Merch</Link> */}
                    </ul>
                </nav>
                <div className="hidden md:flex md:flex-row-reverse md:gap-2">
                    <SocialIcon network="facebook" url="https://www.facebook.com/gulletstuffer" />
                    <SocialIcon network="instagram" url="https://www.instagram.com/gulletstuffer/" />
                    <SocialIcon network="youtube" url="http://www.youtube.com/@gulletstufferz" />
                </div>
            </section>
            <section id="mobile-menu" className={`absolute top-24 bg-black w-full text-4xl flex-col justify-content-center origin-top animate-open-menu z-50 ${open ? "block" : "hidden"}`}>

                <nav className="flex flex-col min-h-screen items-center py-8">
                    {/* <button id="close-button" onClick={() => setOpen(!open)} className={`text-6xl text-white self-end mt-0 px-6 ${open ? "block": "hidden"}`}>
                    &times;
                </button> */}
                    <Link to="/" onClick={() => setOpen(!open)} className="w-full text-white text-center py-6 hover:opacity-90">Home</Link>
                    <Link to="/about" onClick={() => setOpen(!open)} className="w-full text-white text-center py-6 hover:opacity-90">About</Link>
                    <Link to="/events" onClick={() => setOpen(!open)} className="w-full text-white text-center py-6 hover:opacity-90">History</Link>
                    <Link to="/gs7" onClick={() => setOpen(!open)} className="w-full text-white text-center py-6 hover:opacity-90">GSVII</Link>
                    <Link to="/hof" onClick={() => setOpen(!open)} className="w-full text-white text-center py-6 hover:opacity-90">Hall of Fame</Link>
                    <Link to="/partners" onClick={() => setOpen(!open)} className="w-full text-white text-center py-6 hover:opacity-90">Community</Link>
                    {/* <Link to="/merch" onClick={() => setOpen(!open)} className="w-full text-white text-center py-6 hover:opacity-90">Merch</Link> */}
                    <div className="md:flex md:flex-row-reverse md:gap-2 mt-8 flex flex-row-reverse gap-4">
                        <SocialIcon network="facebook" url="https://www.facebook.com/gulletstuffer" />
                        <SocialIcon network="instagram" url="https://www.instagram.com/gulletstuffer/" />
                        <SocialIcon network="youtube" url="http://www.youtube.com/@gulletstufferz" />
                    </div>
                </nav>
            </section>
        </div>
    );


};

export default Navbar;