import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { IoTimeOutline } from 'react-icons/io5';
import { LuSearch } from 'react-icons/lu';
import { RxQuestionMarkCircled } from 'react-icons/rx';

import './Header.css';

function Header({ workspace_name }) {
    return (
        <header className="header">
            <div className="left-half-container">
                <Link to="/" className="link">
                    <div className="container empty-container">
                        <div className="logo-container">
                            <img src="/macks-logo-black.jpg" alt="macks-logo-black" />
                        </div>
                        <span>Macks</span>
                    </div>
                </Link>
                <nav className="navigator">
                    <button className="btn-navigation">
                        <HiArrowLeft />
                    </button>
                    <button className="btn-navigation">
                        <HiArrowRight />
                    </button>
                    <button className="btn-navigation">
                        <IoTimeOutline className="icon-watch" />
                    </button>
                </nav>
            </div>
            <div className="right-half-container">
                <div className="container navigation-container">
                    <div className="search-container">
                        <input className="input search-input" type="text" placeholder={`Buscar ${workspace_name}`} />
                        <LuSearch className="search-icon" />
                    </div>
                </div>
                <div className="container info-container">
                    <button className="btn-navigation">
                        <RxQuestionMarkCircled className="info-icon" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
