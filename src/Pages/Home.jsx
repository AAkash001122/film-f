import React, { useEffect, useState } from 'react';
import HomeBanner from '../Components/HomeBanner';
import Subscribe from '../Components/Subscribe';
import TopMovies from '../Components/TopMovies';

const Home = ({ setWatchList, watchList }) => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
  fetch(process.env.REACT_APP_API_URL + "/api/reels/popular")
    .then(res => res.json())
    .then(data => setReels(data))
    .catch(err => console.error("Reels fetch error:", err));
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