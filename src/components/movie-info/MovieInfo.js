import React from "react";
import GenreBadges from "../genre-badges/GenreBadges";
import '../movies-list-card/MoviesListCard.scss'

const MovieInfo = (props) => {
const {title, overview, genreId, genresList, darkTheme} = props;

    return (
        <div className='card-body'>
            <h3 className={`card-title ${darkTheme ? 'dark' : ''}`}>
                {title}
            </h3>
                <GenreBadges id={genreId} genresList={genresList}/>
            <p className='card-text'>
                {overview}
            </p>

        </div>
    )
};
export default MovieInfo;
