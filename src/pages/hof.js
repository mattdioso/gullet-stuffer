import React from 'react';
import ContestantCard from '../components/contestant_card';
import ContestantProfile from '../components/contestant_profile';
import jaybee from '../imgs/ContestantCards/jaybee_spicy.jpg';
import max from '../imgs/ContestantCards/maxgo.jpg';
import legge from '../imgs/ContestantCards/legge2.jpg';


class HallOfFame extends React.Component {
    constructor(props) {
        super(props);
    }
    //grid grid-cols-hof gap-6
    //bg-gradient-to-r from-indigo-800 to-orange-800
    render() {
        return (
            
            <div className="block absolute no-scroll justify-center items-center w-full h-full pt-24 bg-black overflow-y-scroll">
                <div className="block relative w-full h-72">
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
                </div>
                {/* <ContestantCard pic={jaybee} name="JAYBEE RAGUDO" title="Iron Man" desc="5-Time Competitor" division="Professional"/>
                <ContestantCard pic={max} name="MAX MENDOLA" title="So Close He Can Taste It" desc="3-Time Runner Up" division="Professional"/>
                <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/>
                <ContestantCard pic={legge} name="STEPHEN LEGGE" title="The People's Champ" desc="" division="Amateur"/> */}
            </div>
        );
    }
}

export default HallOfFame;