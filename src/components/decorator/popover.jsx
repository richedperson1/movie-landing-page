import * as React from 'react';
import Popover from '@mui/material/Popover';
import "./popover.css"
export default function BasicPopover({ anchorEl, setAnchorEl, movie_json, ytLinkKey }) {
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleClose = () => {
        setAnchorEl(null);
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
                        <div className="youtube-link">
                            {ytLinkKey && <a href={`https://www.youtube.com/watch?v=${ytLinkKey}`} tabIndex={0} target="_blank" rel="noopener noreferrer" className="yt-link"> Please Watch it</a>}
                        </div>

                    </div>
                </div>

            </Popover>
        </div>
    );
}
