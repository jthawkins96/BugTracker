import './sidenav.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div id="sidenav-container">
            <ul id="nav-links-container">
                <li className="nav-link">
                    <Link to="/board">Board</Link>
                </li>
                <li className="nav-link">
                    <Link to="/backlog">Backlog</Link>
                </li>
                <li className="nav-link">
                    <Link to="/reports">Reports</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
