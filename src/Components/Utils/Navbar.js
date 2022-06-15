import React from "react";
import {Link} from 'react-router-dom'
import './styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className='navbarUl'>
                <Link to='/'>Counter</Link>
                <Link to='/TodosView'>Todos list</Link>
                <Link to='/ApiFetcherView'>API Fetcher</Link>
            </ul>
        </div>
    );
};
export default NavBar;