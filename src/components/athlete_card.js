import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt } from 'react-icons/fa'

const AthleteCard = ({ name, campaignUrl, imgUrl }) => {
    const [isOpen, setIsOpen] = useState(false)

    const expand_transition = {
        duration: 0.4,
        delay: 0.2,
        type: "spring"
    }

    return (
        <motion.div layout transition={expand_transition} onClick={() => setIsOpen(!isOpen)} className={`relative mt-3 border-white bg-gold w-72 border rounded-xl ${isOpen ? 'h-96 w-81' : 'h-72 w-72'}`}>
            <motion.img mode="wait" layout className="w-68 h-70 rounded-xl" src={imgUrl} alt="guzzler" />
            {isOpen && campaignUrl &&
                <div className="w-full text-center mx-auto mt-4">
                    <a className="block w-3/4 sm:w-full h-[60px] mx-auto" href={campaignUrl} target="_blank">
                        <div className="w-3/4 md:w-2/3 h-full md:h-full bg-red-600 flex mx-auto place-content-center rounded-2xl my-auto">
                            <p className="text-white my-auto px-1 text-sm md:text-xl 2xl:text-xl text-center">{`Support ${name}!`}</p>
                        </div>
                    </a>
                </div>
            }
        </motion.div>
    )
}

export default AthleteCard;