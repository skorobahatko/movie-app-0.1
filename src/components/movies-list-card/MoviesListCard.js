import React from "react";
import './MoviesListCard.scss';
import PosterPreview from "../poster-preview/PosterPreview";
import MovieInfo from "../movie-info/MovieInfo";
import StarRating from "../star-rating/StarRating";

const MoviesListCard = function (props) {
    const {movie} = props;
    const {title, genre, overview, poster_path, vote_average} = movie;


    return (
        <div className='card'>
            <PosterPreview poster={poster_path}/>
            <MovieInfo title={title} overview={overview}/>

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