import React from 'react';

class AltHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="w-full h-full">
                
                <div className="absolute top-36 mx-12 sm:mx-0">
                  <p className="text-white text-center text-xl sm:text-6xl sm:mx-36">Seattle's Finest</p>
                  
                  <p className="text-orange-400 text-center text-xl sm:text-6xl sm:mx-36">Competitive Eating Competition</p>
                
                </div>
                <div className="pt-24 sm:pt-0">
                <video autoPlay loop muted playsInline id='intro_video' className="h-full w-full -z-10 pt-48">
                    <source src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Videos/TestVideo.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
        );
    }
}

export default AltHomePage;