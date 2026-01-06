import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import EventInvite from '../components/event_invite';


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
                    <div className="flex text-gold space-x-2 md:space-x-14">
                        <div>
                            <div className="text-4xl md:text-9xl text-center md:w-40">
                                {zeroPad(days)}
                            </div>
                            <div className="text-center text-xs md:text-2xl">
                                days
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-9xl text-center md:w-40">
                                {zeroPad(hours)}
                            </div>
                            <div className="text-center text-xs md:text-2xl">
                                hours
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-9xl text-center md:w-40">
                                {zeroPad(minutes)}
                            </div>
                            <div className="text-center text-xs md:text-2xl">
                                minutes
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-9xl text-center md:w-40">
                                {zeroPad(seconds)}
                            </div>
                            <div className="text-center text-xs md:text-2xl">
                                seconds
                            </div>
                        </div>
                    </div>
                )
            }

        }
        return (
            <main className="w-full pt-36 md:pt-40 bg-black">
                <div className="w-full flex justify-center">
                    <Countdown date={new Date(1783821600000)} renderer={renderer} />
                </div>
                <EventInvite />
                <div className="flex justify-center">
                    <img className="w-10/12 rounded-md mt-4" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS8/2026BracketQUARTERS.png" alt="bracket" />
                </div>
                <div className="h-16">
                    <a className="h-full mx-auto" href="/vote">
                        <div className="w-36 md:w-96 h-full md:h-full bg-gold flex mx-auto place-content-center rounded-2xl my-auto">
                            <p className="text-black my-auto text-lg md:text-2xl 2xl:text-2xl text-center">Check out our Voter's Guide!</p>
                        </div>
                    </a>
                </div>
                <footer className='h-24 bg-black'></footer>
            </main>
        )
    }
}

export default GS8;