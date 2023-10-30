import React, { useEffect, useState } from "react";
import ShimmerBox from "../decorator/shimmers";
import "./movies.css"

import PaginationControlled from "../decorator/pagenation"
export const ShowCard = ({ movie_json, ind }) => {

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
export const ShowLayOut = ({ url2Render, totalPageSet, pageNumber }) => {
    const [showList, setShowList] = useState([]);
    const [showDataFound, setShowDataFound] = useState(0)
    const fetchingDataURL = async () => {
        console.log("The urls is : ", url2Render)
        const reponseFromURL = await fetch(url2Render);
        const jsonMoviesData = await reponseFromURL.json()
        totalPageSet(Math.min(100, jsonMoviesData['total_pages']))
        return jsonMoviesData
    }

    useEffect(() => {
        const ouputJsonData = fetchingDataURL();
        // console.log("data is loading", ouputJsonData, url2Render)
        ouputJsonData.then((result) => {
            setShowList(result)
            setShowDataFound(1)
        })

    }, [url2Render])

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
                        return (<ShowCard movie_json={val} ind={id} />)
                    })}
            </main>

        </>
    )
}

const Trendingshows = () => {
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    // console.log("the page number is ", page)
    return (
        <>
            <ShowLayOut url2Render={`https://api.themoviedb.org/3/trending/all/day?api_key=26ba5e77849587dbd7df199727859189&page=${page}`} totalPageSet={setTotalPage}
                pageNumber={page} />
            <PaginationControlled total={totalPage} page={page} setPage={setPage} />
        </>
    )
}

export const WebSeries = () => {
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    // setPage(2)
    // total, page, setPage
    // console.log("the page number is ", page)
    return (
        <>
            <ShowLayOut url2Render={`https://api.themoviedb.org/3/discover/tv?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc&page=${page}`} totalPageSet={setTotalPage} pageNumber={page} />
            <PaginationControlled total={totalPage} page={page} setPage={setPage} />
        </>
    )
}


export default Trendingshows;