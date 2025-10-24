import React from "react";
import "../Song/Song.scss";

const Library = ({ art, alt, title, artist, album, time }) => {
    return (
        <>
            <div className="display__grid-art">
                <img src={art} alt={alt} className="display__grid-img" />
            </div>

            <p className="display__grid-title">{title}</p>

            <p className="display__grid-artist">{artist}</p>

            <p className="display__grid-album">{album}</p>

            <p className="display__grid-time">{time}</p>
        </>
    );
};

export default Library;
