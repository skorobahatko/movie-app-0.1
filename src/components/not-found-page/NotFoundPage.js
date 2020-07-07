import React from "react";
import {Link} from "react-router-dom";
import './NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <div className='container-not-found-page'>
            <h3>PAGE NOT FOUND</h3>
            <Link to='/home'>
                <button className='btn btn-dark'>HOME</button>
            </Link>
        </div>
    )
};
export default NotFoundPage;
