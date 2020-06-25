import React from "react";
import './Header.scss';
import logo from '../../movie-header-logo.png';
import userIcon from '../../user-icon.png';
import {DarkThemeContext} from "../../context/DarkThemeContext";

export const Header = () => {
    return (
        <DarkThemeContext.Consumer>
            {
                (value) => {
                    const { isDarkTheme, toggleTheme } = value;
                    return (
                        <header className={`container-fluid`}>
                            <div className='header-body'>
                                <div className='header-logo'>
                                    <img src={logo} alt="logo"/>
                                </div>
                                <div className='header-menu'>
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="active-cyan-4 header-search">
                                    <i className="fas fa-search"></i>
                                    <input className="form-control" type="text" aria-label="Search"
                                           id='header-inp-search'/>
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    className={`btn btn-primary ${isDarkTheme && 'dark'}`}>
                                    Theme switcher
                                </button>
                                <div className='header-user'>
                                    <img src={userIcon} alt=""/>
                                    <p>user name</p>
                                </div>
                            </div>
                        </header>)
                }
            }
        </DarkThemeContext.Consumer>

            )

};