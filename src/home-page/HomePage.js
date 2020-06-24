import React, {Component} from 'react';
import './HomePage.css';
import {Header} from "../components/header/Header";
import MovieList from "../components/movie-list/MovieList";
import {accessToken, movies} from "../components/constants/movies";
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/Actions";


class HomePage extends Component {


    componentDidMount() {
        this.props.loadMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${accessToken}&language=en-US`);
    }


    render() {
        console.log (this.props);
        const {items, isLoading, error} = this.props;
        return (
            <div>
                <Header/>
                <MovieList items={items} isLoading={isLoading} error={error}/>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsFetchData,
        isLoading: state.itemsIsLoading,
        error: state.errorHasCatch
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url) => dispatch(itemsFetchData(url))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(HomePage);
