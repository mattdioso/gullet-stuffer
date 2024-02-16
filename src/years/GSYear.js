import React from 'react';
import haiming from '../imgs/GulletStufferONEstills/jaybee_hype1.png';
import jaybee from '../imgs/AthleteSquares/athletesquare3.png';
import ContestantProfile from '../components/contestant_profile';
import Accordion from '../components/accordion';
import Reveal from '../components/utils/reveal';

class GSYear extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let info = {
            '2018': 'https://www.youtube.com/embed/0-7L21ZieD8',
            '2019': 'https://www.youtube.com/embed/W9rzDrwubG0',
            '2021': 'https://www.youtube.com/embed/kot5BXUPZJg',
            '2022': 'https://www.youtube.com/embed/fR5OlKENIUM',
            '2023': 'https://www.youtube.com/embed/Up799qwivC8?si=6f8_bBZ3mDlMIrHl'
        }
        let year = this.props.year.year;
        let link = info[year];
        let amateurs = this.props.year['competitors'].filter(athlete => athlete.rank=="Amateur");
        let pros = this.props.year['competitors'].filter(ath => ath.rank=="Professional");

        amateurs.sort((a, b) => b.result - a.result);
        pros.sort((a, b) => b.result - a.result);

        console.log("lenght: "+ Math.floor(pros.length/2));
        return (
            <section >
                <Reveal useBar="false">
                <div class="grid grid-cols-12 mt-48 px-36 w-full">
                    <div class="col-span-2 w-fit m-0">
                        <h2 className={this.props.i % 2 === 1 ? "text-orange-400 text-6xl" : "text-white text-6xl"}>{year}</h2>
                    </div>
                    <div class="col-span-10 h-[1px] w-full bg-white my-auto"></div>
                </div>
                </Reveal>
                <Reveal useBar="false">
                <div class="block h-full">
                    <iframe
                        className="mt-12 mx-auto sm:w-[640px] sm:h-[350px] rounded-md"
                        // width="640"
                        // height="350"
                        src={link}
                        title={`Gullet Stuffer ${year}`}
                        poster="https://img.youtube.com/vi/0-7L21ZieD8/default.jpg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                </Reveal>
                <Reveal useBar="false">
                <div class="w-8/12 mx-auto mb-12">
                    <Accordion year={this.props.year}></Accordion>
                </div>
                </Reveal>
                {/* <div className={`grid grid-cols-${pros.length} w-11/12 h-48 mx-auto`}>
                    {pros.map((pro) => (
                        <div className="col-span-1">
                            <ContestantProfile comp={pro}></ContestantProfile>
                        </div>
                    ))}
                </div>
                <div className={`grid grid-cols-${amateurs.length} w-11/12 h-48 mx-auto`}>
                    {amateurs.map((amateur) => (
                        <div className="col-span-1">
                            <ContestantProfile comp={amateur}></ContestantProfile>
                        </div>
                    ))}
                </div> */}
            </section>
        //     <section className="block w-full h-full sm:flex text-gray-200">
        //         <div className="block bg-orange-100 rounded 3xl shadow-2xl my-4 mx-4 w-full h-11/12 p-4">
        //             <p className="text-2xl text-black">{year} Recap</p>
        //             <div className="w-full justify-center">
        //                 <iframe
        //                     className="my-4 mx-auto sm:w-[640px] sm:h-[350px]"
        //                     // width="640"
        //                     // height="350"
        //                     src={link}
        //                     title={`Gullet Stuffer ${year}`}
        //                     poster="https://img.youtube.com/vi/0-7L21ZieD8/default.jpg"
        //                     frameBorder="0"
        //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                     allowFullScreen
        //                 ></iframe>
        //             </div>
        //             <div className="w-full h-[47%] flex">
        //                 <div className="w-full h-full ml-2 bg-white rounded-lg shadow-2xl overflow-x-auto">
        //                     <div className="flex w-full h-1/2 mx-2 justify-evenly">
        //                         {
        //                             amateurs.map((comp) => (
        //                                 <ContestantProfile comp={comp} />
        //                             ))
        //                         }
        //                     </div>
        //                     <div className="flex w-full h-1/2 gap-2 mx-2 justify-evenly">
        //                         {
        //                             pros.map((comp) => (
        //                                 <ContestantProfile comp={comp}/>
        //                             ))
        //                         }
        //                     </div>
        //                     {/* <div className="flex w-full h-1/2">
        //                         <div className="relative w-[125px] h-[90%] py-2 mx-2">
        //                             <div className="absolute w-full h-[50px] rounded-3xl shadow-2xl justify-center">
        //                                 <img className="w-[50px] h-[50px] top-0 left-0 object-cover rounded-full" src={jaybee} alt="jaybee"></img>
        //                             </div>
        //                             <div className="absolute border-slate-950 w-full h-[90%] translate-y-6 flex justify-center items-end overflow-hidden ">
                                        
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="w-full h-1/2">

        //                     </div> */}
        //                 </div>
        //             </div>
        //         </div>
            
        // {/*<div className="block md:flex text-gray-200">
        //     <div className="block">
        //     <p className="text-2xl text-yellow-300 pt-8 pl-8">{year} Recap</p>
        //     <div className="w-1/2 pt-20 content-center">
        //       <iframe
        //         className="my-4 mx-8"
        //         width="560"
        //         height="315"
        //         src={link}
        //         title={`Gullet Stuffer ${year}`}
        //         frameBorder="0"
        //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //         allowFullScreen
        //       ></iframe>
        //     </div>
        //     </div>
        //     <div className="block w-1/2">
        //         <div className="block my-8 mx-4 h-3/5 bg-orange-100 rounded-3xl shadow-2xl">
        //             <p className="text-center text-3xl text-black">Results</p>
        //             <div className="flex px-4 w-full h-4/5">
        //                 <div className="w-1/2 border-r border-black">
        //                     <p className="text-black text-center">Amateurs</p>
        //                     <div className="line"/>
        //                     <div className={`grid h-full grid-rows-${amateurs.length}`}>
        //                         {
        //                             amateurs.map((comp) => (
        //                                 <div className="grid grid-cols-8 text-black">
        //                                     <div className="col-span-5">{comp.firstName} {comp.lastName} </div>
        //                                     <div className="col-span-2">{comp.result}</div>
        //                                     <img src={this.props.year.food_img} className="col-span-1" alt={comp.firstName}></img>
        //                                 </div>
        //                             ))
        //                         }
        //                     </div>
        //                 </div>
        //                 <div className="w-1/2 border-l border-black">
        //                     <p className="text-center text-black">Pros</p>
        //                     <div className="line"/>
        //                     <div className={`grid h-full  grid-rows-${pros.length}`}>
        //                         {
        //                             pros.map((comp) => (
        //                                 <div className="grid grid-cols-8 text-black">
        //                                     <div className="col-span-5">{comp.firstName} {comp.lastName}</div>
        //                                     <div className="col-span-2">{comp.result}</div>
        //                                     <img src={this.props.year.food_img} className="col-span-1" alt={comp.firstName}></img>
        //                                 </div>
        //                             ))
        //                         }
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="block my-8 mx-4 h-1/2 bg-orange-100 rounded-3xl shadow-2xl">
        //             <p className="text-center text-3xl text-black">Contestants</p>
        //             <div className="block w-full h-full">
        //                 <div className="block w-full h-2/5">
        //                     <p className="text-black"><u>Professionals</u></p>
        //                     <div className="flex w-full place-content-center">
        //                         {
        //                             pros.map((comp) => (
        //                                 <div className="group">
        //                                     <img src={comp.img} className="mx-2 w-16 rounded-lg" alt={comp.firstName}></img>
        //                                     <span className="player-stats group-hover:scale-100">{comp.firstName} {comp.lastName}</span>
        //                                 </div>
        //                             ))
        //                         }
                                
        //                     </div>
                            
        //                 </div>
        //                 <div className="w-full h-2/5">
        //                     <p className="text-black"><u>Amateurs</u></p>
        //                     <div className="flex w-full place-content-center">
        //                     {
        //                             amateurs.map((comp) => (
        //                                 <div className="group">
        //                                     <img src={comp.img} className="mx-2 w-14 rounded-lg" alt={comp.firstName}></img>
        //                                     <span className="player-stats group-hover:scale-100">{comp.firstName} {comp.lastName}</span>
        //                                 </div>
        //                             ))
        //                         }
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //                     </div>*/}
        //     </section>
        );
    }
}

export default GSYear;