import React, { useState } from "react";
import SearchResults from "../SearchResults";
import Library from "../Library";
import "./Display.scss";

const Display = ({
    librarySongs,
    queryFromURL,
    onAddToLibrary,
    onDeleteFromLibrary,
    albums,
    isLoading,
    error,
}) => {
    const [defaultSong, setSong] = useState(null);

    const handleSongClick = (song) => {
        setSong(song);
    };

    const activeList = queryFromURL ? albums : librarySongs;

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
                                    <h3 className="display__info-title">
                                        {defaultSong.title}
                                    </h3>
                                    <p className="display__info-band">
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
                        {isLoading ? (
                            <p className="display__playlist-messages">
                                Cargando...
                            </p>
                        ) : error ? (
                            <p className="display__playlist-messages">
                                {error}
                            </p>
                        ) : albums && albums.length > 0 ? (
                            <SearchResults
                                albums={albums}
                                librarySongs={librarySongs}
                                onSongClick={handleSongClick}
                                onAddToLibrary={onAddToLibrary}
                            />
                        ) : (
                            <p className="display__no-results">
                                No se encontraron resultados
                            </p>
                        )}
                    </section>
                </div>
            </article>
        </>
    );
};

export default Display;
