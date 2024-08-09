import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderHome.css';

function HeaderHome() {
    return (
        <header className="header">
            <Link to="/" className="link">
                <div className="container empty-container-home">
                    <div className="logo-container-home">
                        <img src="/macks-logo-black.jpg" alt="macks-logo-black" />
                    </div>
                    <span>Macks</span>
                </div>
            </Link>
        </header>
    );
}

export default HeaderHome;
