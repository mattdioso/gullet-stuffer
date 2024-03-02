import React from 'react';

import GSYear from '../years/GSYear';
import { FaBootstrap } from 'react-icons/fa';
import { TimelineScroller } from '../components/timeline_scroller';
import { years_data } from '../data/years';
import ContestantProfile from '../components/contestant_profile';
import Reveal from '../components/utils/reveal';

class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null
        };
    }
    
    handlePageChange = number => {
        this.setState({ currentPage: number });
    }

    handleBeforePageChange = number => {
        console.log(number);
    }

    render() {
        // const pageNumbers = this.getPagesNumbers();
        return (
            <section>
                <Reveal>
                <div className="block pt-28 md:pt-72 w-full" >
                
                    <div className="top-24 text-4xl md:text-7xl px-auto w-full">
                      <p className="text-orange-400 text-center">Seattle's Finest</p>
                      <p className="text-white text-center">Competitive Eating Contest</p>

                      <p className="text-orange-400 text-center">Through the Years</p>
                    </div>
                    <div className="top-64 text-md md:text-xl px-auto w-full">
                        <p className="text-white text-center">We've had a lot of fun throughout the years.</p>
                        <p className="text-white text-center">Scroll through and see for yourself!</p>
                    </div>
                </div>
                </Reveal>
                {
                    years_data.map((year, i) => (
                        <GSYear year={year} i={i}/>
                        
                    ))
                }
                <footer className='h-36 bg-black'></footer>
            </section>

            
        );
    }
}

export default EventsPage;