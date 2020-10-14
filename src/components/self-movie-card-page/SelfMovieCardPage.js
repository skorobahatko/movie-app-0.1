import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import './SelfMovieCardPage.scss'
import {connect} from "react-redux";
import {selfMovieFetch, genresFetchData} from "../../actions/Actions";
import GenreBadges from "../genre-badges/GenreBadges";
import {accessToken, https} from "../constants/accessToken";


const SelfMovieCardPage = (props) => {
    const { match: { params: { id } }, history, loadingMovie, loadGenres, item, isLoading, error , genresList, isGenresLoading, genreHasError} = props;
    useEffect (() => {
        console.log (id)
        loadingMovie (id);
        if (genresList === []) {
            loadGenres (`${https}/genre/movie/list?api_key=${accessToken}&language=en-US`)
        }
    }, [id]);
    const genresListForBadges = {
        genres: genresList,
        isLoading: isGenresLoading,
        error: genreHasError
    };
    const { backdrop_path, title, poster_path, overview, genres} = item;
    // console.log (item)

    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        backgroundRepeat: 'no-repeat'
    };

    console.log (item);
    return (<div>
            {!isLoading ? <div className='self-page' style={backgroundStyle}>
                <div className='blacked-background'>
                    <h3 className={`card-title-self-page`}>
                        {title}
                        <button onClick={() => history.goBack ()}>back</button>
                    </h3>
                    <div className='body-page'>
                        <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={`poster of ${title}`}
                             className='self-page-img'/>
                        <div className='card-text-self-page'>
                            {/*{genres ? <GenreBadges genresList={genresListForBadges} id={genres}/> : null}*/}
                            <div className='genres-in-main-block'>
                            {
                                genres ? genres.map(genre => {
                                return  (<h3 className='genre-badge'>{genre.name}</h3>)
                            }) : null
                            }
                            </div>
                            {overview}
                        </div>
                    </div>
                </div>
            </div> : <div className='loading-page-self-movie'>
                <h2>movie is loading</h2>
            </div>}
        </div>)
};
const mapStateToProps = (state) => {
    console.log (state)
    const { SelfMovieReducer: { movie, isLoading, error }, genresFetch: { items, isGenresLoading, genreHasError } } = state;
    return {
        item: movie,
        isLoading: isLoading,
        error: error,
        genresList: items,
        isGenresLoading: isGenresLoading,
        genresError: genreHasError
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadingMovie: (id) => dispatch (selfMovieFetch (id)),
        loadGenres: (url) => dispatch (genresFetchData (url))
    }
};

export const MovieCardPage = withRouter (connect (mapStateToProps, mapDispatchToProps) (SelfMovieCardPage));
