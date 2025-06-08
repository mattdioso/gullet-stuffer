import React from 'react';
import Accordion from '../components/accordion';
import Reveal from '../components/utils/reveal';

class GSYear extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let info = {
            '2018': 'https://www.youtube.com/embed/0-7L21ZieD8',
            '2019': 'https://www.youtube.com/embed/W9rzDrwubG0',
            '2021': 'https://www.youtube.com/embed/kot5BXUPZJg',
            '2022': 'https://www.youtube.com/embed/fR5OlKENIUM',
            '2023': 'https://www.youtube.com/embed/Up799qwivC8?si=6f8_bBZ3mDlMIrHl',
            '2024': 'https://www.youtube.com/embed/b-LUO9aRseI?si=y2pWBo2RM_bOJccy'
        }
        let year = this.props.year.year;
        let link = info[year];
        let amateurs = this.props.year['competitors'].filter(athlete => athlete.rank == "Amateur");
        let pros = this.props.year['competitors'].filter(ath => ath.rank == "Professional");

        let desc = this.props.year['desc'];
        let title = this.props.year['title'];
        let event_poster = this.props.year['event_poster'];
        if (typeof (desc) !== 'undefined')
            desc = desc.replaceAll("\\n", "<br/>").replaceAll("<orange>", "<span class='text-gold'>").replaceAll("</orange>", "</span>");
        console.log(desc);

        amateurs.sort((a, b) => b.result - a.result);
        pros.sort((a, b) => b.result - a.result);

        console.log("lenght: " + Math.floor(pros.length / 2));
        return (
            <section >
                <Reveal useBar="false">
                    <div class="flex mt-16 md:mt-36 px-4 md:px-24 w-full">
                        <div class="w-fit m-0">
                            {/* <h2 className={this.props.i % 2 === 1 ? "text-gold text-5xl md:text-6xl" : "text-white text-5xl md:text-6xl"}>{year} - {title}</h2> */}
                            <h2 className={this.props.i % 2 === 1 ? "text-gold text-3xl md:text-6xl" : "text-gold text-3xl md:text-6xl"}>{year} - {title}</h2>
                        </div>

                        <div class="h-[1px] bg-white my-auto"></div>
                    </div>
                </Reveal>
                <Reveal useBar="false">
                    <div className="md:flex w-10/12 md:w-10/12 mx-auto mt-4">
                        {
                            event_poster ? <img className="mb-4 md:mb-0 md:w-1/4 md:pr-4" src={event_poster} alt="poster"></img> : <></>
                        }
                        <p className='text-sm md:text-base  2xl:text-xl font-heavitas text-white' dangerouslySetInnerHTML={{ __html: desc }}>

                        </p>
                    </div>

                </Reveal>
                <Reveal useBar="false">
                    <div class="block h-full">
                        <iframe
                            className="mt-12 mx-auto sm:w-[640px] sm:h-[350px] rounded-md"
                            // width="640"
                            // height="350"
                            src={link}
                            title={`Gullet Stuffer ${year}`}
                            poster="https://img.youtube.com/vi/0-7L21ZieD8/default.jpg"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Reveal>
                <Reveal useBar="false">
                    <div class="w-10/12 md:w-8/12 mx-auto mb-2">
                        <Accordion year={this.props.year}></Accordion>
                    </div>
                </Reveal>
                {/* <div className={`grid grid-cols-${pros.length} w-11/12 h-48 mx-auto`}>
                    {pros.map((pro) => (
                        <div className="col-span-1">
                            <ContestantProfile comp={pro}></ContestantProfile>
                        </div>
                    ))}
                </div>
                <div className={`grid grid-cols-${amateurs.length} w-11/12 h-48 mx-auto`}>
                    {amateurs.map((amateur) => (
                        <div className="col-span-1">
                            <ContestantProfile comp={amateur}></ContestantProfile>
                        </div>
                    ))}
                </div> */}
            </section>

        );
    }
}

export default GSYear;