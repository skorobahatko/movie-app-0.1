import React, {PureComponent} from "react";
import {accessToken} from "../constants/movies";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {itemsFetchData} from "../../actions/Actions";

class PopularMoviesPage extends PureComponent {

    componentDidMount() {
        this.props.loadMovies (`https://api.themoviedb.org/3/movie/popular?api_key=${accessToken}&language=en-US`);
    }

    render() {
        return (
            <div>
                <MovieList
                    items={this.props.items}
                    isLoading={this.props.isLoading}
                    error={this.props.error}/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    const {popularMovies: {items, isLoading, error}} = state;
    console.log (state.popularMovies);
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


export default connect (mapStateToProps, mapDispatchToProps)(PopularMoviesPage);