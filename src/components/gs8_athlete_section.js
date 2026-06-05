import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const DEFAULT_AVATAR =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Crect width="512" height="512" fill="%23171717"/%3E%3Ccircle cx="256" cy="190" r="92" fill="%2395509c"/%3E%3Cpath d="M88 448c22-84 86-132 168-132s146 48 168 132" fill="%2395509c"/%3E%3Ccircle cx="256" cy="256" r="238" fill="none" stroke="%23ff3b6e" stroke-width="18"/%3E%3C/svg%3E';

const ordinal = (place) => {
    const value = Number(place);

    if (!Number.isFinite(value)) {
        return place;
    }

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = value % 100;
    return `${value}${suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]}`;
};

const formatFinish = (finish) => {
    const place = finish.place ? `${ordinal(finish.place)} place` : 'Finished';
    const rank = finish.rank ? ` ${finish.rank}` : '';

    return `${finish.year}: ${place}${rank}`;
};

const FoodGraphic = ({ food }) => {
    const baseProps = {
        className: 'h-6 w-6',
        viewBox: '0 0 48 48',
        role: 'img',
        'aria-label': food,
    };

    const graphic = {
        Gyoza: (
            <svg {...baseProps}>
                <title>{food}</title>
                <path d="M7 28c5-13 28-20 34-6 2 6-3 13-14 15C15 39 5 35 7 28Z" fill="#f2dfbb" />
                <path d="M11 27c7 3 19 3 27-1" fill="none" stroke="#b9874b" strokeLinecap="round" strokeWidth="3" />
                <path d="M17 19c1 4 1 8-1 12M23 17c2 5 2 10 0 16M30 18c2 4 2 8 1 13" fill="none" stroke="#d0a064" strokeLinecap="round" strokeWidth="2" />
                <path d="M9 29c4 7 25 7 32-4" fill="none" stroke="#7b4d28" strokeLinecap="round" strokeWidth="2" opacity=".35" />
            </svg>
        ),
        'Mini Donuts': (
            <svg {...baseProps}>
                <title>{food}</title>
                <circle cx="24" cy="24" r="18" fill="#c98244" />
                <circle cx="24" cy="24" r="8" fill="#171717" />
                <path d="M9 23c1-9 9-15 18-14 9 1 16 8 15 17-2-4-6-5-10-3-4 2-8 3-12 1-4-1-8-1-11-1Z" fill="#f2a4c8" />
                <path d="M13 19c4-6 11-8 18-5 4 2 7 5 8 9" fill="none" stroke="#ffd0e4" strokeLinecap="round" strokeWidth="3" opacity=".7" />
                <rect x="15" y="25" width="6" height="2" rx="1" fill="#fff4a3" transform="rotate(-20 18 26)" />
                <rect x="19" y="14" width="6" height="2" rx="1" fill="#7ed7ff" transform="rotate(22 22 15)" />
                <rect x="29" y="20" width="6" height="2" rx="1" fill="#ffffff" transform="rotate(-28 32 21)" />
                <rect x="26" y="30" width="6" height="2" rx="1" fill="#ff6b6b" transform="rotate(18 29 31)" />
                <circle cx="24" cy="24" r="7" fill="#171717" />
                <path d="M8 28c3 9 13 14 23 11 6-2 10-6 12-12" fill="none" stroke="#8d562b" strokeLinecap="round" strokeWidth="3" opacity=".45" />
            </svg>
        ),
    }[food] || (
        <svg {...baseProps}>
            <title>{food}</title>
            <circle cx="24" cy="24" r="18" fill="#f5f5f5" />
            <circle cx="24" cy="24" r="11" fill="#171717" />
            <path d="M12 36h24" stroke="#f5f5f5" strokeLinecap="round" strokeWidth="4" />
        </svg>
    );

    return (
        <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15" title={food}>
            {graphic}
        </span>
    );
};

const AthleteCard = ({ contestant }) => {
    const hasImage = contestant.img && contestant.img.startsWith('http') && !contestant.img.includes('go.dojiggy.io');
    const image = hasImage ? contestant.img : DEFAULT_AVATAR;
    const imageClassName = hasImage
        ? 'h-full w-full object-cover object-center'
        : 'h-full w-full object-contain object-center p-8';
    const finishes = contestant.finishes || [];
    const isDebut = contestant.experience === 0;
    const [firstName, ...lastNameParts] = contestant.name.split(' ');
    const lastName = lastNameParts.join(' ');

    return (
        <article className="mx-auto flex h-full w-full max-w-[260px] flex-col overflow-hidden rounded-lg border border-white/20 bg-neutral-900 shadow-xl">
            <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-800 sm:aspect-[3/4]">
                <img
                    className={imageClassName}
                    src={image}
                    alt={contestant.name}
                    loading="lazy"
                />
            </div>
            <div className="flex flex-1 flex-col p-2 sm:p-3">
                <p className="font-heavitas text-base leading-tight text-white sm:text-xl">
                    {firstName}
                    {contestant.nickname && (
                        <span className="text-gs_red"> "{contestant.nickname}"</span>
                    )}
                    {lastName && ` ${lastName}`}
                </p>

                <div className="mt-auto pt-3">
                    <p className="font-OpenSansSemiBold text-[10px] uppercase text-gs_purple sm:text-xs">Past performances</p>
                    {!isDebut && finishes.length > 0 ? (
                        <ul className="mt-2 space-y-1 font-OpenSansReg text-[11px] leading-snug text-neutral-100 sm:text-xs">
                            {finishes.map((finish) => (
                                <li
                                    className="flex items-center gap-2"
                                    key={`${contestant.name}-${finish.year}-${finish.food}-${finish.place}`}
                                >
                                    <FoodGraphic food={finish.food} />
                                    <span>{formatFinish(finish)}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 font-OpenSansReg text-[11px] text-neutral-100 sm:text-xs">Gullet Stuffer debut</p>
                    )}
                </div>

                {contestant.campaignUrl && (
                    <a
                        className="mt-3 inline-flex min-h-[36px] items-center justify-center rounded-md bg-gs_red px-2 py-2 font-OpenSansBold text-[11px] text-white transition hover:bg-white hover:text-black sm:mt-4 sm:min-h-[40px] sm:px-3 sm:text-xs"
                        href={contestant.campaignUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Support {firstName}
                        <FaExternalLinkAlt className="ml-2 h-3 w-3" aria-hidden="true" />
                    </a>
                )}
            </div>
        </article>
    );
};

const AthleteDivision = ({ title, accentClass, contestants }) => (
    <section className="mx-auto mt-6 w-11/12 rounded-lg border border-white/20 bg-black p-4 md:p-6">
        <div className="mb-4 flex flex-col gap-1 md:mb-6">
            <h2 className={`font-heavitas text-3xl md:text-5xl ${accentClass}`}>{title}</h2>
            <p className="font-OpenSansReg text-sm text-neutral-300 md:text-base">
                Meet the athletes raising funds and taking the table at Gullet Stuffer VIII.
            </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 2xl:grid-cols-5">
            {contestants.map((contestant) => (
                <AthleteCard key={contestant.name} contestant={contestant} />
            ))}
        </div>
    </section>
);

const GS8AthleteSection = ({ contestants }) => (
    <div className="mt-8">
        <AthleteDivision
            title="GSVIII Professionals"
            accentClass="text-gs_purple"
            contestants={contestants.pros}
        />
        <AthleteDivision
            title="GSVIII Amateurs"
            accentClass="text-gs_red"
            contestants={contestants.amateurs}
        />
    </div>
);

export default GS8AthleteSection;
