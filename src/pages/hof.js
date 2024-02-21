import React from 'react';
import ContestantCard from '../components/contestant_card';
import ContestantProfile from '../components/contestant_profile';
import jaybee from '../imgs/ContestantCards/jaybee_spicy.jpg';
import max from '../imgs/ContestantCards/maxgo.jpg';
import legge from '../imgs/ContestantCards/legge2.jpg';
import { hof_data } from '../data/hof';


class HallOfFame extends React.Component {
    constructor(props) {
        super(props);
    }
    //grid grid-cols-hof gap-6
    //bg-gradient-to-r from-indigo-800 to-orange-800
    
    render() {
        let pros = hof_data[0]['pro_champs'];
        let amateurs = hof_data[0]['amateur_champs'];
        let notable_competitors = hof_data[0]['notable_competitors'];
        return (
            
            <div className="block absolute no-scroll justify-center items-center w-full h-full pt-36 bg-black overflow-y-scroll">
                <section className='relative mb-16 md:mb-0 md:my-16 2xl:w-4/5 mx-auto'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-6 md:col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-base md:text-xl'>Past Pro Champs</h3>
                        </div>
                        <div className='col-span-6 md:col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-11/12 flex gap-4 md:justify-center mx-auto overflow-x-auto md:overflow-hidden'>
                        {
                            pros.map((pro) => (
                                
                                <ContestantCard name={`${pro.firstName} ${pro.lastName}`} division="Profesional" title="" desc={`${pro.result} ${pro.food}`} pic={`${pro.img}`}></ContestantCard>
                            ))
                        }

                    </div>
                </section>
                <section className='relative my-16 2xl:w-4/5 mx-auto'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-7 md:col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-base md:text-xl'>Past Amateur Champs</h3>
                        </div>
                        <div className='col-span-5 md:col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-11/12 flex gap-4 md:justify-center mx-auto overflow-x-auto md:overflow-hidden'>
                        {
                            amateurs.map((amateur) => (
                                <ContestantCard name={`${amateur.firstName} ${amateur.lastName}`} division="Amateur" title="" desc={`${amateur.result} ${amateur.food}`} pic={`${amateur.img}`}></ContestantCard>
                            ))
                        }

                    </div>
                </section>
                <section className='relative my-16 2xl:w-4/5 mx-auto'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-7 md:col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-base md:text-xl'>Notable Competitors</h3>
                        </div>
                        <div className='col-span-5 md:col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-11/12 flex gap-4 md:justify-center mx-auto overflow-x-auto md:overflow-hidden'>
                        {
                            notable_competitors.map((comp) => (
                                <ContestantCard name={`${comp.firstName} ${comp.lastName}`} division={`${comp.division}`} title={`${comp.title}`} desc={`${comp.desc}`} pic={`${comp.img}`}/>
                            ))
                        }

                    </div>
                </section>
                <section className='relative my-16 2xl:w-4/5 mx-auto'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-6 md:col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-base md:text-xl'>Iconic Moments</h3>
                        </div>
                        <div className='col-span-6 md:col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-11/12 flex gap-4 md:justify-center mx-auto overflow-x-auto md:overflow-hidden'>
                        <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                    </div>
                </section>
                <footer className='h-24 bg-black'></footer>

            </div>
        );
    }
}

export default HallOfFame;