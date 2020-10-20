import React, {useState} from 'react';
import './HomePage.css';
import '../../src/components/menu-component/MenuComponentDropList.scss';
import MenuComponent from "../components/menu-component/MenuComponent";
import {withRouter, Link} from 'react-router-dom';
import MenuComponentdDropList from "../components/menu-component/MenuComponentDropList";


const HomePage = () => {
    const [isShow, setIsShow] = useState(false);

    return (<div className='container-fluid-home'>
            <div className='menu-components-box'>
                <Link to='/search' style={{ textDecoration: 'none' }}>
                    <MenuComponent
                        title='Search'
                    />
                </Link>
                <div
                    onMouseEnter={() => setIsShow(true)}
                    onMouseLeave={() => setIsShow(false)}
                     className='component-menu-droplist'>
                    <MenuComponentdDropList isShow={isShow}/>
                </div>
            </div>
        </div>);
}


export default withRouter (HomePage);
