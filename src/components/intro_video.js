import React from 'react';


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
                
            </div>

        );
    }
}

export default IntroVideo;