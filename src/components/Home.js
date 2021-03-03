import React,{useEffect} from 'react'
import Navbar from './ui/Nabvar'
import { Banner } from './ui/Banner';
import Stack from './ui/Stack';
import { About } from './ui/About';
import { Projects } from './ui/Projects';
import Media from './ui/Media';

export const Home = () => {
   
    return (
        <div className="w-full h-screen bg-black">
            <Navbar/>
           
            <Banner/>

            <Stack/>
            <About/>
            <Projects/>
            <div className="h-36">TODO...</div>
          
        </div>
    )
}
