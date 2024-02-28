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
                <div className='flex flex-col-reverse md:grid md:grid-cols-8 w-1/2'>
                    <div className="md:col-start-1 md:col-span-5 my-auto">
                        <p className='text-center text-white text-xl md:text-2xl font-KCBold mt-2 md:mt-4 md:my-auto'>{pros[0].firstName} {pros[0].lastName}</p>
                        <p className='text-center text-white text-base md:text-xl mb-2 md:mb-4 md:my-auto'>{pros[0].result} {year.food}</p>
                    </div>
                    <div className="md:flex md:flex-row-reverse md:row-span-2 5 mt-4 md:mt-0 md:col-start-6 md:col-span-2">
                        <img className="h-20 w-20 md:h-24 md:w-24 md:mx-0 mx-auto my-auto object-cover rounded-2xl" src={pros[0].img} alt=""></img>
                    </div>
                    
                </div>
                <div className='md:grid md:grid-cols-8 w-1/2'>
                    <div className="mx-auto mt-4 md:flex md:mt-0 md:col-start-2 md:col-span-2">
                        <img className="h-20 w-20 md:h-24 md:w-24 mx-auto my-auto md:mx-0 object-cover rounded-2xl" src={amateurs[0].img} alt=""></img>
                    </div>
                    <div className="md:col-start-4 md:col-span-5 my-auto">
                        <p className='text-center text-white text-xl md:text-2xl font-KCBold mt-2 md:mt-4 md:my-auto'>{amateurs[0].firstName} {amateurs[0].lastName}</p>
                        <p className='text-center text-white text-base md:text-xl mb-2 md:mb-4 md:my-auto'>{amateurs[0].result} {year.food}</p>
                    </div>
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
                                        {/* <td className='text-xs md:text-base text-white'>{i + 2}.</td> */}
                                        <td><img className="h-10 w-10 md:h-16 md:w-16 rounded-lg" src={pro.img} alt=""></img></td>
                                        <td className='text-[12px] text-center font-KCBold md:text-2xl text-white'>{pro.firstName} {pro.lastName}</td>
                                        <td className='text-[14px] text-center md:text-2xl text-white drop-shadow-2xl pr-2'>{pro.result}</td>
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
                                        {/* <td className='text-xs md:text-base text-white'>{i + 2}.</td> */}
                                        <td><img className="h-10 w-10 md:h-16 md:w-16 rounded-lg" src={amateur.img} alt=""></img></td>
                                        <td className='text-[12px] text-center font-KCBold md:text-2xl text-white'>{amateur.firstName} {amateur.lastName}</td>
                                        <td className='text-[14px] text-center md:text-2xl text-white drop-shadow-2xl pr-1'>{amateur.result}</td>
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