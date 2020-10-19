import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import './SearchMoviesPage.scss';
import {accessToken, https} from "../constants/accessToken";
import {genresFetchData, searchMoviesFetch} from "../../actions/Actions";
import {withRouter, Link} from "react-router-dom";
import SearchMoviesList from "../movies-list-in-search/SearchMoviesList";

const SearchMoviesPage = (props) => {
    let {
        loadingMovies, loadGenres, items, isLoading, error, genres, isGenresLoading, genresHasError, history, countOfItems, location
    } = props;

    const genreList = {
        genres: genres,
        isLoading: isGenresLoading,
        error: genresHasError
    };

    const [ isSomethingSearched, changeIsSometthingSearched ] = useState (false);

    function getQuery() {
        let query = new URLSearchParams (location.search);
        query = query.get ('value');
        if (!query) {
            items = 0;
        }
        return query
    }

    useEffect (() => {
        if (location.search) {
            changeIsSometthingSearched(true);
            loadingMovies (`${https}/search/movie?api_key=${accessToken}&language=en-US&query=${getQuery ()}&page=1&include_adult=false`);
            if (genres) {
                console.log (genres);
                loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
            }
        }
    }, [ getQuery () ]);

    return (<div className='main-container'>
        <aside className='container-of-search'>
            <h1 className='title-of-form'>Search</h1>
            <div className='container-of-form'>
                <form className='form-of-search' autoComplete='off'>
                    <input
                        type="text"
                        name='value'
                        className='input-search'
                        placeholder='write here'
                    />
                    <button type='submit' className='btn-search btn btn-secondary'>search</button>
                </form>
                {/*<button onClick={() => history.goBack ()} className='ba'>back</button>*/}
            </div>
            <Link to={`/home`}>
                <button className='btn btn-secondary'>
                    go home
                </button>
            </Link>
        </aside>
        <div className='container-of-searched-list'>

            {
                isSomethingSearched ?
                    !isLoading ?
                        countOfItems ?
                            <SearchMoviesList
                            items={items}
                            isLoading={isLoading}
                            error={error}
                            genres={genreList}
                            />
                            :
                            <div className='central-information-search'><h2>no results</h2></div>
                        :
                        <div className='central-information-search'><h2> loading</h2></div>
                    :
                    <div className='central-information-search'><h2> search something </h2></div>
            }
        </div>
    </div>)
};
const mstp = (state) => {
    const { SearchMoviesReducer: { searchItems, isLoading, error, countOfItems }, genresFetch: { items, isGenresLoading, genreHasError } } = state;
    return {
        items: searchItems,
        isLoading: isLoading,
        error: error,
        countOfItems: countOfItems,
        genres: items,
        isGenresLoading: isGenresLoading,
        genresHasError: genreHasError
    }
};
const mdtp = (dispatch) => {
    return {
        loadingMovies: (url) => dispatch (searchMoviesFetch (url)),
        loadGenres: (url) => dispatch (genresFetchData (url))
    }
};
export const SearchPage = withRouter (connect (mstp, mdtp) (SearchMoviesPage));


