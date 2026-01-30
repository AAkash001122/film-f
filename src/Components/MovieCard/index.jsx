import React, { useEffect } from 'react';
import './style.css';

const MovieCard = ({ movie, setWatchList, watchList }) => {
  const watchListIds = watchList.map((item) => item._id);

  const addToFavourite = (movie) => {
    if (watchListIds.includes(movie._id)) {
      alert('Already in watchlist');
    } else {
      setWatchList([...watchList, movie]);
    }
  };

  const deleteFromWatchList = (id) => {
    const newWatchList = watchList.filter((item) => item._id !== id);
    setWatchList(newWatchList);
  };

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  // 🔥 CLICK TO PLAY REEL
  const playReel = () => {
    window.open(movie.trailerUrl.replace('/embed', ''), '_blank'); 
    // Instagram reel original page new tab me open hoga
  };

  return (
    <div className='single-movie'>
      <div className='movie-poster' onClick={playReel} style={{ cursor: 'pointer' }}>
        
        <img src={movie.poster} alt='reel-thumbnail' />

        <div className="play-overlay">▶</div>

        <ul className='overlay-btns'>
          {watchListIds.includes(movie._id) ? (
            <li>
              <button
                className='btn watch-btn'
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFromWatchList(movie._id);
                }}>
                Remove
              </button>
            </li>
          ) : (
            <li>
              <button
                className='btn watch-btn'
                onClick={(e) => {
                  e.stopPropagation();
                  addToFavourite(movie);
                }}>
                Watch Later
              </button>
            </li>
          )}
        </ul>

      </div>

      <div className='movie-content'>
        <h5 className='title'>{movie.title}</h5>
      </div>
    </div>
  );
};

export default MovieCard;
