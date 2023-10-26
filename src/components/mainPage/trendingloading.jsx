import React, { useEffect, useState } from "react";
import ShimmerBox from "../decorator/shimmers";
import "./movies.css"

const MoviewCard = ({ movie_json, ind }) => {

    return (
        <>
            <div className={`single-movie-card movies${ind}`} key={`main-movies-cards${ind}`} >
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie_json.backdrop_path}`} alt="" />
                </div>
                <span style={{ textAlign: "center", padding: "10px 0px" }} className="movie-name" key={`span-id1${ind}`}>
                    {movie_json.media_type === 'movie' ? movie_json.original_title : movie_json.name}
                </span>
                < span className="name-date" style={{ display: "flex", justifyContent: "space-between", width: "90%" }} key={`span-id2${ind}`}>
                    <span key={`span-id21${ind}`} className="show-type">{movie_json.media_type === 'movie' ? "Movie show" : "TV show"}</span>
                    <span key={`span-id22${ind}`} className="content-publish-date">
                        {movie_json.media_type === 'movie' ? movie_json.release_date : movie_json.first_air_date}
                    </span>
                </ span>
            </div>
        </>
    )
}
const Trendingshows = () => {
    const [moviesList, setMoviesList] = useState([])

    const [trendingDataGot, setTrendingDataGot] = useState(0)
    const fetchingDataURL = async () => {
        const reponseFromURL = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=26ba5e77849587dbd7df199727859189&page=2");
        const jsonMoviesData = await reponseFromURL.json()

        return jsonMoviesData
    }

    useEffect(() => {
        const ouputJsonData = fetchingDataURL();
        ouputJsonData.then((result) => {
            setMoviesList(result)
            setTrendingDataGot(1)
        })

    }, [trendingDataGot])

    const ShimmerUIRendering = () => {
        console.log("this is array", [...Array(20)])
        return [...Array(20)].map((e, i) => {
            return (<ShimmerBox width={300} height={307} bgColor={'#766f6f'} />)
        })

    }
    if (trendingDataGot === 0) {
        return (<>
            <h1 style={{ padding: "20px 0px", textAlign: "center" }}>Trending page</h1>
            <main className="movie-cards">
                {ShimmerUIRendering()}
            </main>
        </>)
    }

    return (
        <>
            <h1 style={{ padding: "20px 0px", textAlign: "center" }}>Trending page</h1>
            <main className="movie-cards">
                {moviesList && moviesList.results &&
                    moviesList.results.map((val, id) => {
                        return (<MoviewCard movie_json={val} ind={id} />)
                    })}
            </main>
        </>
    )
}

export default Trendingshows;