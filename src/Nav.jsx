import React, { useState } from 'react';
import Add from './Add';

const Nav = ({ onSearchChange, movies, setmovies }) => {
  const [isAddVisible, setIsAddVisible] = useState(false);

  const handleAddClick = () => {
    setIsAddVisible(true);
  };

  const handleCloseClick = () => {
    setIsAddVisible(false);
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearchChange(searchTerm);
  };

  return (
    <div className='nav'>
      <nav>
        <h1>Movie</h1>
        <ul>
          <li><input type="text" placeholder='type your movie' onChange={handleSearchChange} /></li>
          <li><button onClick={handleAddClick}>Add+</button></li>
          <li>home</li>
        </ul>
      </nav>
      {isAddVisible && <Add setmovies={setmovies} movies={movies} onClose={handleCloseClick} />}
    </div>
  );
};

export default Nav;
