import React from "react";
import './Pagination.css';
import {Link, withRouter} from 'react-router-dom';

const Pagination = (props) => {

    console.log (props)
    let thisPage = props.page;
    thisPage = parseInt(thisPage);
    console.log (parseInt(thisPage) + 1)
    return (
        <div>
            {
                thisPage !== 1 ?
                    <Link to={`${thisPage - 1}`}><button>{thisPage - 1}</button></Link>
                    : null
            }
                <Link to={`${thisPage}`}><button>{thisPage}</button></Link>
                <Link to={`${thisPage + 1}`}><button>{thisPage + 1}</button></Link>
        </div>
    )
}
export default withRouter(Pagination);
