import React from "react";
import { gs8_foods } from "../data/gs8_foods";

class VotersGuide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="w-full pt-36 md:pt-40 bg-black space-y-4">
                {
                    gs8_foods.map((food) => (
                        <div className="w-10/12 mx-auto border rounded-lg border-white text-gold">
                            <div className="w-full flex text-center px-2 md:px-8 justify-between mt-2">
                                <div className="text-lg md:text-2xl">
                                    {food.name}{food.appearances === 1 ? ` (rookie)` : undefined}
                                </div>
                                <div className="text-lg md:text-2xl">Rank: {food.rank}</div>

                            </div>
                            <hr class="w-11/12 border-gray-300 border-1 my-4 mx-auto"></hr>
                            <div className="w-full py-2 md:px-8 my-auto md:flex text-white text-base md:text-xl">
                                <div className="md:w-1/3">
                                    <img className="mx-auto" src={food.img} alt={food.name} />
                                </div>
                                <div className="w-11/12 md:w-2/3 mx-auto my-auto">
                                    {food.description}
                                </div>
                            </div>
                        </div>
                    ))
                }
                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default VotersGuide;