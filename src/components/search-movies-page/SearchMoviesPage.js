import React, {useEffect, useState} from 'react';
import './SearchMoviesPage.css';
import {connect} from "react-redux";
import {accessToken, https} from "../constants/accessToken";
import {genresFetchData, searchMoviesFetch} from "../../actions/Actions";
import {
    withRouter, useHistory, useLocation, Link
} from "react-router-dom";
import MovieList from "../movie-list/MovieList";

const SearchMoviesPage = (props) => {
    const { match: {url}, name ,
        history,
        loadingMovies,
        loadGenres,
        items,
        isLoading,
        error,
        genres,
        isGenresLoading,
        genresHasError
    } = props;

    // const [inpValue, changeInp] = useState('');

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

    const hist = useHistory();

    const genreList = {
        genres: genres,
        isLoading: isGenresLoading,
        error: genresHasError
    };
    // let inpValue = '';
    // function handleOnChange(event) {
    //     inpValue = event.target.value;
    //     // changeInp(event.target.value);
    // }
    console.log (props)
    if (props.match.params) {
        console.log (props.match.params)
    }

    function handleRedirect() {
        // console.log (props)
        // console.log (name);
        // let way = `/search/${inpValue}`;
        // console.log (way)
        // hist.push(way);
        // loadingMovies(`${https}/search/movie?api_key=${accessToken}&language=en-US&query=${inpValue}&page=1&include_adult=false`)
        // if (!(genres === [])) {
        //     loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
        // }
    }
    useEffect(() => {
        if (query.get ('value')) {
            console.log (query.get ('value'))
            console.log (`${https}/search/movie?api_key=${accessToken}&language=en-US&query=${query.get ('value')}&page=1&include_adult=false`)
            loadingMovies (`${https}/search/movie?api_key=${accessToken}&language=en-US&query=${query.get ('value')}&page=1&include_adult=false`)
            if (!(genres === [])) {
                loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
            }
        }
    }, []);

    // function handleSubmit() {
    //         console.log (query.get('value'))
    //         loadingMovies(`${https}/search/movie?api_key=${accessToken}&language=en-US&query=${query.get('value')}&page=1&include_adult=false`)
    //         if (!(genres === [])) {
    //             loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
    //         }
    // }

    return (
        <div className='main-container'>
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
                    <MovieList
                        items={items}
                        isLoading={isLoading}
                        error={error}
                        genres={genreList}
                    />
            </div>
        </div>
    )
};
const mstp = (state) => {
    console.log ('search mstp !!!');
    console.log (state);
    const {SearchMoviesReducer: {searchItems, isLoading, error}, genresFetch: {genres, isGenresLoading, genreHasError}} = state;
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
        loadingMovies: (url) => dispatch(searchMoviesFetch(url)),
        loadGenres: (url) => dispatch(genresFetchData(url))
    }
}


export const SearchPage = withRouter(connect(mstp, mdtp)(SearchMoviesPage));
