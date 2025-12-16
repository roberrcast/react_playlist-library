import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchResults from "../SearchResults";
import SongDetails from "../SongDetails";
/* import Library from "../Library"; */
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
    const [searchParams] = useSearchParams();

    const artist = searchParams.get("artist");
    const trackName = searchParams.get("track");
    const albumName = searchParams.get("albumName");
    const albumArt = searchParams.get("albumArt");

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
                                    Seleccione un álbum o canción
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
                        ) : artist && trackName ? (
                            <SongDetails
                                artist={artist}
                                songName={trackName}
                                albumName={albumName}
                                albumArt={albumArt}
                            />
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
