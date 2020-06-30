import React, {PureComponent} from "react";
import {accessToken, https} from "../constants/accessToken";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {genresFetchData, itemsFetchData} from "../../actions/Actions";
import {DarkThemeContext} from "../../context/DarkThemeContext";

class PopularMoviesPage extends PureComponent {

    componentDidMount() {

        this.props.loadMovies (`${https}/movie/popular?api_key=${accessToken}&language=en-US`);
        this.props.loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    // }

    render() {
        const {genres, isGenresLoading, genresHasError} = this.props;
        const genreList = {
            genres: genres,
            isLoading: isGenresLoading,
            error: genresHasError
        };
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
                          genres={genreList}
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
    console.log (state)
    const {popularMovies: {popMovItems, isLoading, error}, genresFetch: {genres, isGenresLoading, genreHasError}} = state;
    return {
        items: popMovItems,
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


export default connect (mapStateToProps, mapDispatchToProps)(PopularMoviesPage);