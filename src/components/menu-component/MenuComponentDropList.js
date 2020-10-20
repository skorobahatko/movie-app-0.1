import React from "react";
import './MenuComponentDropList.scss';
import {Link} from "react-router-dom";

const MenuComponentdDropList = (props) => {

    return (
            !(props.isShow) ?
                <span className='title-menu'>Movies</span>
                    :
                <div className='droplist-main'>
                    <Link className='droplist-item' to={'/popular'} style={{textDecoration: 'none'}}><span>Popular</span></Link>
                    <Link className='droplist-item' to={'/top-rated'} style={{textDecoration: 'none'}}><span>Top rated</span></Link>
                    <Link className='droplist-item' to={'/home'} style={{textDecoration: 'none'}}><span>Upcoming</span></Link>
                </div>
    )
}
export default MenuComponentdDropList;
