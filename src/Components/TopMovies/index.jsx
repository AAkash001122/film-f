import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";
import "./style.css";

const TopMovies = ({ setWatchList, watchList }) => {
  const [topItems, setTopItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/reels/popular")
      .then((res) => res.json())
      .then((data) => setTopItems(data))
      .catch((err) => console.error("Reels fetch error:", err));
  }, []);

  // 🔥 PAGINATION LOGIC (FRONTEND ONLY)
  const totalPages = Math.ceil(topItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = topItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="new-sec top-rated-sec" id="movies">
      <div className="container">
        <div className="section-title">
          <h5 className="sub-title">REELS SECTION</h5>
          <h2 className="title">Trending Reels</h2>
        </div>

        <div className="row movies-grid">
          {currentItems.map((item) => (
            <MovieCard
              key={item._id}
              movie={item}
              setWatchList={setWatchList}
              watchList={watchList}
            />
          ))}
        </div>

        {/* ✅ PAGINATION */}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default TopMovies;
