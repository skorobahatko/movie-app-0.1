import React, {PureComponent} from "react";
import {accessToken, https} from "../constants/accessToken";
import {connect} from "react-redux";
import MovieList from "../movie-list/MovieList";
import {genresFetchData, popularItemsFetchData} from "../../actions/Actions";
import {DarkThemeContext} from "../../context/DarkThemeContext";
import {Header} from "../header/Header";
import Pagination from "../pagination/Pagination";

class PopularMoviesPage extends PureComponent {

    componentDidMount() {
        console.log (!(this.props.items === []));
        console.log (this.props.match.params.page);
        console.log ('api key')
        console.log (process.env.REACT_APP_MOVIES_API_KEY)
        console.log ('api key')
        if (!(this.props.items === [])) {
            this.props.loadMovies (`${https}/movie/popular?api_key=${accessToken}&language=en-US&page=${this.props.match.params.page}`);
        }
        if (!(this.props.genres === [])) {
            this.props.loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.page !== prevProps.match.params.page) {
            this.props.loadMovies (`${https}/movie/popular?api_key=${accessToken}&language=en-US&page=${this.props.match.params.page}`);
        }
    }

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
                         <Header/>
                         <MovieList
                          items={this.props.items}
                          isLoading={this.props.isLoading}
                          error={this.props.error}
                          darkTheme={isDarkTheme}
                          genres={genreList}
                        />
                        <Pagination
                            page={this.props.match.params.page}
                            totalPages={this.props.pages}
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
    const {popularMovies: {popMovItems, isLoading, error, totalPages}, genresFetch: {genres, isGenresLoading, genreHasError}} = state;
    return {
        items: popMovItems,
        isLoading: isLoading,
        error: error,
        pages: totalPages,
        genres: genres,
        isGenresLoading: isGenresLoading,
        genresHasError: genreHasError,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url) => dispatch(popularItemsFetchData(url)),
        loadGenres: (url) => dispatch(genresFetchData(url))
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(PopularMoviesPage);
