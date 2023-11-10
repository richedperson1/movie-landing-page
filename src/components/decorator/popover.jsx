import * as React from 'react';
import Popover from '@mui/material/Popover';
import "./popover.css"
export default function BasicPopover({ anchorEl, setAnchorEl, movie_json, ytLinkKey }) {
    const [anchorElDownload, setAnchorElDownload] = React.useState(null);
    const [moviesDownloadLink, setMoviesDownloadLinks] = React.useState([])
    const moviesDownloadLinks = async () => {
        try {
            const movieName = `${movie_json.title ? movie_json.title : movie_json.name}`.toLowerCase().replace(/\s/g, '-')
            const response = await fetch(
                `https://pogolinks.hair/${movie_json.media_type === 'movie' ? 'movies' : 'webseries'}/${movieName}/`
            );

            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }

            // Depending on the type of response (JSON, text, etc.), you can use appropriate methods
            const responseData = await response.text(); // Change this based on the response type

            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(responseData, "text/html");

            const findingURL_fromDoc = htmlDocument.querySelectorAll(
                "tr.table-sub .maintb a"
            );
            // console.log("This is movies downloads URLS")
            const moviesDownloadLinks = Array.from(findingURL_fromDoc).map((val) => {
                return ([val.href, val.innerHTML]);
            });
            setMoviesDownloadLinks(moviesDownloadLinks);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    React.useEffect(() => {

        moviesDownloadLinks()
    }, [])

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickDownload = (event) => {
        setAnchorElDownload(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div >
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                className='popover-width'
            >
                <div className="container-moview-detainls">
                    <div className="image-container">

                        <img src={`https://image.tmdb.org/t/p/w500/${movie_json.backdrop_path}`} alt="" />
                    </div>
                    <div className="description-data">
                        <span style={{ textAlign: "center", color: "#fffe", fontSize: "1.5rem" }} className="movie-title">{movie_json.title ? movie_json.title : movie_json.name}</span>
                        <p className="description" style={{ textAlign: "justify" }}>
                            {movie_json.overview}
                        </p>
                        <div className="youtube-link flex flex-gap-10px">
                            {ytLinkKey && <a href={`https://www.youtube.com/watch?v=${ytLinkKey}`} tabIndex={0} target="_blank" rel="noopener noreferrer" className="yt-link"> Please Watch it</a>}

                            <span onClick={(e) => {
                                handleClickDownload(e)
                                handleClose()
                            }} style={{ cursor: "pointer" }} className="yt-link">Download Movie</span>
                        </div>

                    </div>
                </div>

            </Popover>
            <DownloadPopOver movieDownloadLinks={moviesDownloadLink} anchorElDownload={anchorElDownload} setAnchorElDownload={setAnchorElDownload} />

        </div >
    );
}


function DownloadPopOver({ movieDownloadLinks, anchorElDownload, setAnchorElDownload }) {

    console.log("====>>>>>>>>>>>", movieDownloadLinks)
    // moviesDownloadLinks()

    const handleClosing = () => {
        setAnchorElDownload(null);
    };


    const open = Boolean(anchorElDownload);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div >
            <Popover
                id={id}
                open={open}
                anchorEl={anchorElDownload}
                onClose={handleClosing}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                className='popover-width'
            >
                <div className="container-moview-detainls flex-col width-fit-content" style={{ width: "fit-content" }}>

                    {movieDownloadLinks && movieDownloadLinks.map((val) => {
                        return (<>
                            <a className="movie-download-link" target='_blank' href={`${val[0]}`}>{val[1]}</a>
                        </>)
                    })}
                </div>

            </Popover>
        </div>
    );

}