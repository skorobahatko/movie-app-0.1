import React, {useEffect, useState} from "react";
import {accessToken, https} from "../constants/accessToken";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {genresFetchData, topRatedItemsFetchData} from "../../actions/Actions";
import {DarkThemeContext} from "../../context/DarkThemeContext";
import {withRouter} from "react-router-dom";
import {Header} from "../header/Header";
import Pagination from "../pagination/Pagination";

const TopRatedMovies = (props) => {

    const [page, setPage] = useState('1');

    useEffect(() => {
        console.log ('useEffect')
        props.loadMovies(`${https}/movie/top_rated?api_key=${accessToken}&language=en-US`);
        if (props.genres) {
            console.log ('genres is loaded')
            props.loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
        }
    },[] );
    useEffect( () => {
        if (props.match.params.page !== page) {
            props.loadMovies (`${https}/movie/top_rated?api_key=${accessToken}&language=en-US&page=${props.match.params.page}`);
            setPage(props.match.params.page);
        }
    });


    const {genres, isGenresLoading, genresHasError} = props;
    const genreList = {
        genres: genres,
        isLoading: isGenresLoading,
        error: genresHasError
    };
    console.log (genreList);
    return(
        <DarkThemeContext.Consumer>
            {
                (value) => {
                    const {isDarkTheme} = value;
                    return (
                        <div>
                            <Header/>
                            <MovieList
                                items={props.items}
                                isLoading={props.isLoading}
                                error={props.error}
                                darkTheme={isDarkTheme}
                                genres={genreList}
                            />
                            <Pagination
                                isLoading={props.isLoading}
                                page={page}
                                totalPages={props.pages}
                            />
                        </div>
                    )
                }
            }

        </DarkThemeContext.Consumer>
    )
};

const mapStateToProps = (state) => {
    console.log (state);
    const {topRatedMovies: {topMovItems, isLoading, error, totalPages},  genresFetch: {items, isGenresLoading, genreHasError}} = state;
    return {
        items: topMovItems,
        isLoading: isLoading,
        error: error,
        pages: totalPages,
        genres: items,
        isGenresLoading: isGenresLoading,
        genresHasError: genreHasError
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url) => dispatch(topRatedItemsFetchData(url)),
        loadGenres: (url) => dispatch(genresFetchData(url))
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies));
