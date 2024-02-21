import React, { useState } from 'react';
import RevealTable from './utils/reveal_table';
const Accordion = ({ year, title, content}) => {
    const [isActive, setIsActive] = useState(false);

    let amateurs = year['competitors'].filter(athlete => athlete.rank=="Amateur");
    let pros = year['competitors'].filter(ath => ath.rank=="Professional");
    amateurs.sort((a, b) => b.result - a.result);
    pros.sort((a, b) => b.result - a.result);

    return (
        <div className='mt-8'>
            <div className={`flex flex-row justify-between cursor-pointer border-y border-white hover:bg-gray-400 p-2 ${isActive ? "bg-gray-800" : "bg-black"}`} onClick={() => setIsActive(!isActive)}>
                <div className='grid grid-cols-8 grid-rows-2 w-1/2'>
                    <p className='text-center text-white text-sm md:text-xl col-start-1 md:col-start-2 col-span-4 mt-8 md:mt-0 md:my-auto'>{pros[0].firstName} {pros[0].lastName}</p>
                    <p className='text-center text-white text-xs md:text-xl col-span-4 col-start-1 md:col-start-2 row-start-2 mb-8 md:mb-0 md:my-auto'>{pros[0].result} {year.food}</p>
                    <div className="flex flex-row-reverse row-span-2 col-start-5 col-span-4 mt-4 md:mt-0 md:col-start-6 md:col-span-2">
                        <img className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-2xl" src={pros[0].img} alt=""></img>
                    </div>
                    
                </div>
                <div className='grid grid-cols-8 grid-rows-2 w-1/2'>
                    <div className="flex row-span-2 col-start-1 col-span-4 mt-4 md:mt-0 md:col-start-2 md:col-span-2">
                        <img className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-2xl" src={amateurs[0].img} alt=""></img>
                    </div>
                    <p className='text-center text-white text-sm md:text-xl col-span-4 col-start-5 md:col-start-4 mt-8 md:mt-0 md:my-auto'>{amateurs[0].firstName} {amateurs[0].lastName}</p>
                    <p className='text-center text-white text-xs md:text-xl col-span-4 col-start-5 md:col-start-4 row-start-2 mb-8 md:mb-0 md:my-auto'>{amateurs[0].result} {year.food}</p>
                </div>
                <div className='text-white'>{isActive ? '-' : '+'}</div>
            </div>
            {
                isActive && (
                <RevealTable>
                <div className="flex flex-row justify-between cursor-pointer bg-gray-800 p-2">
                    <table class='w-1/2 table-auto'>
                        <tbody>
                            {
                                pros.slice(1).map((pro, i) => (
                                    <tr>
                                        <td className='text-xs md:text-base text-white'>{i + 2}.</td>
                                        <td><img className="h-10 w-10 md:h-16 md:w-16 rounded-lg" src={pro.img} alt=""></img></td>
                                        <td className='text-[10px] md:text-base text-white'>{pro.firstName} {pro.lastName}</td>
                                        <td className='text-[10px] md:text-base text-orange-400'>{pro.result}</td>
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
                                        <td className='text-xs md:text-base text-white'>{i + 2}.</td>
                                        <td><img className="h-10 w-10 md:h-16 md:w-16 rounded-lg" src={amateur.img} alt=""></img></td>
                                        <td className='text-[10px] md:text-base text-white'>{amateur.firstName} {amateur.lastName}</td>
                                        <td className='text-[10px] md:text-base text-orange-400'>{amateur.result}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                </RevealTable>
            )}
        </div>
    );
};

export default Accordion;