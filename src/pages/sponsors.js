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
                <div className="block w-full pt-20 px-4 \">
                    <div className='flex mx-auto place-content-center space-x-4'>
                        <a className='w-24 h-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.groceryoutlet.com/" target="_blank"><img className="w-24 h-24 md:w-44 md:h-44 object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/Grocery_Outlet-Logo.wine.png" width="150px" alt="groc-out" /></a>
                        &nbsp;&nbsp;
                        <a className='w-24 h-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.instagram.com/24thavegotsauce" target="_blank"><img className="w-24 h-24 md:w-44 md:h-44 mx-auto object-center rounded-full aspect-square object-scale" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/24thavelogo2.png" width="150px" alt="24thave" /></a>
                        &nbsp;&nbsp;
                        <a className='w-24 h-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.cappysgym.com/" target="_blank"><img className="object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/cappys.png" width="150px" alt="cappys" /></a>
                        &nbsp;&nbsp;
                        <a className='hidden md:block w-24 h-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.lenysplace.net/" target="_blank"><img className="object-center sm:ml-5 rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/LenysPlace.jpg" width="130px" alt="lenys" /></a>
                        &nbsp;&nbsp;
                        <a className='hidden md:block w-24 h-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.thepickledchefnw.com/" target="_blank"><img className="object-center sm:ml-5 sm:mt-[-10px] sm:h-40 rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/PickledChef1.png" width="125px" alt="pickledchef" /></a>
                        &nbsp;&nbsp;
                        <a className='hidden md:block md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.msjoycescatering.com/" target="_blank"><img className="w-24 md:w-44 md:h-42 object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/joyces.jpeg" width="150px" alt="joyces" /></a>
                        &nbsp;&nbsp;
                    </div>
                    <div className='flex w-full mt-4 place-content-center space-x-4'>

                        <a className='w-24 h-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://egtrestaurant.com/" target="_blank"><img className="w-24 h-24 md:w-44 md:h-44 mx-auto aspect-square object-center rounded-full object-scale-down" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/HQlogofilled%20copy.png" alt="elgrantaco" /></a>
                        &nbsp;&nbsp;
                        <a className='h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://www.dodgeballseattle.com/" target="_blank"><img className=" mx-auto object-center rounded-full" src="https://dodgeballseattle.com/wp-content/uploads/2021/07/ay27v-bbwgy.svg" width="150px" alt="dodgeball" /></a>
                        &nbsp;&nbsp;
                        <a className='h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://www.johnnietz.com/about" target="_blank"><img className="object-center mx-auto object-scale-down " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/johnnieteez-1.jpg" width="150px" alt="portlandminidonut" /></a>
                        &nbsp;&nbsp;
                        <a className='hidden md:block h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://www.verasballard.com/" target="_blank"><img className="md:h-44 md:w-44 object-center mx-auto object-scale-down " src="https://www.verasballard.com/wp-content/uploads/2019/12/veras_logo.png" width="150px" alt="veras" /></a>
                        &nbsp;&nbsp;
                        <a className='hidden md:block h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://inochitaiko.com/" target="_blank"><img className="md:h-44 md:w-44 object-center mx-auto object-scale-down " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/inochitaiko.png" width="200px" alt="inochi" /></a>
                        &nbsp;&nbsp;
                        <a className='hidden md:block aspect-square h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://www.instagram.com/aftergloneon" target="_blank"><img className="w-24 h-20 md:w-44 md:h-44 object-center mx-auto object-scale-down " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/hof_pics/iconic_moments/purple_chrome_transparent1_a944d3d8-b5e8-466f-b8d0-71b80000be52.png" alt="aftergloneon" /></a>
                    </div>
                    <div className="md:hidden flex mt-4 place-content-center space-x-4">
                        <a className='h-24 w-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.msjoycescatering.com/" target="_blank"><img className="md:w-44 md:h-42 object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/joyces.jpeg" width="150px" alt="joyces" /></a>
                        &nbsp;&nbsp;
                        <a className='h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://www.verasballard.com/" target="_blank"><img className="object-center mx-auto object-scale-down " src="https://www.verasballard.com/wp-content/uploads/2019/12/veras_logo.png" width="150px" alt="veras" /></a>
                        &nbsp;&nbsp;
                        <a className='h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://www.instagram.com/aftergloneon" target="_blank"><img className="w-24 h-20 md:w-44 md:h-44 object-center mx-auto object-scale-down " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/hof_pics/iconic_moments/purple_chrome_transparent1_a944d3d8-b5e8-466f-b8d0-71b80000be52.png" alt="aftergloneon" /></a>
                        &nbsp;&nbsp;
                    </div>
                    <div className="md:hidden flex mt-4 place-content-center space-x-4">
                        <a className='w-24 h-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.lenysplace.net/" target="_blank"><img className="object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/LenysPlace.jpg" width="135px" alt="lenys" /></a>
                        &nbsp;&nbsp;
                        <a className='w-24 h-24 md:h-44 md:w-44 place-content-center flex rounded-full border-2 border-yellow-400' href="https://www.thepickledchefnw.com/" target="_blank"><img className="object-center rounded-full" src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/PickledChef1.png" height="210px" width="115px" alt="pickledchef" /></a>
                        &nbsp;&nbsp;
                        <a className='md:block h-24 w-24 md:h-44 md:w-44 flex rounded-full border-2 border-yellow-400' href="https://inochitaiko.com/" target="_blank"><img className="md:h-44 md:w-44 object-center mx-auto object-scale-down " src="https://storage.googleapis.com/gulllet-stuffer.appspot.com/Sponsors/inochitaiko.png" width="200px" alt="inochi" /></a>
                        &nbsp;&nbsp;
                    </div>
                </div>
                <div className="w-full pt-16 md:pt-24 pl-4">
                    <p className="text-gold text-3xl">Want to join the club?</p>
                    <p className="text-white text-xl">
                        Contact us for more information about becoming a supporter!
                    </p>

                </div>
                <footer className='h-36 md:h-20 w-full bg-black'></footer>
            </div>
        );
    }
}

export default SponsorPage;