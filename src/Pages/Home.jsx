import React, { useEffect, useState } from 'react';
import HomeBanner from '../Components/HomeBanner';
import Subscribe from '../Components/Subscribe';
import TopMovies from '../Components/TopMovies';

const Home = ({ setWatchList, watchList }) => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies/popular')
      .then(res => res.json())
      .then(data => {
        setTopMovies(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <HomeBanner />
      <TopMovies 
        filterCtg="Reels" 
        setFilterCtg={() => {}} 
        topMovies={topMovies} 
        setWatchList={setWatchList} 
        watchList={watchList} 
      />
      <Subscribe />
    </>
  );
};

export default Home;