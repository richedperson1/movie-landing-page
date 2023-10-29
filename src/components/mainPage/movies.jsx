import React, { useEffect, useState } from "react";
import ShimmerBox from "../decorator/shimmers";
import "./movies.css"

// Movies JSON Data

// https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc



export const MoviesCard = ({ movie_json, ind }) => {

    return (
        <>
            <div className={`single-movie-card movies${ind}`} key={`main-movies-cards${ind}`} >
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie_json.backdrop_path}`} alt="" />
                </div>
                <span style={{ textAlign: "center", padding: "10px 0px" }} className="movie-name" key={`span-id1${ind}`}>
                    {movie_json.title}
                </span>
                < span className="name-date" style={{ display: "flex", justifyContent: "space-between", width: "90%" }} key={`span-id2${ind}`}>
                    <span key={`span-id21${ind}`} className="show-type">Movie</span>
                    <span key={`span-id22${ind}`} className="content-publish-date">
                        {movie_json.release_date}
                    </span>
                </ span>
            </div>
        </>
    )
}
export const ShowLayOut = ({ url2Render }) => {
    const [showList, setShowList] = useState([]);
    const [showDataFound, setShowDataFound] = useState(0)
    const fetchingDataURL = async () => {
        const reponseFromURL = await fetch(url2Render);
        const jsonMoviesData = await reponseFromURL.json()
        return jsonMoviesData
    }

    useEffect(() => {
        const ouputJsonData = fetchingDataURL();
        // console.log("data is loading", ouputJsonData, url2Render)
        ouputJsonData.then((result) => {
            setShowList(result)
            setShowDataFound(1)
        })

    }, [showDataFound])

    const ShimmerUIRendering = () => {
        return [...Array(20)].map((e, i) => {
            return (<ShimmerBox width={300} height={307} bgColor={'#766f6f'} />)
        })

    }
    if (showDataFound === 0) {
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
                {showList && showList.results &&
                    showList.results.map((val, id) => {
                        return (<MoviesCard movie_json={val} ind={id} />)
                    })}
            </main>
        </>
    )
}

export const Movieshows = () => {
    return (
        <>
            <ShowLayOut url2Render={"https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc"} />
        </>
    )
}