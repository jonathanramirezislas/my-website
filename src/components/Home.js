import React from 'react'
import Navbar from './ui/Nabvar'
import { Banner } from './ui/Banner';
import Stack from './Stack';
import { About } from './ui/About';

export const Home = () => {
    return (
        <div className="w-full h-screen bg-black">
            <Navbar/>
            <Banner/>

            <Stack/>
            <About/>
            <div className="h-36">TODO...</div>
        </div>
    )
}
