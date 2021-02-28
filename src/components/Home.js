import React from 'react'
import Navbar from './ui/Nabvar'
import { Banner } from './ui/Banner';
import Stack from './Stack';

export const Home = () => {
    return (
        <div className="w-full h-screen bg-black">
            <Navbar/>
            <Banner/>

            <Stack/>
        </div>
    )
}
