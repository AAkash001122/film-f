import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  let lastWord = movie ? movie.title.split(' ').pop() : ''; // title backend se

  useEffect(() => {
    // Backend se fetch
    fetch(`http://localhost:5000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch(err => console.error('Error:', err));
  }, [id]);

  return (
    <header className='page-header movie-details-header'>
      <div className='container'>
        {movie.title ? (
          <div className='movie-details'>
            <div className='movie-poster'>
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className='details-content'>
              {movie.director ? ( // agar director field add kiya ho backend mein
                <h5 className='director'>{movie.director.split(',')[0]}</h5>
              ) : null}
              <h2 className='title'>{movie.title.split(' ').slice(0, -1).join(' ')} <span>{lastWord}</span></h2>
              <div className='banner-meta'>
                <ul>
                  <li className='vid'>
                    <span className='type'>{movie.type}</span>
                    <span className='quality'>HD</span>
                  </li>
                  <li className='category'>
                    <span>{movie.genre.slice(0, 2).join(', ')}</span>
                  </li>
                  <li className='time'>
                    <span>
                      <i className='ri-calendar-2-line'></i>
                      {movie.year}
                    </span>
                    <span>
                      <i className='ri-time-line'></i>
                      {movie.runtime || 'N/A'} {/* agar runtime add kiya ho */}
                    </span>
                  </li>
                </ul>
              </div>
              <p className='desc'>{movie.description}</p>
              <a
                className='btn watch-btn'
                href={movie.trailerUrl || '#'} // backend trailerUrl
                target='_blank'
                rel='noreferrer'>
                <i className="ri-play-fill"></i>
                Watch Now 
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default MovieDetails;