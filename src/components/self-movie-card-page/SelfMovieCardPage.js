import React from "react";
import GenreBadges from "../genre-badges/GenreBadges";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Header} from "../header/Header";
import './SelfMovieCardPage.scss'


const selfMovieCardPage = (props) => {
    const { match: { params: { id } }, history } = props;
    const {items, genres} = props;
    const movie = items.find(item => item.id === +id);
    const {title, genre_ids, overview, poster_path, vote_average, backdrop_path} = movie;
    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        backgroundRepeat: 'no-repeat'
    };
    return(
        <div>
            <Header/>
            <div className='self-page' style={backgroundStyle}>
                <div className='blacked-background'>
                    <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt="" className='self-page-img'/>
                    <h3 className={`card-title`}>
                        {title}
                    </h3>
                    <GenreBadges id={genre_ids} genresList={genres}/>
                    <p className='card-text'>
                        {overview}
                    </p></div>
            </div>
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
