import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './ig_feed_buttons';
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './ig_feed_selected_snap_display';
import { SocialIcon } from 'react-social-icons';
import { fetchInstagramFeed } from './ig_feed_api';

const IGFeed = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
    const [igItems, setIGItems] = useState([]);
    const [error, setError] = useState(null);
    const feedEndpoint = process.env.REACT_APP_IG_FEED_URL || '/api/instagram-feed';
    const accountUsername = process.env.REACT_APP_IG_USERNAME || 'gulletstuffer';
    const accountUrl = `https://www.instagram.com/${accountUsername}/`;

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

    useEffect(() => {
        let isMounted = true;

        const loadFeed = async () => {
            try {
                const items = await fetchInstagramFeed({
                    endpoint: feedEndpoint,
                    limit: 10
                });

                if (!isMounted) return;

                setIGItems(items);
                setError(null);
            } catch (err) {
                if (!isMounted) return;

                setIGItems([]);
                setError(err);
                if (process.env.NODE_ENV !== 'production') {
                    console.warn('Unable to load Instagram feed:', err);
                }
            }
        };

        loadFeed();

        return () => {
            isMounted = false;
        };
    }, [feedEndpoint]);

    if (!igItems.length) {
        if (!error) {
            return null;
        }

        return (
            <div className="w-11/12 md:w-2/3 mx-4 mt-4 p-4 border border-white rounded-xl md:mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-white text-xl">Follow us on Instagram</p>
                    <a href={accountUrl} target="_blank" rel="noreferrer" className="flex w-fit border border-white rounded-3xl pr-4">
                        <SocialIcon network="instagram" bgColor="transparent" fgColor="white" url={accountUrl} />
                        <p className="text-white text-base md:text-xl my-auto">{accountUsername}</p>
                    </a>
                </div>
                {process.env.NODE_ENV !== 'production' && (
                    <p className="text-gs_red text-sm mt-3">{error.message}</p>
                )}
            </div>
        );
    }

    return (
        <div className="w-11/12 md:w-2/3 mx-4 mt-4 p-4 border border-white rounded-xl md:mx-auto">
            <div className="w-full">
                <p className="text-white text-xl">Follow us on Instagram</p>
            </div>
            <div className="overflow-hidden mx-auto" ref={emblaRef}>
                <div id="embla_container" className="flex touch-pan-y touch-pinch-zoom gap-4">
                    {igItems.map((item) => (
                        <div key={item.id} className="flex-none min-w-0">
                            <a href={item.permalink} target="_blank" rel="noreferrer">
                                <img className="h-64" src={item.mediaUrl} alt={item.caption || `Instagram post from ${accountUsername}`}></img>
                            </a>
                        </div>
                    ))}
                </div>
                <div id="embla_controls" className="flex justify-between gap-5 mt-7">
                    <div id="embla_buttons" className="grid grid-cols-2 gap-2.5 align-center">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                    <a href={accountUrl} target="_blank" rel="noreferrer" className="flex border border-white rounded-3xl pr-4">
                        <SocialIcon network="instagram" bgColor="transparent" fgColor="white" url={accountUrl} />
                        <p className="text-white text-base md:text-xl my-auto">{accountUsername}</p>
                    </a>
                    <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
                </div>
            </div>
        </div>
    )
}

export default IGFeed;
