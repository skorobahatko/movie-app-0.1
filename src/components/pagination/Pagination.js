import React from "react";
import './Pagination.scss';
import {Link, withRouter} from 'react-router-dom';
import {DarkThemeContext} from "../../context/DarkThemeContext";

const Pagination = (props) => {

    console.log (props)
    let thisPage = props.page;
    thisPage = parseInt(thisPage);
    let totalPages = props.totalPages;
    totalPages = parseInt(totalPages);
    return (
        <DarkThemeContext.Consumer>
            {
                (value) => {
                    const {isDarkTheme} = value;
                    console.log (isDarkTheme);
                    return (
                        <div className={`container-for-pagination ${isDarkTheme ? 'dark' : null}`}>
                            {!props.isLoading ? <div className='container-for-buttons-of-pagination'>
                                {thisPage > 2 ? <Link to={`${1}`}
                                                      className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                                      style={{ textDecoration: 'none' }}
                                >
                                    1
                                </Link> : null}
                                {thisPage > 1 ? <Link to={`${thisPage - 1}`}
                                                      className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                                      style={{ textDecoration: 'none' }}
                                >
                                    {thisPage - 1}
                                </Link> : null}
                                <Link to={`${thisPage}`}
                                      className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                      style={{ textDecoration: 'none' }}
                                >
                                    {thisPage}
                                </Link>
                                <Link to={`${thisPage + 1}`}
                                      className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                      style={{ textDecoration: 'none' }}
                                >
                                    {thisPage + 1}
                                </Link>
                                <Link to={`${totalPages}`}
                                      className={`btn-pagination ${isDarkTheme ? 'dark' : null}`}
                                      style={{ textDecoration: 'none' }}
                                >
                                    {totalPages}
                                </Link>
                            </div> : null}
                        </div>)
                }
            }
        </DarkThemeContext.Consumer>
    )
}
export default withRouter(Pagination);
