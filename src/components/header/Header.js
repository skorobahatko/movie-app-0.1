import React from "react";
import './Header.scss';
import {DarkThemeContext} from "../../context/DarkThemeContext";

export const Header = () => {
    return (
        <DarkThemeContext.Consumer>
            {
                (value) => {
                    const { isDarkTheme, toggleTheme } = value;
                    return (
                        <header className={`container-fluid ${isDarkTheme ? 'dark' : null}`}>
                            <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg' alt=""/>
                            <i className="fas fa-bars"></i>
                            <i className="fas fa-search"></i>
                            <input className="form-control" type="text" aria-label="Search" id='header-inp-search'/>
                            <button
                                onClick={toggleTheme}
                                className={`btn btn-secondary ${isDarkTheme && 'dark'}`}>
                                Theme switcher
                            </button>
                        </header>
                    )
                }
            }
        </DarkThemeContext.Consumer>

            )

};


