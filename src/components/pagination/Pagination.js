import React from "react";
import './Pagination.css';
import {Link, withRouter} from 'react-router-dom';

const Pagination = (props) => {

    console.log (props)
    let thisPage = props.page;
    thisPage = parseInt(thisPage);
    let totalPages = props.totalPages;
    totalPages = parseInt(totalPages);
    return (
        <div className='container-for-pagination'>
            {/*{*/}
            {/*    thisPage !== 1 ?*/}
            {/*        <Link to={`${thisPage - 1}`}><button>{thisPage - 1}</button></Link>*/}
            {/*        : null*/}
            {/*}*/}

            {
                !props.isLoading ?
                <div className='container-for-buttons-of-pagination'>
                    {
                        thisPage > 2 ?
                    <Link to={`${1}`}
                          className={`btn-pagination`}
                          style={{textDecoration: 'none'}}
                    >
                        1
                    </Link>
                            : null
                    }
                    {
                        thisPage > 1 ?
                    <Link to={`${thisPage - 1}`}
                          className={`btn-pagination`}
                          style={{textDecoration: 'none'}}
                    >
                        {thisPage - 1}
                    </Link>
                            : null
                    }
                    <Link to={`${thisPage}`}
                          className={`btn-pagination`}
                          style={{textDecoration: 'none'}}
                    >
                        {thisPage}
                    </Link>
                    <Link to={`${thisPage + 1}`}
                          className={`btn-pagination`}
                          style={{textDecoration: 'none'}}
                    >
                        {thisPage + 1}
                    </Link>
                    <Link to={`${totalPages}`}
                          className={`btn-pagination`}
                          style={{textDecoration: 'none'}}
                    >
                        {totalPages}
                    </Link>
                </div>
                    : null
            }
        </div>
    )
}
export default withRouter(Pagination);
