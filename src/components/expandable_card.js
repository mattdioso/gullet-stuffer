import React, { useState, ReactElement } from 'react';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { RiAddCircleFill, RiMessage3Line, RiUserLine, RiMailLine } from "react-icons/ri";


export const BoxedButton = ({
    text,
    onClick,
    icon,
    bg = "bg-pink-500",
    className,
    color = "text-white"
}) => {
    return (
        <div
            onClick={() => onClick && onClick()}
            className={`${className} ${bg} cursor-pointer text-white drop-shadow-xl px-4 py-3 rounded-lg flex flex-row justify-start items-center`}
        >
            {icon && icon}
            <div className={`${color} ml-1`}>{text}</div>
        </div>
    );
};

export const WhiteButtons = ({ icon, onClick, className }) => {
    return (
        <BoxedButton
            bg={"bg-gray-100"}
            icon={icon}
            onClick={onClick}
            className={className}
        />
    );
};

export const Headline = ({ text }) => {
    return (
        <h3 className="text-3xl font-pop font-bolder text-slate-800 mb-2">
            {text}
        </h3>
    );
};

export const LightText = ({ text }) => {
    return <p className="text-sm font-pop font-light text-gray-700">{text}</p>;
};

export const UserLightText = ({
    text,
    hasIcon
}) => {
    return (
        <div className="flex flex-row mr-5 justify-start items-center ">
            {hasIcon && <RiUserLine size={18} className="text-pink-500 mr-1" />}
            <LightText text={text} />
        </div>
    );
};

export const EmailLightText = ({ email }) => {
    return (
        <div className="flex flex-row mr-5 justify-start items-center">
            <RiMailLine size={18} className="text-pink-500 mr-1" />
            <LightText text={email} />
        </div>
    );
};

const ExpandableCard = ({ image, username, donationUrl, email, custom }) => {

    const [open, setOpen] = useState(false)
    const containerControls = useAnimation();
    const imageContainerControls = useAnimation();
    const imageControls = useAnimation();
    const sideImageText = useAnimation();
    const bottomContainerControls = useAnimation();
    const bottomButtons = useAnimation();
    const bottomTexts = useAnimation();

    const containerVariants = {
        open: {
            flexDirection: 'column'
        },
        close: {
            flexDirection: 'row'
        }
    }

    const imageContainerVariants = {
        open: {
            width: "100%",
            height: "400px",
            padding: '18rem 0rem 0rem 0rem',
            margin: "0rem 0rem 0rem 0rem",
            borderWidth: "0px 0px 4px 0px"
        },
        close: {
            width: "4rem",
            height: "4rem",
            padding: '1.5rem 0rem 0rem 0rem',
            margin: "1rem 0.5rem 1rem 1rem",
            borderWidth: "4px 4px 4px 4px"
        }
    };

    const sideImageTextVariants = {
        open: {
            opacity: 0,
            x: 25,
            display: "none",
            transition: {
                duration: 0.4,
                display: {
                    delay: 0.4
                }
            }
        },
        close: {
            opacity: 1,
            x: 0,
            display: "flex"
        }
    };

    const bottomContainerVariants = {
        open: {
            height: "fit-content",
            transition: {
                duration: 0.4
            }
        },
        close: {
            height: "0px",
            transition: {
                duration: 0.2
            }
        }
    };

    const bottomOpacity = {
        open: {
            opacity: 1,
            transition: {
                duration: 0.4
            }
        },
        close: {
            opacity: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    const imageVariants = {
        open: (i) => ({
            y: i
        }),
        close: { y: 0 }
    };

    const handleOpen = async () => {
        await sideImageText.start("open");
        await containerControls.start("open");
        setTimeout(async () => {
            imageControls.start("open");
            imageContainerControls.start("open");
            await bottomContainerControls.start("open");
            await bottomButtons.start("open");
            await bottomTexts.start("open");
        }, 50);
    };
    const handleClose = async () => {
        await bottomTexts.start("close");
        await bottomButtons.start("close");
        await bottomContainerControls.start("close");
        setTimeout(async () => {
            imageControls.start("close");
            imageContainerControls.start("close");
            await containerControls.start("close");
            await sideImageText.start("close");
        }, 50);
    };

    const handleCardClick = async () => {
        if (open) {
            await handleClose();
            setOpen(false);
        } else {
            await handleOpen();
            setOpen(true);
        }
    };

    return (
        <div className="max-w-[30rem] mb-8 m-auto flex flex-col w-100 bg-gradient-to-r from-gray-100 to-gray-300 min-h-16 rounded-lg">
            <motion.div
                onClick={handleCardClick}
                initial="close"
                animate={containerControls}
                variants={containerVariants}
                className="flex w-full cursor-pointer"
            >
                {/* IMAGE */}
                <motion.div
                    initial="close"
                    animate={imageContainerControls}
                    variants={imageContainerVariants}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-zinc-900 drop-shadow-xl border-white shrink-0 overflow-hidden flex justify-center items-center"
                >
                    <motion.img
                        src={image}
                        alt={username}
                        animate={imageControls}
                        custom={custom}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        variants={imageVariants}
                        initial="close"
                    />
                </motion.div>

                {/* SIDE TEXT */}
                <motion.div
                    initial="close"
                    animate={sideImageText}
                    variants={sideImageTextVariants}
                    className="flex-col my-4 w-full"
                >
                    <Headline text={username} />
                    {username && <UserLightText text={username} hasIcon={false} />}
                </motion.div>

                {/* BOTTOM INFO */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial="close"
                            className="w-full p-5"
                            transition={{ ease: "easeInOut" }}
                            animate={bottomContainerControls}
                            variants={bottomContainerVariants}
                        >
                            <motion.div
                                animate={bottomButtons}
                                variants={bottomOpacity}
                                initial="close"
                                className="flex w-full flex-row justify-between"
                            >
                                <div className="w-auto">
                                    <BoxedButton
                                        text="Connect"
                                        icon={<RiAddCircleFill size={20} className="text-white"
                                            onClick={() => window.open(donationUrl, '_blank')} />}
                                    />
                                </div>
                                <div className="w-auto flex flex-row justify-between mb-8">
                                    <WhiteButtons
                                        icon={<RiMailLine size={20} className="text-violet-900" />}
                                        className="mr-3"
                                    />
                                    <WhiteButtons
                                        icon={
                                            <RiMessage3Line size={20} className="text-violet-900" />
                                        }
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                // transition={{ delay: .2 }}
                                animate={bottomTexts}
                                variants={bottomOpacity}
                                initial="close"
                                className="flex w-full flex-col justify-center items-center mb-8"
                            >
                                <Headline text={username} />
                                <div className="w-full flex flex-row justify-center">
                                    {username && <UserLightText text={username} hasIcon />}
                                    {email && <EmailLightText email={email} />}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );

}

export default ExpandableCard;