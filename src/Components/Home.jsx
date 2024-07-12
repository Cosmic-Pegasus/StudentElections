import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import HeadBoyGirl from './HeadBoyGirl';
import SportsIncharge from './SportsIncharge';
import CoCircularIncharge from './CoCircularIncharge';
import DisciplineIncharge from './DisciplineIncharge';
import Back_002 from './Back_002.mp4'


const Home = () => {
    return (
        <>

            <video src={Back_002} autoPlay muted loop className='BgVid'></video>
            <div className="overflow flex justify-center items-center tab-glass h-screen">

                <div className='container flex flex-col items-center justify-center w-screen my-12 '>
                    <div className="overflow-x-auto flex flex-col items-center justify-center  ">
                        <Tabs aria-label="Full width tabs" variant="fullWidth" className='quicksand'>

                            <Tabs.Item active title="Head Boy / Head Girl" className='' icon={HiUserCircle}>
                                <div className="my-12 bottom-animation"><HeadBoyGirl /></div>
                            </Tabs.Item>
                            <Tabs.Item title="Co-Circular Incharge" icon={MdDashboard}>
                                <div className="my-12 bottom-animation"><CoCircularIncharge /></div>
                            </Tabs.Item>
                            <Tabs.Item title="Discipline Incharge" icon={HiAdjustments}>
                                <div className="my-12 bottom-animation"><DisciplineIncharge /></div>
                            </Tabs.Item>
                            <Tabs.Item title="Sports Incharge" icon={HiClipboardList}>
                                <div className="my-12 bottom-animation"><SportsIncharge /></div>
                            </Tabs.Item>

                        </Tabs>
                    </div>



                    {/* <nav>
                <ul>
                    <li><Link to="/headboygirl">Vote for Head Boy/Girl</Link></li>
                    <li><Link to="/sportsincharge">Vote for Sports Incharge</Link></li>
                    <li><Link to="/cocircularincharge">Vote for Co-Curricular Incharge</Link></li>
                    <li><Link to="/disciplineincharge">Vote for Discipline Incharge</Link></li>
                    <li><Link to="/results">View Results</Link></li>
                </ul>
             </nav> */}
                </div>
            </div>

        </>
    );
};

export default Home;
