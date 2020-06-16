import React from "react";
import './Header.scss';
import logo from '../../movie-header-logo.png';


export const Header = () => {

    return (
        <header className='container-fluid'>
            <div className='header-body'>
                <div className='header-logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='header-menu'>

                </div>
                <div className="active-cyan-4 header-search">
                    <input className="form-control" type="text" aria-label="Search"/>
                    <i className="fas fa-search"></i>
                </div>
                <div className='header-user'>
                    <img src="#" alt="user-img"/>
                    <p>user name</p>
                </div>
            </div>
        </header>
    )

};