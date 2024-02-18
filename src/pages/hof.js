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
                <section className='relative'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-2xl'>Past Pro Champs</h3>
                        </div>
                        <div className='col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-10/12 flex gap-4 place-content-center mx-auto'>
                        {
                            pros.map((pro) => (
                                
                                <ContestantCard name={`${pro.firstName} ${pro.lastName}`} division="Profesional" title="" desc={`${pro.result} ${pro.food}`} pic={`${pro.img}`}></ContestantCard>
                            ))
                        }
                        {/* <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/> */}
                    </div>
                </section>
                <section className='relative'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-2xl'>Past Amateur Champs</h3>
                        </div>
                        <div className='col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-10/12 flex gap-4 place-content-center mx-auto'>
                        {
                            amateurs.map((amateur) => (
                                <ContestantCard name={`${amateur.firstName} ${amateur.lastName}`} division="Amateur" title="" desc={`${amateur.result} ${amateur.food}`} pic={`${amateur.img}`}></ContestantCard>
                            ))
                        }
                        {/* <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/> */}
                    </div>
                </section>
                <section className='relative'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-2xl'>Notable Competitors</h3>
                        </div>
                        <div className='col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-10/12 flex gap-4 place-content-center mx-auto'>
                        {
                            notable_competitors.map((comp) => (
                                <ContestantCard name={`${comp.firstName} ${comp.lastName}`} division={`${comp.division}`} title={`${comp.title}`} desc={`${comp.desc}`} pic={`${comp.img}`}/>
                            ))
                        }
                        {/* <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/> */}
                    </div>
                </section>
                <section className='relative'>
                    <div className='grid grid-cols-12 w-4/5 mx-auto'>
                        <div className='col-span-3 w-fit m-0'>
                            <h3 className='text-orange-400 text-2xl'>Iconic Moments</h3>
                        </div>
                        <div className='col-span-9 h-[1px] w-full bg-white my-auto'></div>
                    </div>
                    <div className="w-10/12 mt-52 absolute left-[8%] h-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className='w-10/12 flex gap-4 place-content-center mx-auto'>
                        <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                    </div>
                </section>
                <footer className='h-24 bg-black'></footer>
                {/* <div className="block relative w-full h-72">
                    <div className="w-full h-3/4 text-orange-400">
                        <h3>Past Pro Champs</h3>
                    </div>
                    <div className="w-full h-1/4 bg-gradient-to-br from-yellow-400 to-yellow-100">
                        
                    </div>
                    <div className="flex absolute w-full h-full bg-transparent top-0 left-0">
                        <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                    </div>
                </div>
                <div className="block relative w-full h-72">
                    <div className="w-full h-3/4 text-orange-400">
                        <h3>Past Amateur Champs</h3>
                    </div>
                    <div className="w-full h-1/4 bg-gradient-to-br from-yellow-400 to-yellow-100">

                    </div>
                    <div className="flex absolute w-full h-full bg-transparent top-0 left-0">
                        <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                    </div>
                </div>
                <div className="block relative w-full h-72">
                    <div className="w-full h-3/4 text-orange-400">
                        <h3>Notable Competitors</h3>
                    </div>
                    <div className="w-full h-1/4 bg-gradient-to-br from-yellow-400 to-yellow-100">

                    </div>
                    <div className="flex absolute w-full h-full bg-transparent top-0 left-0">
                        <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                    </div>
                </div>
                <div className="block relative w-full h-72">
                    <div className="w-full h-3/4 text-orange-400">
                        <h3>Iconic Moments</h3>
                    </div>
                    <div className="w-full h-1/4 bg-gradient-to-br from-yellow-400 to-yellow-100">

                    </div>
                    <div className="flex absolute w-full h-full bg-transparent top-0 left-0">
                        <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                        <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                        <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                    </div>
                </div> */}
                {/* <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/> */}
            </div>
        );
    }
}

export default HallOfFame;