import React from "react";
import './Pagination.scss';
import {Link, withRouter} from 'react-router-dom';
import {DarkThemeContext} from "../../context/DarkThemeContext";

const Pagination = (props) => {

    console.log (props)
    let thisPage = parseInt(props.page);
    let totalPages = parseInt(props.totalPages);
    return (
        <DarkThemeContext.Consumer>
            {
                (value) => {
                    const {isDarkTheme} = value;
                    return (
                        <div className={`container-for-pagination ${isDarkTheme ? 'dark' : null}`}>
                            {!props.isLoading ?
                                <div className='container-for-buttons-of-pagination'>
                                    {
                                        thisPage > 2 ?
                                            <Link to={`page=1`}
                                                  className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                                  style={{ textDecoration: 'none' }}>
                                                1
                                            </Link> : null
                                    }
                                    {
                                        thisPage > 1 ?
                                            <Link to={`page=${thisPage - 1}`}
                                                  className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                                  style={{ textDecoration: 'none' }}
                                            >
                                                {thisPage - 1}
                                            </Link> : null
                                    }
                                    <Link to={`page=${thisPage}`}
                                          className={`btn-pagination ${isDarkTheme ? 'dark' : null} active`}
                                          style={{ textDecoration: 'none' }}
                                    >
                                        {thisPage}
                                    </Link>
                                    {
                                        thisPage + 1 < totalPages ?
                                            <Link to={`page=${thisPage + 1}`}
                                                  className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                                  style={{ textDecoration: 'none' }}
                                            >
                                                {thisPage + 1}
                                            </Link> : null
                                    }
                                    {
                                        thisPage + 2 < totalPages ?
                                            <Link to={`page=${totalPages}`}
                                                  className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                                  style={{ textDecoration: 'none' }}
                                            >
                                                {totalPages}
                                            </Link> : null
                                    }
                                </div> : null}
                        </div>)
                }
            }
        </DarkThemeContext.Consumer>

    )
}
export default withRouter(Pagination);
