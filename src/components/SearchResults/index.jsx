import { useState } from "react";
import Song from "../Song/";
import "../Song/Song.scss";
import useFetchTracks from "../../hooks/useFetchTracks.js";

function SearchResults({ albums, librarySongs, onSongClick, onAddToLibrary }) {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const { tracks, isLoading, error } = useFetchTracks(
        selectedAlbum ? selectedAlbum.idAlbum : null,
    );

    return (
        <>
            {selectedAlbum === null ? (
                <div className="display__album-grid">
                    {albums.map((album) => {
                        const {
                            idAlbum,
                            strAlbumThumb,
                            strAlbum,
                            strArtist,
                            intYearReleased,
                        } = album;

                        return (
                            <div
                                className="display__album-item"
                                key={idAlbum}
                                onClick={() => setSelectedAlbum(album)}
                            >
                                <div className="display__album-thumb">
                                    <img
                                        src={strAlbumThumb}
                                        alt={`Imagen de portada de ${strAlbum}`}
                                    />
                                </div>

                                <p className="display__album-title">
                                    {strAlbum}
                                </p>

                                <p className="display__album-year">
                                    {intYearReleased}
                                </p>

                                <p className="display__album-artist">
                                    {strArtist}
                                </p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <>
                    <button
                        className="display__back-btn"
                        type="button"
                        onClick={() => setSelectedAlbum(null)}
                    >
                        Atrás
                    </button>
                    {isLoading && (
                        <p className="display__loading">Cargando canciones.</p>
                    )}

                    {error && <p className="display__error">{error}</p>}

                    {!isLoading && !error && tracks && (
                        <div className="display__grid">
                            <h4 className="display__grid-item">song</h4>

                            <h4 className="display__grid-item">artist</h4>

                            <h4 className="display__grid-item">album</h4>
                            <h4 className="display__grid-item">time</h4>

                            {tracks.map((song) => {
                                const normalizedSong = {
                                    id: song.idTrack,
                                    title: song.strTrack,
                                    artist: song.strArtist,
                                    album: song.strAlbum,
                                    albumArt:
                                        song.strTrackThumb ||
                                        selectedAlbum.strAlbumThumb,
                                    length: song.intDuration,
                                };

                                const isInLibrary = librarySongs.some(
                                    (libSong) =>
                                        libSong.id === normalizedSong.id,
                                );

                                return (
                                    <div
                                        className="display__grid-row"
                                        key={normalizedSong.id}
                                        onClick={() =>
                                            onSongClick(normalizedSong)
                                        }
                                    >
                                        <Song
                                            song={normalizedSong}
                                            onAddToLibrary={onAddToLibrary}
                                            isInLibrary={isInLibrary}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default SearchResults;
