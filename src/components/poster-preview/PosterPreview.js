import React from "react";
import '../movies-list-card/MoviesListCard.scss'

const PosterPreview = (props) => {
    const {poster} = props;
    if (poster) {
        return (
            <img src={`https://image.tmdb.org/t/p/w342/${poster}`} alt="" className='card-img-top'/>
            )
    } else {
        return (
        <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg"
            alt="" className='card-img-top'/>
        )
    }
}
export default PosterPreview;