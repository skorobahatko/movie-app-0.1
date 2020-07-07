import React from "react";
import GenreBadges from "../genre-badges/GenreBadges";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


const selfMovieCardPage = (props) => {
    const { match: { params: { id } }, history } = props;
    const {items, genres} = props;
    console.log (items, id);
    const movie = items.find(item => item.id === +id);
    console.log (movie)
    const {title, genre_ids, overview, poster_path, vote_average} = movie;

    console.log ('selfpage');
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt="" className='card-img-top'/>
            <h3 className={`card-title`}>
                {title}
            </h3>
            <GenreBadges id={genre_ids} genresList={genres}/>
            <p className='card-text'>
                {overview}
            </p>
        </div>
    )
};

const mapStateToProps = (state) => {
    const {popularMovies: {popMovItems, isLoading, error}, genresFetch: {genres, isGenresLoading, genreHasError}} = state;
    return {
        items: popMovItems,
        isLoading: isLoading,
        error: error,
        genres: genres,
        isGenresLoading: isGenresLoading,
        genresHasError: genreHasError
    }
}

export const MovieCardPage = withRouter(connect(mapStateToProps)(selfMovieCardPage));
