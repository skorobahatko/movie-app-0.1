import React from "react";
import GenreBadges from "../genre-badges/GenreBadges";
import '../movies-list-card/MoviesListCard.scss'

const MovieInfo = (props) => {
const {title, overview} = props;


    return (
        <div className='card-body'>
            <h3 className='card-title'>
                {title}
            </h3>
                <GenreBadges/>
            <p className='card-text'>
                {overview}
            </p>

        </div>
    )
};
export default MovieInfo;