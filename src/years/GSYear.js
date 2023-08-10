import React from 'react';
import haiming from '../imgs/GulletStufferONEstills/jaybee_hype1.png';
import jaybee from '../imgs/AthleteSquares/athletesquare3.png';
import his from '../imgs/AthleteSquares/squaretry3.png';

class GSYear extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let info = {
            '2018': 'https://www.youtube.com/embed/0-7L21ZieD8',
            '2019': 'https://www.youtube.com/embed/W9rzDrwubG0',
            '2021': 'https://www.youtube.com/embed/kot5BXUPZJg',
            '2022': 'https://www.youtube.com/embed/fR5OlKENIUM'
        }
        let year = this.props.year.year;
        let link = info[year];
        let amateurs = this.props.year['competitors'].filter(athlete => athlete.rank=="Amateur");
        let pros = this.props.year['competitors'].filter(ath => ath.rank=="Professional");

        amateurs.sort((a, b) => b.result - a.result);
        pros.sort((a, b) => b.result - a.result);

        console.log(amateurs);
        console.log(pros);
        return (
        <div className="block md:flex bg-gray-900 text-gray-200">
            <div className="block">
            <p className="text-2xl text-yellow-300 pt-8 pl-8">{year} Recap</p>
            <div className="w-1/2 pt-20 content-center">
              <iframe
                className="my-4 mx-8"
                width="560"
                height="315"
                src={link}
                title={`Gullet Stuffer ${year}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            </div>
            <div className="block w-1/2">
                <div className="block my-8 mx-4 h-2/3 bg-orange-100 rounded-3xl shadow-2xl">
                    <p className="text-center text-3xl text-black">Results</p>
                    <div className="flex px-4 w-full h-4/5">
                        <div className="w-1/2 border-r border-black">
                            <p className="text-black text-center">Amateurs</p>
                            <div className="line"/>
                            <div className="grid-rows-6">
                                {
                                    amateurs.map((comp) => (
                                        <div className="grid grid-cols-8 text-black">
                                            <div className="col-span-6 ">{comp.firstName} {comp.lastName} </div>
                                            <div className="col-span-2">{comp.result}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-1/2 border-l border-black">
                            <p className="text-center text-black">Pros</p>
                            <div className="line"/>
                            <div className="grid-cols-3 grid-rows-6">
                                {
                                    pros.map((comp) => (
                                        <div className="grid grid-cols-8 text-black">
                                            <div className="col-span-6">{comp.firstName} {comp.lastName}</div>
                                            <div className="col-span-2">{comp.result}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block my-8 mx-4 h-2/3 bg-orange-100 rounded-3xl shadow-2xl">
                    <p className="text-center text-3xl text-black">Contestants</p>
                    <div className="block w-full h-full">
                        <div className="block w-full h-2/5 bg-pink-50">
                            <p className="text-black"><u>Professionals</u></p>
                            <div className="flex w-full place-content-center">
                                {
                                    pros.map((comp) => (
                                        <div className="group">
                                            <img src={comp.img} className="mx-2 w-16 rounded-full" alt={comp.firstName}></img>
                                            <span className="player-stats group-hover:scale-100">what's up</span>
                                        </div>
                                    ))
                                }
                                
                            </div>
                            
                        </div>
                        <div className="w-full h-2/5 bg-stone-300">
                            <p className="text-black"><u>Amateurs</u></p>
                            <div className="flex w-full place-content-center">
                            {
                                    amateurs.map((comp) => (
                                        <div className="group">
                                            <img src={comp.img} className="mx-2 w-14 rounded-full" alt={comp.firstName}></img>
                                            <span className="player-stats group-hover:scale-100">what's up</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default GSYear;