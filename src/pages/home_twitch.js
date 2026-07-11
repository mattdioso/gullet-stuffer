import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa';
import GulletStufferSubscribe from '../components/mailchimp_subscribe';
import DojiggyLeaderboards from '../components/dojiggy_leaderboards';
import TwitchLivestream from '../components/twitch_livestream';
import { hof_data } from '../data/hof';

class HomeTwitchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ended: true
    }
    this.videoEnded = this.videoEnded.bind(this);

  }

  videoEnded() {
    this.setState({ ended: true })
    console.log("video ended: " + this.state.ended);
  }

  render() {
    const topFundraisers = hof_data[0]['top_fundraisers'];
    const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
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
      <div className="block w-full h-full overflow-y-scroll">

        <div className="mt-32 md:top-24 text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-auto w-full">
          <p className="text-white text-center">Seattle's Finest</p>

          <p className="text-gs_purple text-center">Competitive Eating Contest</p>
        </div>
        <div className="w-full flex justify-center mt-10 md:mt-16">
          <Countdown date={new Date(1783821600000)} renderer={countdownRenderer} />
        </div>
        <div className="w-11/12 max-w-4xl mx-auto pt-6 md:pt-12">
          <div className="overflow-hidden rounded-md bg-black shadow-2xl">
            <TwitchLivestream channel="gulletstuffer" />
          </div>
        </div>

        <div className="w-11/12 2xl:w-4/5 mx-auto mt-10 md:grid md:grid-cols-[minmax(360px,0.42fr)_minmax(0,0.58fr)] md:gap-12 md:items-center">
          <div className="min-w-0 border-b md:border-b-0 md:border-r border-gray-200 text-center md:text-left pb-8 md:pb-0 md:pr-12">
            <p className='text-7xl md:text-8xl lg:text-9xl text-white leading-none'>Gullet</p>
            <p className='text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] text-gs_red leading-[45px] md:leading-[65px] lg:leading-[80px]'>Stuffer</p>
          </div>
          <div className="min-w-0 pt-6 md:pt-0">
            <h2 className="text-gs_red text-3xl md:text-5xl leading-none">Watch the Livestream</h2>
            <p className='mt-4 text-sm md:text-lg font-heavitas text-white leading-relaxed'>
              Catch every bite live on Twitch, Instagram, or YouTube. Choose your favorite platform below and join us when the contest begins.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <a className="inline-flex min-h-[54px] gap-3 bg-gs_purple px-6 py-3 items-center justify-center rounded-2xl text-black text-lg md:text-xl transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="https://www.twitch.tv/gulletstuffer" target="_blank" rel="noreferrer">
                <FaTwitch className="h-5 w-5 shrink-0" aria-hidden="true" />
                Watch on Twitch
              </a>
              <a className="inline-flex min-h-[54px] gap-3 bg-gs_purple px-6 py-3 items-center justify-center rounded-2xl text-black text-lg md:text-xl transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="https://www.instagram.com/gulletstuffer/" target="_blank" rel="noreferrer">
                <FaInstagram className="h-5 w-5 shrink-0" aria-hidden="true" />
                Watch on Instagram
              </a>
              <a className="inline-flex min-h-[54px] gap-3 bg-gs_purple px-6 py-3 items-center justify-center rounded-2xl text-black text-lg md:text-xl transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="https://www.youtube.com/@gulletstufferz" target="_blank" rel="noreferrer">
                <FaYoutube className="h-5 w-5 shrink-0" aria-hidden="true" />
                Watch on YouTube
              </a>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <a className="inline-flex min-h-[54px] bg-gs_purple px-8 py-3 items-center justify-center rounded-2xl text-black text-lg md:text-2xl" href="https://go.dojiggy.io/nocrust" target="_blank" rel="noreferrer">
                Support our Athletes!
              </a>
              <a className="inline-flex min-h-[54px] bg-gs_purple px-8 py-3 items-center justify-center rounded-2xl text-black text-lg md:text-2xl" href="https://docs.google.com/forms/d/e/1FAIpQLSdbjNwt2vampg_iGE6waSzQujxn9SO18OlL2VZmfI0fcqLTgQ/viewform" target="_blank" rel="noreferrer">
                Join the Team!
              </a>
            </div>
          </div>
        </div>
        <DojiggyLeaderboards />
        <section className="relative w-full my-16 py-12 bg-neutral-950 border-y border-neutral-800">
          <div className="w-11/12 2xl:w-4/5 mx-auto">
            <div className="grid grid-cols-12 gap-4 items-center mb-8">
              <div className="col-span-12 md:col-span-4">
                <h2 className="text-gs_red text-3xl md:text-5xl leading-none">Top Fundraisers</h2>
              </div>
              <div className="hidden md:block md:col-span-8 h-[1px] w-full bg-white"></div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-10 items-center">
              <div className="md:col-span-4 mb-8 md:mb-0">
                <p className="text-white text-sm md:text-base font-heavitas">
                  Gullet Stuffer athletes do more than compete. Each year, top fundraisers help turn the spectacle into real support for local food aid and community charities.
                </p>
                <a className="inline-flex mt-6 bg-gs_purple text-black rounded-2xl px-6 py-3 text-lg md:text-xl" href="/hof">
                  Visit the Hall of Fame
                </a>
              </div>
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-5 md:gap-8">
                  {
                    topFundraisers.map((fundraiser) => (
                      <div className="min-w-0" key={`${fundraiser.firstName}-${fundraiser.lastName}-${fundraiser.year}`}>
                        <div className="aspect-[4/5] overflow-hidden rounded-md shadow-2xl bg-neutral-900">
                          <img
                            className="h-full w-full object-cover object-center"
                            src={fundraiser.img}
                            alt={`${fundraiser.firstName} ${fundraiser.lastName}`}
                          />
                        </div>
                        <div className="pt-3 text-center">
                          <p className="text-white text-lg md:text-2xl leading-tight">{`${fundraiser.firstName} ${fundraiser.lastName}`}</p>
                          <p className="text-gs_purple text-2xl md:text-4xl leading-tight">{fundraiser.result}</p>
                          <p className="text-neutral-300 text-xs md:text-sm font-heavitas">{fundraiser.year} Top Fundraiser</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        <GulletStufferSubscribe />
        <footer className='h-24 bg-black'></footer>
      </div>
    );
  }
}

export default HomeTwitchPage;
