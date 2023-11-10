import React, { useEffect, useState } from "react";
import ShimmerBox from "../decorator/shimmers";
import "./movies.css"
import PaginationControlled from "../decorator/pagenation"
// import Popover from '@mui/material/Popover';
// Movies JSON Data
import BasicPopover from "../decorator/popover"

// https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc



export const MoviesCard = ({ movie_json, ind }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [linksRes, setLinkRes] = useState("")
    const [ytLinkKey, setYtLinkKey] = useState("")
    const handleClick = (event) => {
        // console.log("This is key : ", movie_json.id)
        // console.log("This is key : ", linksRes)
        // console.log("This is json : ", movie_json)
        setAnchorEl(event.currentTarget);
    };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const ytVideoLink = `https://api.themoviedb.org/3/movie/${movie_json.id}/videos?api_key=26ba5e77849587dbd7df199727859189&language=en-US`;

    useEffect(() => {
        const videoCapture = async () => {

            const youtubeLinkReponse = await fetch(ytVideoLink)
            const youtubeLink = await youtubeLinkReponse.json()
            setYtLinkKey(youtubeLink.results[0].key)
            setLinkRes(youtubeLink)
            return youtubeLink
        }
        videoCapture()
    }, [ytLinkKey])

    return (
        <>
            <div aria-describedby={id} className={`single-movie-card movies${ind}`} key={`main-movies-cards${ind}`} onClick={handleClick} >
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie_json.poster_path}`} alt="" />
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
            {/* anchorEl,setAnchorEl */}
            <BasicPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} movie_json={movie_json}
                ytLinkKey={ytLinkKey} />
            {/* <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
            >
                <div className="container-moview-detainls">
                    <div className="image-container">

                        <img src={`https://image.tmdb.org/t/p/w500/${movie_json.backdrop_path}`} alt="" />
                    </div>
                    <div className="description-data">
                        <span style={{ textAlign: "center", color: "#fffe", fontSize: "1.5rem" }} className="movie-title">{movie_json.title}</span>
                        <p className="description">
                            {movie_json.overview}
                        </p>
                        <div className="youtube-link">
                            {ytLinkKey && <a href={`https://www.youtube.com/watch?v=${ytLinkKey}`} tabIndex={0} target="_blank" rel="noopener noreferrer" className="yt-link"> Please Watch it</a>}
                        </div>

                    </div>
                </div>

            </Popover> */}
        </>
    )
}
export const ShowLayOut = ({ url2Render, totalPageSet, pageNumber }) => {
    const [showList, setShowList] = useState([]);
    const [showDataFound, setShowDataFound] = useState(0)
    const fetchingDataURL = async () => {
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
                        return (<MoviesCard movie_json={val} ind={id} />)
                    })}
            </main>
        </>
    )
}

export const Movieshows = () => {
    //  total, page, setPage
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    // console.log("the page number is ", page)
    return (
        <>
            <ShowLayOut url2Render={`https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`} totalPageSet={setTotalPage} pageNumber={page} />
            <PaginationControlled total={totalPage} page={page} setPage={setPage} />
        </>
    )
}