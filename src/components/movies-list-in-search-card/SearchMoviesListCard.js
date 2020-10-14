import React from "react";
import '../movies-list-in-search-card/SearchMoviesListCard.scss';
import GenreBadges from "../genre-badges/GenreBadges";
import {Link, withRouter} from "react-router-dom";

const SearchMoviesListCard = (props) => {
    const {movie, genres, id} = props;
    const {title, genre_ids, overview, poster_path, vote_average} = movie;

    return (
        <Link to={`/${id}`} style={{textDecoration: 'none'}} className={'search-link'}>
            <div className='search-movie-card'>
                {poster_path ? <img
                    src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                    className='search-movie-img'
                /> : <img
                    src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484032.jpg"
                    className='search-movie-img'
                />}

                <div className='search-movie-info'>
                    <div className='search-movie-title-genres'>
                        <h2>{title}</h2>
                        <GenreBadges genresList={genres} id={genre_ids}/>
                    </div>
                    <div>
                        {overview}
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default withRouter(SearchMoviesListCard);
