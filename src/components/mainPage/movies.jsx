import React from "react";
import jsonData from "../../data/movieData"
import "./movies.css"
const MoviewCard = ({ movie_json }) => {
    return (
        <>

            <div className="single-movie-card">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie_json.backdrop_path}`} alt="" />
                </div>
                <span style={{ textAlign: "center", padding: "10px 0px" }} className="movie-name">{movie_json.original_title}</span>
                < span className="name-date" style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
                    <span className="show-type">{movie_json.media_type}</span>
                    <span className="content-publish-date">
                        {movie_json.release_date}
                    </span>
                </ span>
            </div>
        </>
    )
}

const MoviewCards = () => {
    console.log(jsonData)
    return (
        <>
            <h1>Trending page</h1>
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