import React from 'react';

class SponsorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-full h-full bg-black block">
                <div className="pt-40 md:pt-36 w-full">
                  <p className="text-yellow-400 text-center text-5xl md:text-8xl">Our Sponsors</p>
                  <p className="text-white text-center text-xl md:text-2xl mt-4">Gullet Stuffer is proudly partnered with the following sponsors</p>
                </div>
                <div className="invisible max-h-0 opacity-0 md:flex md:w-full md:pt-20 md:place-content-center md:opacity-100 md:visible">
                    <a href="https://www.groceryoutlet.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/Grocery_Outlet-Logo.wine.png" width="150px" alt="groc-out"/></a>
                    &nbsp;&nbsp;
                    <a href="https://www.instagram.com/joycesmarketandcafe"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/joyces.jpeg" width="150px" alt="joyces"/></a>
                    &nbsp;&nbsp;
                    <a href="https://www.cappysgym.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/cappys.png" width="150px" alt="cappys"/></a>
                    &nbsp;&nbsp;
                    <a href="https://www.instagram.com/24thavegotsauce"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/24thave.png" width="150px" alt="24thave"/></a>
                    &nbsp;&nbsp;
                    <a href="https://elgrantacoseattle.com/menu.php"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/elgrantaco.png" width="150px" alt="elgrantaco"/></a>
                    &nbsp;&nbsp;
                    <a href="https://www.dodgeballseattle.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/dodgeball.jpeg" width="150px" alt="dodgeball"/></a>
                    &nbsp;&nbsp;
                    <a href="https://www.verasballard.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/veras_logo.png" width="150px" alt="veras"/></a>
                    &nbsp;&nbsp;
                </div>
                <div className="md:invisible md:max-h-0 md:opacity-0 block w-full pt-20 px-4 place-content-center">
                    <div className='flex w-full'>
                        <a href="https://www.groceryoutlet.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/Grocery_Outlet-Logo.wine.png" width="150px" alt="groc-out"/></a>
                        &nbsp;&nbsp;
                        <a href="https://www.instagram.com/joycesmarketandcafe"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/joyces.jpeg" width="150px" alt="joyces"/></a>
                        &nbsp;&nbsp;
                        <a href="https://www.cappysgym.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/cappys.png" width="150px" alt="cappys"/></a>
                        &nbsp;&nbsp;
                    </div>
                    <div className='flex w-full mt-4'>
                        <a href="https://www.instagram.com/24thavegotsauce"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/24thave.png" width="150px" alt="24thave"/></a>
                        &nbsp;&nbsp;
                        <a href="https://elgrantacoseattle.com/menu.php"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/elgrantaco.png" width="150px" alt="elgrantaco"/></a>
                        &nbsp;&nbsp;
                        <a href="https://www.dodgeballseattle.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/dodgeball.jpeg" width="150px" alt="dodgeball"/></a>
                        &nbsp;&nbsp;
                        <a href="https://www.verasballard.com/"><img src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/veras_logo.png" width="150px" alt="veras"/></a>
                        &nbsp;&nbsp;
                    </div>
                </div>
                <div className="w-full pt-16 md:pt-36 pl-4">
                    <p className="text-red-400 text-xl">Want to join the club?</p>
                    <p className="text-white">
                        Contact us for more information about becoming a supporter!
                    </p>
                    
                </div>

            </div>
        );
    }
}

export default SponsorPage;