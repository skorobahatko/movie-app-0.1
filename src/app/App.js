import React from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import MoviesListCard from "../components/movies-list-card/MoviesListCard";

function App() {
  return (
      <div>
          <Header/>
          <MoviesListCard/>
      </div>
  );
}

export default App;
