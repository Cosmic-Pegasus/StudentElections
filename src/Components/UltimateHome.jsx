import React from 'react'
import Back_002 from './Back_002.mp4'
import { Link } from 'react-router-dom'

export default function UltimateHome() {
    return (
        <div>
            <video src={Back_002} autoPlay muted loop className='BgVid'></video>
            <div className="w-screen tab-glass h-screen ">
                <img src="/images/logo.png" alt="" className="logo fade-animation" />
                <h1 className="heading scaleLeft-animation">
                    Welcome to the Student Election of the session 2024-25.
                </h1>
                <div className="my-10 ml-8">
                  <Link to="headboygirl">  <button type="button" class="btn text-animation">
                        <strong className='quicksand'>VOTE NOW</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button></Link>
                </div>
                <div className="side-container">

                    <div class="rocket bottom-animation">
                        <div class="rocket-body">
                            <div class="body"></div>
                            <div class="fin fin-left"></div>
                            <div class="fin fin-right"></div>
                            <div class="window"></div>
                        </div>
                        <div class="exhaust-flame"></div>
                        <ul class="exhaust-fumes">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class="star">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
