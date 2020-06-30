import React, {useEffect} from "react";
import {accessToken} from "../constants/accessToken";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {itemsFetchData} from "../../actions/Actions";
import {DarkThemeContext} from "../../context/DarkThemeContext";

const TopRatedMovies = (props) => {

    useEffect((url) => {
        props.loadMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${accessToken}&language=en-US`);
    },[] );


    console.log (props);
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
                            />
                        </div>
                    )
                }
            }

        </DarkThemeContext.Consumer>
    )
};

const mapStateToProps = (state) => {
    const {topRatedMovies: {items, isLoading, error}} = state;
    console.log (state.topRatedMovies);
    return {
        items: items,
        isLoading: isLoading,
        error: error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url) => dispatch(itemsFetchData(url))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovies);