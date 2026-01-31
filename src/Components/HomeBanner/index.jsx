const HomeBanner = () => {
  const fontOnly = {
    fontFamily: '"Playfair Display", serif',
  };

  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h4 className="sub-title" style={fontOnly}>
            White Marble
          </h4>

          <h1 className="title" style={fontOnly}>
            Film <span style={fontOnly}>Production</span>
          </h1>

          {/*
          <Link to="/#Movies" className="btn" style={fontOnly}>
            <i className="ri-arrow-right-line"></i>
            Browse Movies
          </Link>
          */}
        </div>
      </div>
    </header>
  );
};

export default HomeBanner;
