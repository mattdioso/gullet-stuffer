import React from 'react';
import jaybee from '../imgs/GS2Stills/jaybee_spicy.jpg';

class ContestantProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="group relative w-[350px] h-[190px] hover:h-[450px] bg-white rounded-3xl shadow-2xl duration-500">
                    <div className="absolute w-[150px] h-[150px] group-hover:h-[250px] group-hover:w-[250px] bg-white rounded-3xl shadow-2xl translate-x-[-50%] top-[-50px] left-1/2 duration-500">
                        <img className="absolute h-full w-full top-0 left-0 object-cover rounded-2xl" src={jaybee} alt=""></img>
                    </div>
                    <div className="absolute w-full h-full flex justify-center items-end overflow-hidden">
                        <div className="p-[40px] w-full duration-500 text-center translate-y-[150px] group-hover:-translate-y-0">
                            <h2 className="font-semibold text-lg text-neutral-800">JAYBEE RAGUDO<br/>
                                <span className="font-semibold text-sm text-neutral-500">Professional</span>
                            </h2>
                            <div className="mt-20 justify-between">
                                <h3>"Iron Man"<br/></h3> 
                                
                                <h3>5-Time Competitor</h3>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ContestantProfile;