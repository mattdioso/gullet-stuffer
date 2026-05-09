import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import GulletStufferSubscribe from '../components/mailchimp_subscribe';
import { hof_data } from '../data/hof';

class HomePage extends React.Component {
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
      <div className="block w-full h-full overflow-y-scroll">

        <div className="mt-32 md:top-24 text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-auto w-full">
          <p className="text-white text-center">Seattle's Finest</p>

          <p className="text-gold text-center">Competitive Eating Contest</p>
        </div>
        <div className="w-full flex justify-center mt-10 md:mt-16">
          <Countdown date={new Date(1783821600000)} renderer={countdownRenderer} />
        </div>
        <div className="visible h-fit w-11/12 pt-4 md:pt-0 m-auto md:invisible md:w-0 md:h-0 md:opacity-0">
          <img className="rounded-md mt-4" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepageuncrust.png" alt="uncrust" />
          <div className="h-16 mt-2">
            <a className="h-full mx-auto" href="/vote">
              <div className="w-72 md:w-96 h-full md:h-full bg-gold flex mx-auto place-content-center rounded-2xl my-auto">
                <p className="text-black my-auto text-lg md:text-2xl 2xl:text-2xl text-center">Check out our Voter's Guide!</p>
              </div>
            </a>
          </div>

          {/* <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto perspective border border-gray-600 rounded-xl">
            <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/homepage.mp4" type="video/mp4" />
          </video> */}
        </div>
        <div className="h-0 md:w-10/12 md:mx-auto md:pt-12 md:visible invisible md:h-fit opacity-0 md:opacity-100 md:z-50">
          <img className="rounded-md mt-4" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/home/homepageuncrust.png" alt="uncrust" />
          {/* <video autoPlay loop muted playsInline id='intro_video' className="object-bottom mx-auto perspective border border-gray-600 rounded-xl">
            <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/GS7/homepage.mp4" type="video/mp4" />
          </video> */}
          <div className="h-16 mt-2">
            <a className="h-full mx-auto" href="/vote">
              <div className="w-36 md:w-96 h-full md:h-full bg-gold flex mx-auto place-content-center rounded-2xl my-auto">
                <p className="text-black my-auto text-lg md:text-2xl 2xl:text-2xl text-center">Check out our Voter's Guide!</p>
              </div>
            </a>
          </div>
        </div>

        <div className="w-11/12 2xl:w-4/5 mx-auto mt-10 md:grid md:grid-cols-[minmax(360px,0.42fr)_minmax(0,0.58fr)] md:gap-12 md:items-center">
          <div className="min-w-0 border-b md:border-b-0 md:border-r border-gray-200 text-center md:text-left pb-8 md:pb-0 md:pr-12">
            <p className='text-7xl md:text-8xl lg:text-9xl text-white leading-none'>Gullet</p>
            <p className='text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] text-gold leading-[45px] md:leading-[65px] lg:leading-[80px]'>Stuffer</p>
          </div>
          <div className="min-w-0 pt-6 md:pt-0">
            <p className='text-sm md:text-lg font-heavitas text-white leading-relaxed'>
              A neon orange glow fills the Grocery Outlet parking lot. It's time for Gullet Stuffer! This annual eating contest supports local food aid, bringing the community together with every bite.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="border-l-4 border-gold pl-4">
                <p className="text-neutral-300 text-xs md:text-sm font-heavitas">Current Home Field</p>
                <p className="text-gold text-base md:text-xl leading-tight">Central District Grocery Outlet Bargain Market</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <p className="text-neutral-300 text-xs md:text-sm font-heavitas">Total Competitors</p>
                <p className="text-white text-base md:text-xl leading-tight">109 All Time</p>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <p className="text-neutral-300 text-xs md:text-sm font-heavitas">GSVII Food Count</p>
                <p className="text-gold text-base md:text-xl leading-tight">1,291 Gyoza in 10 Minutes</p>
              </div>
              <div className="border-l-4 border-white pl-4">
                <p className="text-neutral-300 text-xs md:text-sm font-heavitas">Next Event</p>
                <p className="text-white text-base md:text-xl leading-tight">Gullet Stuffer VIII - July 11th, 2026</p>
              </div>
              <div className="border-l-4 border-gold pl-4 md:col-span-2">
                <p className="text-neutral-300 text-xs md:text-sm font-heavitas">Raised for Seattle Community Fridge</p>
                <p className="text-gold text-2xl md:text-4xl leading-tight">$20,200</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <a className="inline-flex min-h-[54px] bg-gold px-8 py-3 items-center justify-center rounded-2xl text-black text-lg md:text-2xl" href="https://docs.google.com/forms/d/e/1FAIpQLSdbjNwt2vampg_iGE6waSzQujxn9SO18OlL2VZmfI0fcqLTgQ/viewform" target="_blank" rel="noreferrer">
                Join the Team!
              </a>
            </div>
          </div>
        </div>
        <section className="relative w-full my-16 py-12 bg-neutral-950 border-y border-neutral-800">
          <div className="w-11/12 2xl:w-4/5 mx-auto">
            <div className="grid grid-cols-12 gap-4 items-center mb-8">
              <div className="col-span-12 md:col-span-4">
                <h2 className="text-gold text-3xl md:text-5xl leading-none">Top Fundraisers</h2>
              </div>
              <div className="hidden md:block md:col-span-8 h-[1px] w-full bg-white"></div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-10 items-center">
              <div className="md:col-span-4 mb-8 md:mb-0">
                <p className="text-white text-sm md:text-base font-heavitas">
                  Gullet Stuffer athletes do more than compete. Each year, top fundraisers help turn the spectacle into real support for local food aid and community charities.
                </p>
                <a className="inline-flex mt-6 bg-gold text-black rounded-2xl px-6 py-3 text-lg md:text-xl" href="/hof">
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
                          <p className="text-gold text-2xl md:text-4xl leading-tight">{fundraiser.result}</p>
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

export default HomePage;
