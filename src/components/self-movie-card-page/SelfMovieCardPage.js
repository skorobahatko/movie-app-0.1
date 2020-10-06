import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import './SelfMovieCardPage.scss'
import {connect} from "react-redux";
import {selfMovieFetch} from "../../actions/Actions";


const SelfMovieCardPage = (props) => {
    const { match: { params:  { id } }, history , loadingMovie, item, isLoading, error} = props;
    useEffect(() => {
        console.log (id);
        loadingMovie(id);
    }, [id]);
    const {backdrop_path, title, poster_path, overview} = item;
    console.log ('im here')
    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        backgroundRepeat: 'no-repeat'
    };

    return(
        <div>
            { !isLoading ?
             <div className='self-page' style={backgroundStyle}>
                <div className='blacked-background'>
                    <h3 className={`card-title-self-page`}>
                        {title}
                        <button onClick={() => history.goBack()}>back</button>
                    </h3>
                    <div className='body-page'>
                        <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={`poster of ${title}`}
                             className='self-page-img'/>
                        <p className='card-text-self-page'>
                            {overview}
                        </p>
                    </div>
                </div>
            </div> :
                <div className='loading-page-self-movie'>
                    <h2>movie is loading</h2>
                </div>
            }
        </div>
    )
};
const mapStateToProps = (state) => {
    console.log (state)
    const {SelfMovieReducer: {movie, isLoading, error}} = state;
    return {
        item: movie,
        isLoading: isLoading,
        error: error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadingMovie: (id) => dispatch(selfMovieFetch(id))
    }
};

export const MovieCardPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(SelfMovieCardPage));
