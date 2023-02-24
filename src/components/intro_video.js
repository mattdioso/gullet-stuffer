import React from 'react';

import video from '../imgs/TestVideo.mp4';

class IntroVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ended: false
        }
        this.videoEnded = this.videoEnded.bind(this);
    }

    

    videoEnded() {
        this.setState({ ended: true })
        console.log("video ended: " + this.state.ended);
    }


    render() {
        return (
            <div className={this.state.ended ?  "w-full h-screen transition-opacity ease-out opacity-0 duration-1000" : "h-screen w-full z-50"}>
                <video ref="intro_video" src={video} type="video/mp4" className="w-full h-screen" autoPlay="true" onEnded={this.videoEnded}>

                </video>
            </div>

        );
    }
}

export default IntroVideo;