import React, {useEffect} from "react";
import {accessToken, https} from "../constants/accessToken";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {genresFetchData, itemsFetchData} from "../../actions/Actions";
import {DarkThemeContext} from "../../context/DarkThemeContext";

const TopRatedMovies = (props) => {

    useEffect((url) => {
        props.loadMovies(`${https}/movie/top_rated?api_key=${accessToken}&language=en-US`);
        props.loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
    },[] );


    console.log (props);
    const {genres, isGenresLoading, genresHasError} = props;
    const genreList = {
        genres: genres,
        isLoading: isGenresLoading,
        error: genresHasError
    };
    return(
        <DarkThemeContext.Consumer>
            {
                (value) => {
                    const {isDarkTheme} = value;
                    return (
                        <div>
                            <MovieList
                                items={props.items}
                                isLoading={props.isLoading}
                                error={props.error}
                                darkTheme={isDarkTheme}
                                genres={genreList}
                            />
                        </div>
                    )
                }
            }

        </DarkThemeContext.Consumer>
    )
};

const mapStateToProps = (state) => {
    const {topRatedMovies: {items, isLoading, error},  genresFetch: {genres, isGenresLoading, genreHasError}} = state;
    console.log (state.topRatedMovies);
    return {
        items: items,
        isLoading: isLoading,
        error: error,
        genres: genres,
        isGenresLoading: isGenresLoading,
        genresHasError: genreHasError
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url) => dispatch(itemsFetchData(url)),
        loadGenres: (url) => dispatch(genresFetchData(url))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);