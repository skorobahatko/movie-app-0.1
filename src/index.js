import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './home-page/HomePage';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import configureStore from './store/Store'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import PopularMoviesPage from "./components/popular-movies-page/PopularMoviesPage";
import TopRatedMovies from "./components/top-rated-movies/TopRatedMovies";
import {Header} from "./components/header/Header";
import DarkThemeContextWrapper from "./components/dark-theme-context-wrapper/DarkThemeContextWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MovieCardPage} from "./components/self-movie-card-page/SelfMovieAppPage";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <DarkThemeContextWrapper>
      <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/home' exact>
                    <HomePage/>
                </Route>
                <Route path='/popular' exact>
                    <Header/>
                    <PopularMoviesPage/>
                </Route>
                <Route path='/popular/:key' render={(routerProps) => {
                    return(<MovieCardPage {...routerProps}/>)
                    }}
                />
                <Route path='/top-rated' exact>
                    <Header/>
                    <TopRatedMovies/>
                </Route>
            </Switch>
        </Router>
      </Provider>
    </DarkThemeContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your home-page to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
