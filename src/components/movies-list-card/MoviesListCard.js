import React from "react";
import './MoviesListCard.scss';
import PosterPreview from "../poster-preview/PosterPreview";
import MovieInfo from "../movie-info/MovieInfo";
import StarRating from "../star-rating/StarRating";

const MoviesListCard = function (props) {
    const {movie, darkTheme, genres} = props;
    const {title, genre_ids, overview, poster_path, vote_average} = movie;


    return (
        <div className={`card ${darkTheme ? 'dark' : ''}`}>
            <PosterPreview poster={poster_path}/>
            <MovieInfo title={title} overview={overview} genresList={genres} genreId={genre_ids} darkTheme={darkTheme}/>

            <StarRating rating={vote_average}/>
            {/*<div className='card-body'>*/}

            {/*    <h3 className='card-title'>*/}
            {/*        {title}*/}
            {/*    </h3>*/}
            {/*    <h5 className='card-genre'>*/}
            {/*        {genre}*/}
            {/*    </h5>*/}
            {/*    <p className='card-text'>*/}
            {/*        {overview}*/}
            {/*    </p>*/}

            {/*</div>*/}
        </div>
    )
}
export default MoviesListCard;
