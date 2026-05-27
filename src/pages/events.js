import React, { useMemo, useState } from 'react';
import { FaFilm, FaListOl, FaPlay } from 'react-icons/fa';

import { years_data } from '../data/years';

const tabs = [
    { key: 'story', label: 'Story', icon: FaFilm },
    { key: 'standings', label: 'Standings', icon: FaListOl },
    { key: 'video', label: 'Video', icon: FaPlay },
];

const getName = athlete => `${athlete.firstName} ${athlete.lastName}`.trim();

const resultValue = result => {
    const value = parseFloat(String(result).replace(/[^\d.]/g, ''));
    return Number.isNaN(value) ? 0 : value;
};

const getDivision = (year, division) => (
    year.competitors
        .filter(athlete => athlete.rank === division)
        .sort((a, b) => resultValue(b.result) - resultValue(a.result))
);

const formatDesc = desc => (desc || '')
    .replaceAll('\\n', '<br/>')
    .replaceAll('<orange>', "<span class='text-gs_purple'>")
    .replaceAll('</orange>', '</span>');

const WinnerCard = ({ title, athlete, food }) => (
    <div className="grid grid-cols-[56px_1fr] gap-3 rounded-md border border-white/15 bg-white/5 p-3 md:grid-cols-[84px_1fr]">
        <img className="h-16 w-16 rounded-md object-cover md:h-[84px] md:w-[84px]" src={athlete.img} alt={getName(athlete)} />
        <div className="min-w-0 self-center">
            <p className="text-xs uppercase tracking-[0.16em] text-amber-200 md:text-sm md:tracking-[0.18em] font-OpenSansBold">{title}</p>
            <p className="truncate text-2xl text-white md:text-3xl">{getName(athlete)}</p>
            <p className="text-sm text-white/75 font-OpenSansBold">{athlete.result} {food}</p>
        </div>
    </div>
);

const StandingsTable = ({ title, athletes, food }) => (
    <div className="flex h-[420px] min-h-0 flex-col rounded-md border border-white/15 bg-black/35 lg:h-full">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-white/15 bg-black/90 px-3 py-2">
            <h3 className="text-lg text-gs_red md:text-xl">{title}</h3>
            <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-white/55 font-OpenSansBold">{food}</span>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto no-scroll">
            {athletes.map((athlete, index) => (
                <div key={`${title}-${athlete.firstName}-${athlete.lastName}-${index}`} className="grid grid-cols-[28px_48px_1fr_auto] items-center gap-2 border-b border-white/10 px-3 py-2 last:border-b-0 md:grid-cols-[32px_48px_1fr_auto] md:gap-3">
                    <p className="text-center text-sm text-white/55 font-OpenSansBold">{index + 1}</p>
                    <img className="h-12 w-12 rounded-md object-cover md:h-16 md:w-16" src={athlete.img} alt={getName(athlete)} />
                    <p className="min-w-0 truncate text-sm text-white md:text-base font-OpenSansBold">{getName(athlete)}</p>
                    <p className="text-right text-base text-amber-200 md:text-lg">{athlete.result}</p>
                </div>
            ))}
        </div>
    </div>
);

