import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiAngelWings } from "react-icons/gi";
import { BiSolidBasketball } from "react-icons/bi";
import { RiEmotionHappyFill } from "react-icons/ri";
import { MdLocalActivity } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

export default function Nav() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    const handleItemClick = (path) => {
        setActive(path);
    };

    return (
        <div>
            <nav className="navElections">
                <ul className="nav-list">
                    <Link to='/headboygirl' onClick={() => handleItemClick('/headboygirl')}>
                        <li className={`nav-item ${active === '/headboygirl' ? 'active' : ''}`}>
                            <span><GiAngelWings /></span>
                            <h1 className="nav-typography">Head Boy/Girl</h1>
                        </li>
                    </Link>
                    <Link to='/cocircullar' onClick={() => handleItemClick('/cocircullar')}>
                        <li className={`nav-item ${active === '/cocircullar' ? 'active' : ''}`}>
                            <span><MdLocalActivity /></span>
                            <h1 className="nav-typography">Co-Curricular Head</h1>
                        </li>
                    </Link>
                    <Link to='/sports' onClick={() => handleItemClick('/sports')}>
                        <li className={`nav-item ${active === '/sports' ? 'active' : ''}`}>
                            <span><BiSolidBasketball /></span>
                            <h1 className="nav-typography">Sports Head</h1>
                        </li>
                    </Link>
                    <Link to='/discipline' onClick={() => handleItemClick('/discipline')}>
                        <li className={`nav-item ${active === '/discipline' ? 'active' : ''}`}>
                            <span><RiEmotionHappyFill /></span>
                            <h1 className="nav-typography">Discipline Head</h1>
                        </li>
                    </Link>
                    <Link to='/' onClick={() => handleItemClick('/')}>
                        <li className={`nav-item-reset ${active === '/' ? 'active' : ''}`}>
                            <span><GrPowerReset /></span>
                            <h1 className="nav-typography-reset">Next</h1>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
