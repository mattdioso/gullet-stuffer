import React from 'react';

export default function Success() {
    return (
        <section className="w-full h-screen pt-36 md:pt-36 bg-black text-center text-white text-lg">
            <h1 className="text-4xl">Order Success</h1>
            <p>Thanks for ordering.</p>
            <a href="/merch">Return to Products</a>
        </section>
    )
}