import React from "react";
import './MoviesListCard.scss';

const MoviesListCard = function (props) {
    const {movie} = props;
    const {title, genre, overview, poster_path} = movie;


    return (
        <div className='card'>
            { poster_path
                ? <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt="" className='card-img-top'/>
                : <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg" alt="" className='card-img-top'/>}
            <div className='card-body'>
                <h3 className='card-title'>
                    {title}
                </h3>
                <h5 className='card-genre'>
                    {genre}
                </h5>
                <p className='card-text'>
                    {overview}
                </p>

            </div>
        </div>
    )
}
export default MoviesListCard;