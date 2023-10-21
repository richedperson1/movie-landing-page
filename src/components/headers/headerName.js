import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      {/* https://api.themoviedb.org/3/trending/all/day?api_key=26ba5e77849587dbd7df199727859189&page=1/ax1rpxHCcXVwwfn0zSte1udoJwV.jpg */}
      <header className="container">
        <span className="movies-logo">🎬</span>
        <h1 className="page-title"> ENTERTAINMENT HUB </h1>
        <span className="movies-logo">🎥</span>
      </header>
    </>
  );
};

export default Header;
