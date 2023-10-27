import React from "react";
import jsonData from "../../data/movieData"
import "./movies.css"

import MoviewCard from "./showloadingPage"
// Movies JSON Data

// https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc



const MoviewCards = () => {

    return (
        <>
            <h1 style={{ padding: "20px 0px", textAlign: "center" }}>Trending page</h1>
            <main className="movie-cards">
                {jsonData && jsonData.results &&
                    jsonData.results.map((val) => {
                        return (<MoviewCard movie_json={val} />)
                    })}
            </main>
        </>
    )
}

export default MoviewCards;