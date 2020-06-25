import React, {PureComponent} from "react";
import {accessToken} from "../constants/movies";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {itemsFetchData} from "../../actions/Actions";
import {DarkThemeContext} from "../../context/DarkThemeContext";

class PopularMoviesPage extends PureComponent {

    componentDidMount() {
        this.props.loadMovies (`https://api.themoviedb.org/3/movie/popular?api_key=${accessToken}&language=en-US`);
    }

    render() {
        return (
            <DarkThemeContext.Consumer>
                {
                    (value) => {
                    const {isDarkTheme} = value;
                    return (
                     <div>
                         <MovieList
                          items={this.props.items}
                        isLoading={this.props.isLoading}
                        error={this.props.error}
                        darkTheme={isDarkTheme}
                        />
                    </div>
                    )
                    }
                }

            </DarkThemeContext.Consumer>
        )
    }
}

const mapStateToProps = (state) => {
    const {popularMovies: {items, isLoading, error}} = state;
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