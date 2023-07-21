import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; 
import Nav from './Nav';
import Main from './Main';
import Login from './Login';

function App() {

  const [movies, setmovies] = useState([
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      image: 'https://th.bing.com/th/id/R.ff97f12dccd97be3ab7fbeb36cf51648?rik=o8%2bTPLPgi%2fjr2Q&pid=ImgRaw&r=0',
      rate: '4.2',
    },
    
    {
      title: 'The Dark Knight',
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      image: 'https://th.bing.com/th/id/R.23b537ed822ce6c58db1eb82217b3415?rik=OGC%2bDKHFrLRcDg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-1-H0FAEYwzk%2fUBZbYpvwgkI%2fAAAAAAAACi4%2fHjT5iiwUkrY%2fs1600%2fjoker-poster-for-the-dark-knight.jpg&ehk=fm29vz0Tky%2bYzbCG3brs4SmM67Rb%2bfyQSM5FRc25R54%3d&risl=&pid=ImgRaw&r=0',
      rate: '5',
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity\'s survival.',
      image: 'https://th.bing.com/th/id/OIP.eWSrCr-OPPb6owngrN_V5QHaLH?pid=ImgDet&rs=1',
      rate: '4.6',
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      image: 'https://th.bing.com/th/id/OIP.xV6_PjTfvpuFsUe9e3gwEwHaKF?pid=ImgDet&rs=1',
      rate: '5',
    },
    {
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
      image: 'https://th.bing.com/th/id/OIP.H20sGup-FcsAMxezmc8ewQHaK5?pid=ImgDet&rs=1',
      rate:'5',
    },
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      rate: '4.5',
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      image: 'https://m.media-amazon.com/images/I/717W9DCnyzL._AC_UF894,1000_QL80_.jpg',
      rate: '4.7',
    },
    {
      title: 'The Matrix',
      description: 'A computer programmer discovers a dystopian world ruled by a sentient machines, where humanity is unaware of the reality.',
      image: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      rate: '4.4',
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description: 'A young hobbit, Frodo, who has found the One Ring, begins his journey to Mount Doom to destroy it and save Middle-earth.',
      image: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg',
      rate: '4.8',
    },
    {
      title: 'The Avengers',
      description: 'Earth\'s mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity.',
      image: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
      rate: '4.3',
    }
  

  ])

  const [recherche, setRecherche] = useState('');

  const handleSearchChange = (searchTerm) => {
    setRecherche(searchTerm);
  };

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={() => {}} />} />
        <Route path="/Main" element={<Main movies={movies} recherche={recherche} setmovies={setmovies} onSearchChange={handleSearchChange} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
