import React, {Component} from 'react';
import './HomePage.css';
import MenuComponent from "../components/menu-component/MenuComponent";
import {withRouter, Link} from 'react-router-dom';


const HomePage = () => {


        return (
            <div className='container-fluid'>
                <div className='menu-components-box'>
                    {/*<Header/>*/}
                    <Link to='/popular' style={{ textDecoration: 'none' }}>
                        <MenuComponent
                        title='Popular'
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
