import React, {useEffect} from 'react';
import {connect} from "react-redux";
import './SearchMoviesPage.scss';
import {accessToken, https} from "../constants/accessToken";
import {genresFetchData, searchMoviesFetch} from "../../actions/Actions";
import {
    withRouter, useLocation
} from "react-router-dom";
import SearchMoviesList from "../movies-list-in-search/SearchMoviesList";

const SearchMoviesPage = (props) => {
    const {
        loadingMovies, loadGenres, items, isLoading, error, genres, isGenresLoading, genresHasError
    } = props;

    function useQuery() {
        return new URLSearchParams (useLocation ().search);
    }

    let query = useQuery ();

    const genreList = {
        genres: genres,
        isLoading: isGenresLoading,
        error: genresHasError
    };

    if (props.match.params) {
        console.log (props.match.params)
    }

    useEffect (() => {
        if (query.get ('value')) {
            loadingMovies (`${https}/search/movie?api_key=${accessToken}&language=en-US&query=${query.get ('value')}&page=1&include_adult=false`);
            if (!(genres === [])) {
                loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
            }
        }
    }, []);

    return (<div className='main-container'>
            <aside className='container-of-search'>
                <h1 className='title-of-form'>Search</h1>
                <div className='container-of-form'>
                    <form className='form-of-search'>
                        <input
                            type="text"
                            name='value'
                            className='input-search'
                        />
                        <button type='submit'>search</button>
                    </form>
                </div>
            </aside>
            <div className='container-of-searched-list'>
                <SearchMoviesList
                    items={items}
                    isLoading={isLoading}
                    error={error}
                    genres={genreList}
                />
            </div>
        </div>)
};
const mstp = (state) => {
    const { SearchMoviesReducer: { searchItems, isLoading, error }, genresFetch: { genres, isGenresLoading, genreHasError } } = state;
    return {
        items: searchItems,
        isLoading: isLoading,
        error: error,
        genres: genres,
        isGenresLoading: isGenresLoading,
        genresHasError: genreHasError
    }
};
const mdtp = (dispatch) => {
    return {
        loadingMovies: (url) => dispatch (searchMoviesFetch (url)),
        loadGenres: (url) => dispatch (genresFetchData (url))
    }
}


export const SearchPage = withRouter (connect (mstp, mdtp) (SearchMoviesPage));
