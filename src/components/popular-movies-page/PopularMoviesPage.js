import React, {useEffect} from "react";
import {accessToken} from "../constants/movies";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {itemsFetchData} from "../../actions/Actions";

const PopularMoviesPage = (props) => {

    useEffect((url) => {
        props.loadMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${accessToken}&language=en-US`);
    },[] );



    return(
        <div>
            <MovieList
                items={props.items}
                isLoading={props.isLoading}
                error={props.error}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsFetchData,
        isLoading: state.itemsIsLoading,
        error: state.errorHasCatch
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url) => dispatch(itemsFetchData(url))
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(PopularMoviesPage);