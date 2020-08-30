import React, {useEffect, useState} from 'react';
import './SearchMoviesPage.css';
import {connect} from "react-redux";
import {accessToken} from "../constants/accessToken";
import {searchMoviesFetch} from "../../actions/Actions";
import {withRouter} from "react-router-dom";
import {useHistory} from "react-router-dom";

const SearchMoviesPage = (props) => {
    const { match: { params:  { value } }, history , loadingMovies, items, isLoading, error} = props;

    const [inpValue, changeInp] = useState('');

    const hist = useHistory();

    function handleRedirect() {
        console.log (props)
        console.log (value);
        let way = `/search/${inpValue}`;
        console.log (way)
        hist.push(way);
        loadingMovies(`https://api.themoviedb.org/3/search/movie?api_key=${accessToken}&language=en-US&query=${inpValue}&page=1&include_adult=false`)
    }

    return (
        <div className='main-container'>
            <div className='container-of-search'>
                <h1 className='title-of-form'>Search</h1>
                <div className='container-of-form'>
                    <form>
                        <input
                            type="text"
                            name='value'
                            className='input-search'
                            onChange={event => changeInp(event.target.value)}
                        />
                        <button type='button' onClick={handleRedirect}>search</button>
                    </form>
                </div>
            </div>
            <div className='container-of-searched-list'>
                {isLoading ? 'loading' : 'NOT LOADING'}
                {error}
            </div>
        </div>
    )
};
const mstp = (state) => {
    console.log ('search mstp !!!');
    console.log (state);
    const {SearchMoviesReducer: {searchItems, isLoading, error}} = state;
    return {
        items: searchItems,
        isLoading: isLoading,
        error: error
    }
};
const mdtp = (dispatch) => {
    return {
        loadingMovies: (url) => dispatch(searchMoviesFetch(url))
    }
}


export const SearchPage = withRouter(connect(mstp, mdtp)(SearchMoviesPage));
