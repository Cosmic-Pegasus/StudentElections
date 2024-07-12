import React from 'react'
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import HeadBoyGirl from './HeadBoyGirl';
import SportsIncharge from './SportsIncharge';
import CoCircularIncharge from './CoCircularIncharge';
import DisciplineIncharge from './DisciplineIncharge';
import Results from './Result';
import Back_002 from './Back_002.mp4'
import Nav from './Nav';


export default function Home2() {
    return (
        <div>

            <video src={Back_002} autoPlay muted loop className='BgVid'></video>
            <div className="w-screen flex justify-center items-center tab-glass h-full flex-col">
                <div className="h-screen w-screen flex justify-center items-center flex-col">
                    <Nav />
                    <div className='container flex flex-col items-center justify-center w-screen my-12 '>
                        <Routes>
                            <Route exact path="/headboygirl" element={<HeadBoyGirl />} />
                            <Route exact path="/sports" element={<SportsIncharge />} />
                            <Route exact path="/cocircullar" element={<CoCircularIncharge />} />
                            <Route exact path="/discipline" element={<DisciplineIncharge />} />

                        </Routes>
                    </div>
                </div>

            </div>

        </div>
    )
}
