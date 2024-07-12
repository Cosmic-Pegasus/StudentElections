import React from 'react'
import Results from './Result';
import Back_002 from './Back_002.mp4'



export default function ResultContainer() {
    return (
        <div>

            <video src={Back_002} autoPlay muted loop className='BgVid'></video>
            <div className="w-screen flex justify-center items-center tab-glass h-full flex-col pt-10">
                <Results />

            </div>

        </div>
    )
}
