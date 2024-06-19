import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PrevButton, NextButton, usePrevNextButtons } from './ig_feed_buttons';

const IGFeed = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel([Autoplay()]);
    const [ig_items, setIGItems] = useState([]);
    const user_id = process.env.REACT_APP_IG_USER_ID;
    const access_token = process.env.REACT_APP_IG_ACCESS_TOKEN;

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    const media_url = `https://graph.instagram.com/${user_id}/media?access_token=${access_token}`;
    //const post_url = `https://graph.instagram.com/${}`;

    useEffect(() => {
        const fetch_post = async(id) => {
            const post_url = `https://graph.instagram.com/${id}?access_token=${access_token}&fields=media_url,permalink,media_type,caption`;
            const res = await fetch(post_url);
            const json = (await res.json());
            console.log(json);
            const ig_item = {
                'permalink': json.permalink,
                'mediaUrl': json.media_url,
                'mediaType': json.media_type,
                'caption': json.caption
            };

            return ig_item;
        }
        const doFetch = async() => {
            if (!user_id || !access_token) {
                console.log(`userId or access_token is undefined: `, {user_id, access_token});
                return;
            }
            const res = await fetch(media_url);
            const json = (await res.json());
            console.log(json)

            const all_items = []
            console.log(all_items.length)
            for (let i = 0; i < json.data.length; i++) {
                
                const item = json.data[i];
                const item_id = item.id;
                const ig_item = await fetch_post(item_id);
                if (ig_item.mediaType == 'IMAGE') {
                    ig_item.key = i;
                    console.log(ig_item);
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
        <div className="overflow-hidden w-1/2 mx-auto" ref={emblaRef}>
            <div id="embla_container" className="flex touch-pan-y touch-pinch-zoom">
                {ig_items.map((item) => (
                    <div className="flex-[0_0_100%] min-w-0">
                        <img className="h-96" src={item.mediaUrl} alt={item.key}></img>
                    </div>
                ))}
            </div>

            <div id="embla_controls" className="grid justify-between gap-5 mt-7">
                <div id="embla_buttons" className="grid grid-cols-2 gap-2.5 align-center">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}

export default IGFeed;