import React, { useState } from "react";
import SearchResults from "../SearchResults";
import Library from "../Library";
import "./Display.scss";

const Display = ({
    songsToDisplay,
    librarySongs,
    searchQuery,
    onAddToLibrary,
    onDeleteFromLibrary,
}) => {
    const [defaultSong, setSong] = useState(null);

    const handleSongClick = (song) => {
        setSong(song);
    };

    const activeList = searchQuery ? songsToDisplay : librarySongs;

    return (
        <>
            <article className="display">
                <div className="display__inner">
                    <section className="display__showcase">
                        {defaultSong ? (
                            <>
                                <div className="display__album-art">
                                    <img
                                        src={defaultSong.albumArt}
                                        alt={defaultSong.alt}
                                        className="display__album-img"
                                    />
                                </div>

                                <div className="display__info">
                                    <h3 className="display__title">
                                        {defaultSong.title}
                                    </h3>
                                    <p className="display__band">
                                        {defaultSong.artist}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="display__showcase-placeholder">
                                <p className="display__showcase-message">
                                    Seleccione una canción
                                </p>
                            </div>
                        )}
                    </section>

                    <section className="display__playlist">
                        {activeList.length > 0 ? (
                            <div className="display__grid">
                                <h4 className="display__grid-item"></h4>
                                <h4 className="display__grid-item">song</h4>
                                <h4 className="display__grid-item">artist</h4>
                                <h4 className="display__grid-item">album</h4>
                                <h4 className="display__grid-item">time</h4>

                                {searchQuery ? (
                                    <SearchResults
                                        songsToDisplay={songsToDisplay}
                                        librarySongs={librarySongs}
                                        onSongClick={handleSongClick}
                                        onAddToLibrary={onAddToLibrary}
                                    />
                                ) : (
                                    <Library
                                        librarySongs={librarySongs}
                                        onSongClick={handleSongClick}
                                        onDeleteFromLibrary={
                                            onDeleteFromLibrary
                                        }
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="display__playlist-messages">
                                {searchQuery ? (
                                    <p className="display__playlist-messages display__playlist-messages--no-results">
                                        No se encontraron resultados
                                    </p>
                                ) : (
                                    <p className="display__playlist-messages display__playlist-messages--empty">
                                        Su biblioteca está vacía
                                    </p>
                                )}
                            </div>
                        )}
                    </section>
                </div>
            </article>
        </>
    );
};

export default Display;
