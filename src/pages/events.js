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
                <div className="block pt-72 w-full" >
                
                    <div className="top-24 text-6xl md:text-7xl px-auto w-full">
                      <p className="text-white text-center">Gullet Stuffer</p>

                      <p className="text-orange-400 text-center">Throughout the Years</p>
                    </div>
                    <div className="top-64 text-xl px-auto w-full">
                        <p className="text-white text-center">We've had a lot of fun throughout the years.</p>
                        <p className="text-white text-center">Scroll through and see for yourself!</p>
                    </div>
                </div>
                </Reveal>
                {
                    years_data.map((year, i) => (
                        <GSYear year={year} i={i}/>
                        // <section>
                        //     <div class="grid grid-cols-12 mt-96 px-36 w-full">
                        //         <div class="col-span-2 w-fit m-0">
                        //             <h2 className={i % 2 === 1 ? "text-orange-400 text-6xl" : "text-white text-6xl"}>{year.year}</h2>
                        //         </div>
                        //         <div class="col-span-10 h-[1px] w-full bg-white my-auto"></div>
                        //     </div>
                        //     <div class="block h-full">
                        //         <iframe
                        //             className="mt-12 mx-auto sm:w-[640px] sm:h-[350px]"
                        //             // width="640"
                        //             // height="350"
                        //             src={year.video}
                        //             title={`Gullet Stuffer ${year.year}`}
                        //             poster="https://img.youtube.com/vi/0-7L21ZieD8/default.jpg"
                        //             frameBorder="0"
                        //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        //             allowFullScreen
                        //         ></iframe>
                        //     </div>
                        //     <div className="grid grid-cols-5 gap-2 h-full px-36">
                        //         <div class="col-span-1">
                        //             <ContestantProfile comp={year.competitors[0]} />
                        //         </div>
                        //         <div class="col-span-1">
                        //             <ContestantProfile comp={year.competitors[2]} />
                        //         </div>
                        //         <div class="col-span-1">
                        //             <ContestantProfile comp={year.competitors[3]} />
                        //         </div>
                        //         <div class="col-span-1">
                        //             <ContestantProfile comp={year.competitors[4]} />
                        //         </div>
                        //         <div class="col-span-1">
                        //             <ContestantProfile comp={year.competitors[5]} />
                        //         </div>
                        //     </div>
                        // </section>
                    ))
                }
                <footer className='h-24 bg-black'></footer>
            </section>
            // <TimelineScroller
            //     pageOnChange={this.handlePageChange}
            //     onBeforePageScroll={this.handleBeforePageChange}
            //     customPageNumber={this.state.currentPage}>
            //     {/* <GSYear year='2018'/>
            //     <GSYear year='2019'/>
            //     <GSYear year='2021'/>
            //     <GSYear year='2022'/> */}
            //     {
            //         years_data.map((year) => (
            //             <GSYear year={year} />
            //         ))
            //     }
            // </TimelineScroller>
            
        );
    }
}

export default EventsPage;