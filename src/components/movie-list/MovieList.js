import React, {Component} from "react";
import './MovieList.scss';
import MoviesListCard from "../movies-list-card/MoviesListCard";
import Masonry from "react-masonry-component";
import {connect} from "react-redux";

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class MovieList extends Component {


    render() {
        const {items, isLoading, error} = this.props;
        console.log (items);
        return (
            <div className='movie-list-back'>
            {/*<div className='movie-list-body card-columns'>*/}

            {/*</div>*/}
                <Masonry
                    className={'movie-list-body'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                        {
                            !isLoading ?
                            items.map(item => {
                                return (
                                    <MoviesListCard movie={item} key={item.id}/>
                                )
                            })
                                : <div>loading</div>
                        }
                </Masonry>
            </div>
        );
    }
}

// const mstp = state => {
//     const {getMovies: {movies}} = state;
//     console.log (movies)
//     return {
//         movies
//     }
// };

export default MovieList;