import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PrevButton, NextButton, usePrevNextButtons } from './ig_feed_buttons';
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './ig_feed_selected_snap_display';
import { SocialIcon } from 'react-social-icons';

const IGFeed = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
    const [ig_items, setIGItems] = useState([]);
    const user_id = process.env.REACT_APP_IG_USER_ID;
    const access_token = process.env.REACT_APP_IG_ACCESS_TOKEN;

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

    const media_url = `https://graph.instagram.com/${user_id}/media?access_token=${access_token}`;
    //const post_url = `https://graph.instagram.com/${}`;

    useEffect(() => {
        const fetch_post = async (id) => {
            const post_url = `https://graph.instagram.com/${id}?access_token=${access_token}&fields=media_url,permalink,media_type`;
            const res = await fetch(post_url);
            const json = (await res.json());

            const ig_item = {
                'permalink': json.permalink,
                'mediaUrl': json.media_url,
                'mediaType': json.media_type,
                'caption': json.caption
            };

            return ig_item;
        }
        const doFetch = async () => {
            if (!user_id || !access_token) {
                console.log(`userId or access_token is undefined: `, { user_id, access_token });
                return;
            }
            const res = await fetch(media_url);
            const json = (await res.json());


            const all_items = []

            for (let i = 0; i < json.data.length; i++) {
                const item = json.data[i];
                const item_id = item.id;
                const ig_item = await fetch_post(item_id);
                if (ig_item.mediaType == 'IMAGE') {
                    ig_item.key = i;
                    all_items.push(ig_item);
                }
                if (all_items.length >= 10) {
                    break;
                }
            }
            setIGItems(all_items);
        }
        doFetch();
    }, [user_id, access_token, media_url]);

    return (

        <div className="overflow-hidden mx-auto" ref={emblaRef}>

            <div id="embla_container" className="flex touch-pan-y touch-pinch-zoom gap-4">
                {ig_items.map((item) => (
                    <div className="flex-none min-w-0">
                        <a href={item.permalink} target="_blank">
                            <img className="h-64" src={item.mediaUrl} alt={item.key}></img>
                        </a>
                    </div>
                ))}
            </div>
            <div id="embla_controls" className="flex justify-between gap-5 mt-7">
                <div id="embla_buttons" className="grid grid-cols-2 gap-2.5 align-center">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
                <a href="https://www.instagram.com/gulletstuffer/" target="_blank" className="flex border border-white rounded-3xl pr-4">
                    <SocialIcon network="instagram" bgColor="transparent" fgColor="white" url="https://www.instagram.com/gulletstuffer/" />
                    <p className="text-white text-base md:text-xl my-auto">gulletstuffer</p>
                </a>
                <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
            </div>
        </div>

    )
}

export default IGFeed;