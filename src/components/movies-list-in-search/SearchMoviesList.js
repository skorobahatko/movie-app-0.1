import React, {useState} from "react";
import SearchMoviesListCard from "../movies-list-in-search-card/SearchMoviesListCard";

const SearchMoviesList = (props) => {
    const [movies, changeMovies] = useState([]);
    console.log (props)
    const {items, isLoading, error, genres} = props;

    return (
        <div>
            {
                !error ?
                    !isLoading ?
                        items.map(item => {
                            return (
                            <SearchMoviesListCard movie={item} id={item.id} genres={genres} key={item.id}/>
                            )
                        })
                    : <div className='loadingPage'>
                            <h2>Hi there, wait a second :)</h2>
                        </div>
                : <div className='loadingPage'>
                        <h2>something goes wrong,<br/> please try later</h2>
                    </div>
            }
        </div>
    )
}
export default SearchMoviesList;
