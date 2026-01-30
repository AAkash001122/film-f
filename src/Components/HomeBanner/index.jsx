import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomeBanner = () => {
  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h4 className="sub-title">Marble</h4>
          <h1 className="title">
            Unlimited <span>Movie</span>, TV Shows, Web Series & More.
          </h1>

          {/* <Link to="/#Movies" className="btn">
            <i className="ri-arrow-right-line"></i>
            Browse Movies
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default HomeBanner;