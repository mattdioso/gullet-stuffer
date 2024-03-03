import React from 'react';

class SponsorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-full h-full bg-black block">
                <div className="pt-40 md:pt-36 w-full">
                  <p className="text-yellow-400 text-center text-5xl md:text-7xl">Our Community Partners</p>
                  <p className="text-white text-center text-xl md:text-2xl mt-4">Gullet Stuffer is proudly partnered with the following communities</p>
                </div>
                {/* <div className="invisible max-h-0 opacity-0 md:flex md:w-full md:pt-20 md:place-content-center md:opacity-100 md:visible">
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
                </div> */}
                <div className="block w-full pt-20 px-4 \">
                    <div className='flex mx-auto place-content-center space-x-4'>
                        <a className='flex rounded-full border-2 border-yellow-400' href="https://www.groceryoutlet.com/"><img className="object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/Grocery_Outlet-Logo.wine.png" width="150px" alt="groc-out"/></a>
                        &nbsp;&nbsp;
                        <a className='flex rounded-full border-2 border-yellow-400' href="https://www.instagram.com/24thavegotsauce"><img className="mx-auto object-center rounded-full aspect-square object-scale" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/24thave.png" width="150px" alt="24thave"/></a>
                        &nbsp;&nbsp;
                        <a className='flex rounded-full border-2 border-yellow-400' href="https://www.cappysgym.com/"><img className="object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/cappys.png" width="150px" alt="cappys"/></a>
                        &nbsp;&nbsp;
                        <a className='flex rounded-full border-2 border-yellow-400' href="https://www.instagram.com/joycesmarketandcafe"><img className="object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/joyces.jpeg" width="150px" alt="joyces"/></a>
                        &nbsp;&nbsp;
                    </div>
                    <div className='flex w-full mt-4 place-content-center'>
                        
                        <a className='h-44 w-44 flex rounded-full border-2 border-yellow-400' href="https://elgrantacoseattle.com/menu.php"><img className="mx-auto object-center rounded-full object-scale-down" src="https://elgrantacoseattle.com/images/logo/logo.png" width="150px" alt="elgrantaco"/></a>
                        &nbsp;&nbsp;
                        <a className='h-44 w-44 flex rounded-full border-2 border-yellow-400' href="https://www.dodgeballseattle.com/"><img className=" mx-auto object-center rounded-full" src="https://dodgeballseattle.com/wp-content/uploads/2021/07/ay27v-bbwgy.svg" width="150px" alt="dodgeball"/></a>
                        &nbsp;&nbsp;
                        <a className='h-44 w-44 flex rounded-full border-2 border-yellow-400' href="https://www.verasballard.com/"><img className="object-center mx-auto object-scale-down " src="https://www.verasballard.com/wp-content/uploads/2019/12/veras_logo.png" width="150px" alt="veras"/></a>
                        &nbsp;&nbsp;
                    </div>
                </div>
                <div className="w-full pt-16 md:pt-24 pl-4">
                    <p className="text-red-400 text-3xl">Want to join the club?</p>
                    <p className="text-white text-xl">
                        Contact us for more information about becoming a supporter!
                    </p>
                    
                </div>

            </div>
        );
    }
}

export default SponsorPage;