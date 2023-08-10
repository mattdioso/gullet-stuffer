import React, { useRef, useState } from "react";
import { FaBars } from 'react-icons/fa';
import logo from '../imgs/Gulletmaindesigns/Gullet-Stuffer-II.png';
import { NavLink as Link } from "react-router-dom";
import { MenuOutline } from 'react-ionicons';
import { IonIcon } from 'react-ion-icon';

const Navbar = () => {

    let [open, setOpen] = useState(false);
    return (
        <div className="fixed w-full h-24 items-center justify-between
             bg-black opacity-100 shadow-lg z-40  left-0">
            <div className="md:flex items-center justify between bg-black">



                {/* <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden w-12 h-12">
                    <ion-icon name={open ? 'close': 'menu'}></ion-icon>
                </div> */}
                    <div className="items-center p-2">
                        <img className="w-16 h-16" src={logo} />
                    </div>
                <div className="duration-500 absolute left-0 w-full md:flex items-center px-12 ">
                    
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-0 gap-8 w-10/12">
                        {/* <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'left-20 ':'left-[-490px]'}`}> */}
                        <Link to="/" className="md:ml-8 md:my-0 my-7 text-gray-500 hover:text-gray-700 focus:text-gray-700">Home</Link>
                        <Link to="/about" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">About</Link>
                        <Link to="events" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">Events</Link>
                        <Link to="/hof" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">Hall of Fame</Link>
                        <Link to="/sponsors" className="md:ml-4 md:my-0 my-7 p-2 text-gray-500 hover:text-gray-700 focus:text-gray-700">Sponsors</Link>
                    </ul>
                
                <div className="navbar-right">
                    <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="m-2 inline-block p-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out instagram-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </button>
                    <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="m-2 inline-block p-3 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out facebook-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                    </button>
                    {/* <MenuOutline className="md:hidden" name="menu" click={onToggleMenu} color={'#ffffff'} height="20px" width="20px"/> */}
                </div>
                </div>
            </div>
        </div>
    );


};

export default Navbar;