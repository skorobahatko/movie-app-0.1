import React, {useEffect} from 'react';
import {connect} from "react-redux";
import './SearchMoviesPage.scss';
import {accessToken, https} from "../constants/accessToken";
import {genresFetchData, searchMoviesFetch} from "../../actions/Actions";
import {withRouter, Link} from "react-router-dom";
import SearchMoviesList from "../movies-list-in-search/SearchMoviesList";

const SearchMoviesPage = (props) => {
    const {
        loadingMovies, loadGenres, items, isLoading, error, genres, isGenresLoading, genresHasError, history, countOfItems, location
    } = props;

    const genreList = {
        genres: genres,
        isLoading: isGenresLoading,
        error: genresHasError
    };

    function useQuery() {
        return new URLSearchParams (props.location.search);
    }

    let query = useQuery ();
    query = query.get('value');

    useEffect (() => {
        if (location) {
            loadingMovies (`${https}/search/movie?api_key=${accessToken}&language=en-US&query=${query}&page=1&include_adult=false`);
            if (!genres) {
                loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
            }
        }
    }, [query]);

    return (<div className='main-container'>
        <aside className='container-of-search'>
            <Link to={`/home`}>
                <button>
                    go home
                </button>
            </Link>
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
                <button onClick={() => history.goBack ()}>back</button>
            </div>
        </aside>
        <div className='container-of-searched-list'>

            {countOfItems ? <SearchMoviesList
                items={items}
                isLoading={isLoading}
                error={error}
                genres={genreList}
            /> : <div>
                <h2> no results</h2>
            </div>}
        </div>
    </div>)
};
const mstp = (state) => {
    const { SearchMoviesReducer: { searchItems, isLoading, error, countOfItems }, genresFetch: { genres, isGenresLoading, genreHasError } } = state;
    return {
        items: searchItems,
        isLoading: isLoading,
        error: error,
        countOfItems: countOfItems,
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
};
export const SearchPage = withRouter (connect (mstp, mdtp) (SearchMoviesPage));


