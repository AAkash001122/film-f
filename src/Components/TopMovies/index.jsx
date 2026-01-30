import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import "./style.css";

const TopMovies = ({ filterCtg, setFilterCtg, setWatchList, watchList }) => {
  const [topItems, setTopItems] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/reels/popular")
      .then((res) => res.json())
      .then((data) => setTopItems(data)) // ✅ setTopItems now
      .catch((err) => console.error("Reels fetch error:", err));
  }, []);

  const displayedItems = topItems;

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">REELS SECTION</h5>
          <h2 className="title">Trending Reels</h2>
        </div>

        <div className="row movies-grid">
          {displayedItems.map((item) => (
            <MovieCard
              key={item._id}
              movie={item}
              setWatchList={setWatchList}
              watchList={watchList}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
