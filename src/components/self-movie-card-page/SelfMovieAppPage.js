import React from "react";
import GenreBadges from "../genre-badges/GenreBadges";
import {withRouter} from "react-router-dom";


const selfMovieCardPage = (props) => {
    const {movie, genres} = props;
    const {title, genre_ids, overview, poster_path, vote_average} = movie;

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

const mapStateToProps = (props) => {

}

export const MovieCardPage = withRouter(selfMovieCardPage);