const EventsPage = () => {
    const orderedYears = useMemo(() => [...years_data].sort((a, b) => b.year - a.year), []);
    const [selectedYear, setSelectedYear] = useState(orderedYears[0].year);
    const [activeTab, setActiveTab] = useState('story');

    const year = orderedYears.find(item => item.year === selectedYear) || orderedYears[0];
    const amateurs = getDivision(year, 'Amateur');
    const pros = getDivision(year, 'Professional');
    const amateurWinner = amateurs[0];
    const proWinner = pros[0];

    return (
        <main className="min-h-screen bg-black px-4 pb-8 pt-28 text-white md:px-8 md:pt-40 lg:h-screen lg:overflow-hidden lg:pb-4">
            <section className="mx-auto flex min-h-0 w-full max-w-[96rem] flex-col gap-4 lg:h-full lg:gap-3">
                <div className="shrink-0 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-4xl leading-none text-gs_red md:text-5xl 2xl:text-6xl">Through the Years</p>
                    </div>
                    <div className="flex min-h-[48px] items-center gap-2 overflow-x-auto py-1 md:max-w-[46%] md:justify-end">
                        {orderedYears.map(item => (
                            <button
                                key={item.year}
                                onClick={() => {
                                    setSelectedYear(item.year);
                                    setActiveTab('story');
                                }}
                                className={`shrink-0 rounded-md border px-4 py-2 text-base leading-normal transition md:text-lg ${selectedYear === item.year
                                    ? 'border-gs_red bg-gs_red text-white'
                                    : 'border-white/20 bg-white/5 text-white/70 hover:border-white/60 hover:text-white'
                                    }`}
                            >
                                {item.year}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid flex-1 items-stretch gap-4 lg:min-h-0 lg:grid-cols-[minmax(340px,1fr)_minmax(0,1.7fr)]">
                    <aside className="h-[260px] sm:h-[320px] md:h-[440px] lg:h-full lg:min-h-0">
                        <div className="relative h-full overflow-hidden rounded-md border border-white/15 bg-white/5">
                            <img className="h-full w-full object-cover object-center md:object-contain" src={year.event_poster} alt={`${year.year} event poster`} />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 md:p-4">
                                <div className="flex items-end justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="text-4xl leading-none text-white md:text-6xl">{year.year}</p>
                                        <p className="truncate text-lg text-gs_red md:text-2xl">{year.title}</p>
                                        <p className="text-sm text-white/70 font-OpenSansBold">{year.food}</p>
                                    </div>
                                    {year.logo && <img className="h-12 w-12 shrink-0 rounded-md object-contain bg-black/50 p-1 md:h-16 md:w-16" src={year.logo} alt={`${year.year} logo`} />}
                                </div>
                            </div>
                        </div>
                    </aside>

                    <section className="flex min-h-0 flex-col rounded-md border border-white/15 bg-white/[0.03] lg:h-full">
                        <div className="flex flex-col gap-3 border-b border-white/15 p-3 md:flex-row md:flex-wrap md:items-center md:justify-between">
                            <div className="min-w-0">
                                <p className="truncate text-3xl leading-tight text-gs_purple md:text-4xl">{year.title}</p>
                            </div>
                            <div className="grid grid-cols-3 rounded-md border border-white/15 bg-black/50 p-1 md:flex">
                                {tabs.map(tab => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.key}
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`flex items-center justify-center gap-2 rounded px-3 py-2 text-sm md:text-base ${activeTab === tab.key
                                                ? 'bg-white text-black'
                                                : 'text-white/65 hover:text-white'
                                                }`}
                                        >
                                            <Icon aria-hidden="true" />
                                            <span>{tab.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="min-h-0 flex-1 p-3 md:p-4">
                            {activeTab === 'story' && (
                                <div className="flex min-h-0 flex-col gap-4 lg:h-full">
                                    <div className="grid gap-3 xl:grid-cols-2">
                                        {amateurWinner && (
                                            <div className="order-2 xl:order-1">
                                                <WinnerCard title="Amateur Champ" athlete={amateurWinner} food={year.food} />
                                            </div>
                                        )}
                                        {proWinner && (
                                            <div className="order-1 xl:order-2">
                                                <WinnerCard title="Pro Champ" athlete={proWinner} food={year.food} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="min-h-0 flex-1 rounded-md border border-white/15 bg-black/35 p-4 lg:overflow-y-auto no-scroll">
                                        <p
                                            className="text-sm leading-6 text-white md:text-lg md:leading-7 font-heavitas"
                                            dangerouslySetInnerHTML={{ __html: formatDesc(year.desc) }}
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'standings' && (
                                <div className="grid min-h-0 gap-4 lg:h-full lg:grid-rows-2 xl:grid-cols-2 xl:grid-rows-none">
                                    <div className="order-2 min-h-0 xl:order-1">
                                        <StandingsTable title="Amateur Results" athletes={amateurs} food={year.food} />
                                    </div>
                                    <div className="order-1 min-h-0 xl:order-2">
                                        <StandingsTable title="Pro Results" athletes={pros} food={year.food} />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'video' && (
                                <div className="flex min-h-[220px] items-center md:min-h-[360px] lg:h-full">
                                    <div className="aspect-video w-full overflow-hidden rounded-md border border-white/15 bg-black">
                                        <iframe
                                            className="h-full w-full"
                                            src={year.video}
                                            title={`Gullet Stuffer ${year.year}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            referrerPolicy="no-referrer-when-downgrade strict-origin-when-cross-origin"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default EventsPage;
