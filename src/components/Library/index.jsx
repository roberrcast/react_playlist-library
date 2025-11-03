import React from "react";
import Song from "../Song";
import "../Song/Song.scss";

const Library = ({ onSongClick, librarySongs, onDeleteFromLibrary }) => {
    return (
        <>
            {librarySongs.map((song) => (
                <div
                    className="display__grid-row"
                    key={song.id}
                    onClick={() => onSongClick(song)}
                >
                    <Song
                        song={song}
                        onDeleteFromLibrary={onDeleteFromLibrary}
                    />
                </div>
            ))}
        </>
    );
};

export default Library;
