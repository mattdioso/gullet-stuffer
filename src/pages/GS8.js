import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import EventInvite from '../components/event_invite';
import GS8AthleteSection from '../components/gs8_athlete_section';
import { gs8_contestants } from '../data/gs8_contestants';


class GS8 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
                return <span className="text-white">huh</span>
            } else {
                return (
                    <div className="flex text-gs_red space-x-4 md:space-x-14">
                        <div>
                            <div className="text-6xl md:text-9xl text-center md:w-40">
                                {zeroPad(days)}
                            </div>
                            <div className="text-center text-base md:text-2xl">
                                days
                            </div>
                        </div>
                        <div>
                            <div className="text-6xl md:text-9xl text-center md:w-40">
                                {zeroPad(hours)}
                            </div>
                            <div className="text-center text-base md:text-2xl">
                                hours
                            </div>
                        </div>
                        <div>
                            <div className="text-6xl md:text-9xl text-center md:w-40">
                                {zeroPad(minutes)}
                            </div>
                            <div className="text-center text-base md:text-2xl">
                                minutes
                            </div>
                        </div>
                        <div>
                            <div className="text-6xl md:text-9xl text-center md:w-40">
                                {zeroPad(seconds)}
                            </div>
                            <div className="text-center text-base md:text-2xl">
                                seconds
                            </div>
                        </div>
                    </div>
                )
            }

        }
        return (
            <main className="w-full pt-36 md:pt-40 bg-black">
                <EventInvite />
                <GS8AthleteSection contestants={gs8_contestants} />
                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default GS8;
