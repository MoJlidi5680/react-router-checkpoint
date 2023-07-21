import React from 'react';
import Card from './Card';

const Cards = ({ movies, recherche }) => {
  const filteredMovies = movies.filter(el => el.title.toLowerCase().includes(recherche.toLowerCase()));

  return (
    <div className='cards'>
      {filteredMovies.map((el) => <Card el={el} />)}
    </div>
  );
}

export default Cards;
