import React from "react";
import Song from "../Song";
import "../Song/Song.scss";

const Library = ({ onSongClick, librarySongs, onDeleteFromLibrary }) => {
    return (
        <>
            <div className="display__grid">
                <h4 className="display__grid-item">song</h4>
                <h4 className="display__grid-item">artist</h4>
                <h4 className="display__grid-item">album</h4>
                <h4 className="display__grid-item">time</h4>

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
            </div>
        </>
    );
};

export default Library;
