import React, {Component} from "react";
import './MovieList.scss';
import MoviesListCard from "../movies-list-card/MoviesListCard";
import Masonry from "react-masonry-component";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' };

class MovieList extends Component {


    render() {
        const {items, isLoading, error, darkTheme, genres} = this.props;
        console.log ('movieList props');
        console.log (this.props);
        return (
            <div className={`movie-list-back ${darkTheme && 'dark'}`}>
                <Masonry
                    className={'movie-list-body'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                     {/*rendering items from redux, if it loaded and if is not errored*/}

                        {
                            !error ?
                                !isLoading ?
                                    items.map(item => {
                                        return (
                                        <MoviesListCard movie={item} key={item.id} darkTheme={darkTheme} genres={genres}/>
                                        )})
                                : <div className='loadingPage'>
                                        <h2>Hi there, wait a few seconds :)</h2>
                                </div>
                            : <div>error</div>
                        }
                </Masonry>
            </div>
        );
    }
}


export default MovieList;
