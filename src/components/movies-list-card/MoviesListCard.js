import React from "react";
import './MoviesListCard.scss';

const MoviesListCard = function (props) {



    return (
        <div className='card'>
            <img src='#' alt="" className='card-img-top'/>
            <div className='card-body'>
                <h4 className='card-title'>
                    title
                </h4>
                <h5 className='card-genre'>
                    genre
                </h5>
                <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at, atque blanditiis consectetu.
                </p>

            </div>
        </div>
    )
}
export default MoviesListCard;