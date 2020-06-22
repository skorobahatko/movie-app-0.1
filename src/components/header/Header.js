import React from "react";
import './Header.scss';
import logo from '../../movie-header-logo.png';
import userIcon from '../../user-icon.png';


export const Header = () => {

    return (
        <header className='container-fluid'>
            <div className='header-body'>
                <div className='header-logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='header-menu'>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="active-cyan-4 header-search">
                    <i className="fas fa-search"></i>
                    <input className="form-control" type="text" aria-label="Search" id='header-inp-search'/>
                </div>
                <div className='header-user'>
                    <img src={userIcon} alt=""/>
                    <p>user name</p>
                </div>
            </div>
        </header>
    )

};