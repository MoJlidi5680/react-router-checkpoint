import React from 'react';
import './App.css';
import Nav from './Nav';
import Cards from './Cards';

const Main = ({ movies, recherche, setmovies, onSearchChange }) => {
  return (
    <div className="App">
      <Nav setmovies={setmovies} movies={movies} onSearchChange={onSearchChange} />
      <Cards movies={movies} recherche={recherche} />
    </div>
  );
}

export default Main;
