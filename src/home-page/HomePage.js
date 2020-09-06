import React, {Component} from 'react';
import './HomePage.css';
import MenuComponent from "../components/menu-component/MenuComponent";
import {withRouter, Link} from 'react-router-dom';


const HomePage = () => {


        return (
            <div className='container-fluid-home'>
                <div className='menu-components-box'>
                    <Link to='/popular' style={{ textDecoration: 'none' }}>
                        <MenuComponent
                        title='Popular'
                        />
                    </Link>
                    <Link to='/search' style={{ textDecoration: 'none' }}>
                        <MenuComponent
                            title='Search'
                        />
                    </Link>
                    <Link to='/top-rated' style={{ textDecoration: 'none' }}>
                        <MenuComponent
                        title='Top-Rated'
                        />
                    </Link>
                </div>
            </div>
        );
}



export default withRouter(HomePage);
