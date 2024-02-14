import React, { useState } from 'react';

const Accordion = ({ year, title, content}) => {
    const [isActive, setIsActive] = useState(false);

    let amateurs = year['competitors'].filter(athlete => athlete.rank=="Amateur");
    let pros = year['competitors'].filter(ath => ath.rank=="Professional");
    amateurs.sort((a, b) => b.result - a.result);
    pros.sort((a, b) => b.result - a.result);

    return (
        <div className=''>
            <div className='flex flex-row justify-between cursor-pointer bg-gray-900 hover:bg-gray-400 p-2' onClick={() => setIsActive(!isActive)}>
                <div className='grid grid-cols-8 grid-rows-2 w-1/2'>
                    <p className='text-center text-xl col-start-2 col-span-4 my-auto'>{pros[0].firstName} {pros[0].lastName}</p>
                    <p className='text-center text-xl col-span-4 col-start-2 row-start-2 my-auto'>{pros[0].result} {year.food}</p>
                    <div className="flex flex-row-reverse row-span-2 col-start-6 col-span-2">
                        <img className="h-24 w-24 object-cover rounded-2xl" src={pros[0].img} alt=""></img>
                    </div>
                    
                </div>
                <div className='grid grid-cols-8 grid-rows-2 w-1/2'>
                    <div className="flex row-span-2 col-start-2 col-span-2">
                        <img className="h-24 w-24 object-cover rounded-2xl" src={amateurs[0].img} alt=""></img>
                    </div>
                    <p className='text-center text-xl col-span-4 col-start-4 my-auto'>{amateurs[0].firstName} {amateurs[0].lastName}</p>
                    <p className='text-center text-xl col-span-4 col-start-4 row-start-2 my-auto'>{amateurs[0].result} {year.food}</p>
                </div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {
                isActive && 
                <div className="flex flex-row justify-between cursor-pointer bg-white p-2">
                    <table class='w-1/2 table-auto'>
                        <tbody>
                            {
                                pros.slice(1).map((pro, i) => (
                                    <tr>
                                        <td>{i + 2}.</td>
                                        <td>{pro.firstName} {pro.lastName}</td>
                                        <td>{pro.result}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <table class='w-1/2 table-auto'>
                        <tbody>
                            {
                                amateurs.slice(1).map((amateur, i) => (
                                    <tr>
                                        <td>{i + 2}.</td>
                                        <td>{amateur.firstName} {amateur.lastName}</td>
                                        <td>{amateur.result}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Accordion;