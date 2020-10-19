import React from "react";
import './MoviesListCard.scss';
import PosterPreview from "../poster-preview/PosterPreview";
import MovieInfo from "../movie-info/MovieInfo";
import StarRating from "../star-rating/StarRating";
import {Link, withRouter} from "react-router-dom";

const MoviesListCard = function (props) {
    const {movie, darkTheme, genres, match: {url}, id} = props;
    const {title, genre_ids, overview, poster_path, vote_average} = movie;

    return (
        <div className={`card ${darkTheme ? 'dark' : ''}`} >
            <PosterPreview poster={poster_path}/>
            <MovieInfo title={title}
                       overview={overview}
                       genresList={genres}
                       genreId={genre_ids}
                       darkTheme={darkTheme}
            />

            <StarRating rating={vote_average}/>

            <Link to={`/${id}`}
                  className={`link-to-self-page ${darkTheme ? 'dark' : ''}`}
                  style={{textDecoration: 'none'}}>
                Show details
            </Link>
        </div>
    )
};
export default withRouter(MoviesListCard);
