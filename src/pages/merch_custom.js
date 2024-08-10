import { color } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import { Select, Option }  from '@material-tailwind/react';

const CheckoutModal = ({open, onClose, product}) => {
    let size_options = [
        {
            'value': 'small',
            'label': 'S'
        },
        {
            'value': 'medium',
            'label': 'M'
        },
        {
            'value': 'large',
            'label': 'L'
        },
        {
            'value': 'x-large',
            'label': 'XL'
        },
        {
            'value': 'x-x-large',
            'label': 'XXL'
        }
    ];
    let color_options = [
        {
            'value': 'pink',
            'label': 'Pink'
        },
        {
            'value': 'white',
            'label': 'White'
        }
    ];
    let pick_options = [
        {
            'value': 'pickup',
            'label': 'Yes, see you there!'
        },
        {
            'value': 'ship',
            'label': 'No, please ship to me'
        }
    ]
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [pickup, setPickup] = useState('');
    const stripe_url = process.env.REACT_APP_STRIPE_URL;
    const checkout_url = stripe_url + "/checkout_sessions";

    const changeSize = (event) => {
        const value = event.target.value;
        setSize(value);
    }

    const changeColor = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const changePickup = (event) => {
        const value = event.target.value;
        setPickup(value);
    }

    return (
        <div onClick={onClose}
            className={`fixed overflow-y-scroll mt-20 mb-4 md:mt-0 inset-0 focus:outline-none flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`md:flex bg-[rgba(255,255,255,0.1)] backdrop-blur-xl rounded-xl mt-48 md:mt-0 md:mb-0 mb-4 w-3/4 md:w-1/2 md:h-1/2 shadow p-2 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div className="flex w-full md:w-1/2 bg-black p-2">
                    <img className="h-full my-auto" src={product.images[0]}>
                    </img>
                </div>
                <div className="flex w-full md:w-1/2 bg-black text-center text-white font-sans">
                    <form action={checkout_url} method="POST" className="m-auto space-y-1 md:space-y-2">
                        <p>{product.name}</p>
                        <label for="size" class="mb-2 text-sm font-medium text-white dark:text-white">Select a size</label>
                        <select id="size" onChange={changeSize} className="w-3/4 mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected></option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="extralarge">XL</option>
                            
                        </select>
                        <label for="color" class="mb-2 text-sm font-medium text-white dark:text-white">Select a color</label>
                        <select id="color" onChange={changeColor} class="w-3/4 mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected></option>
                            <option value="white">White</option>
                            {/* <option value="pink">Pink</option> */}
                        </select>
                        {/* <label for="pickup" class="mb-2 text-sm font-medium text-white dark:text-white">Pickup?</label>
                        <select id="pickup" onChange={changePickup} class="w-3/4 mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected></option>
                            <option value="pickup">Yes, see you there!</option>
                            <option value="ship">No, please ship to me</option>
                        </select> */}
                        <input type="hidden" name="size" value={size}/>
                        <input type="hidden" name="color" value={color}/>
                        <input type="hidden" name="pickup" value='ship'/>
                        <input type="hidden" name="priceId" value={product.price_item.id}/>
                        { (size && color) ? 
                        <button type='submit' role='link' className="font-sans text-sm font-bold w-3/4 mx-auto rounded-lg mb-2 p-2 text-black text-center bg-orange-400">
                            Go to Checkout
                        </button> : 
                        <button className="font-sans text-sm font-bold w-3/4 mx-auto rounded-lg mb-2 p-2 text-gray-800 text-center bg-orange-400" disabled>
                            Please fill all fields
                        </button>                        }
                    </form>
                </div>
                <div onClick={onClose} className="absolute top-[-10px] right-[-10px] p-1 rounded-full text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                    <X />
                </div>
            </div>
            
        </div>
    )
}

const CustomMerchPage = () => {

    const [ products, setProducts ] = useState([]);
    const [ modalToggle, setModalToggle ] = useState(false);
    const stripe_url = process.env.REACT_APP_STRIPE_URL;
    const products_url = `${stripe_url}/products`;

    useEffect(() => {
        const get_product_price = async(id) => {
            const price_url = `${stripe_url}/price/${id}`;
            const res = await fetch(price_url);
            const json = (await res.json());
            const price_item = {
                'currency': json.currency,
                'unit_amount': json.unit_amount,
                'id': json.id

            }
            return price_item;
        }
        const doFetch = async() => {
            const res = await fetch(products_url);
            const json = await(res.json());

            const all_products = []
            for (let i = 0; i < json.data.length; i++) {
                const item = json.data[i];
                const product = {
                    'id': item.id,
                    'price_item': await get_product_price(item.default_price),
                    'description': item.description,
                    'images': item.images,
                    'name': item.name
                }
                
                all_products.push(product);
            }
            setProducts(all_products);
        }
        doFetch();
    }, [products_url]);

    return (

        <section className="w-full h-screen pt-36 md:pt-36 bg-black overflow-y-scroll">
            <div className="w-11/12 mx-auto">
                <p className="text-white text-2xl ml-2 m-2">
                    Check out our merch!
                </p>
            
                <div className="flex w-full">
                    {products && (
                        <>
                            {products.map((product) => (
                                // <form action={checkout_url} method="POST" className="w-60 mx-auto my-4 border border-white p-6 rounded-md bg-[rgba(255,255,255,0.1)]">
                                <div className="w-60 mx-auto my-4 border border-white p-6 rounded-md bg-[rgba(255,255,255,0.1)]">
                                    <img className="max-h-[180px] mx-auto" src={product.images[0]} alt="image">
                                    </img>
                                    <p className="text-white text-center font-sans font-bold">
                                        {product.name}
                                    </p>
                                    <p className="text-white text-xs font-sans text-center">
                                        {product.description}
                                    </p>
                                    <p className="text-white font-sans text-center font-bold text-lg">
                                        ${product.price_item.unit_amount/100}
                                    </p>
                                    <input type="hidden" name="priceId" value={product.price_item.id}/>
                                    <CheckoutModal open={modalToggle} product={product} onClose={() => setModalToggle(!modalToggle)} />
                                    <button type='submit' role='link' onClick={() => {setModalToggle(!modalToggle)}} className="font-sans text-sm font-bold w-full mx-auto rounded-lg p-2 text-center bg-orange-400">
                                        Purchase
                                    </button>
                                </div>
                                //</form>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <footer className='h-24 bg-black'></footer>
        </section>
        
    )
}

export default CustomMerchPage;