import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav>
            <div>
                <Link to='/'>SpaceX Launches</Link>
            </div>
        </nav>
    );
};

export default Header;
