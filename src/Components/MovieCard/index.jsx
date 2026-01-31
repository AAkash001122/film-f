import React, { useEffect } from 'react';
import './style.css';

const MovieCard = ({ movie, watchList, setWatchList }) => {
  const watchListIds = watchList.map(item => item._id);

  const addToFavourite = () => {
    if (watchListIds.includes(movie._id)) {
      alert('Already in watchlist');
      return;
    }
    setWatchList([...watchList, movie]);
  };

  const deleteFromWatchList = () => {
    setWatchList(watchList.filter(item => item._id !== movie._id));
  };

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  const playReel = () => {
    if (!movie.trailerUrl) return;
    window.open(movie.trailerUrl.replace('/embed', ''), '_blank');
  };

  return (

    <div className="single-movie">
  <div className="movie-poster" onClick={playReel}>
    <img src={movie.poster} alt="reel-thumbnail" />

    <div className="play-overlay">
      <span className="play-icon">▶</span>
    </div>

    <div className="overlay-actions">
      {watchListIds.includes(movie._id) ? (
        <button
          className="action-btn remove"
          onClick={(e) => {
            e.stopPropagation();
            deleteFromWatchList();
          }}
        >
          ✕ Remove
        </button>
      ) : (
        <button
          className="action-btn add"
          onClick={(e) => {
            e.stopPropagation();
            addToFavourite();
          }}
        >
          ＋ Watch Later
        </button>
      )}
    </div>
  </div>

  <div className="movie-content inside-poster">
    <p className="credit">Produced by White Marble Production</p>
    {/* <p className="credit muted">Executed by Creative Team</p> */}
  </div>
</div>


  );
};

export default MovieCard;
