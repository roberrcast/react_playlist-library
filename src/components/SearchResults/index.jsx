import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Song from "../Song/";
import useFetchTracks from "../../hooks/useFetchTracks.js";
import "../SearchResults/SearchResults.scss";

function SearchResults({ albums, librarySongs, onSongClick, onAddToLibrary }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const gridRef = useRef(null);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const currentQuery = searchParams.get("q");
    const selectedAlbumId = searchParams.get("album");
    const albumName = searchParams.get("albumName");
    const albumArt = searchParams.get("albumArt");

    const { tracks, isLoading, error } = useFetchTracks(selectedAlbumId);

    /* ----- funciones para el efecto hover de los álbumes --------- */
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const allItems = Array.from(grid.children);

        if (hoveredIndex === null) {
            allItems.forEach((item) => item.classList.remove("shifted"));
            return;
        }

        const hoveredItem = allItems[hoveredIndex];
        if (!hoveredItem) return;

        const hoveredTop = hoveredItem.getBoundingClientRect().top;

        allItems.forEach((item, index) => {
            const shouldBeShifted =
                index > hoveredIndex &&
                Math.abs(item.getBoundingClientRect().top - hoveredTop) < 1;

            item.classList.toggle("shifted", shouldBeShifted);
        });
    }, [hoveredIndex]);
    /*---------- final de las funciones ------------*/

    return (
        <>
            {selectedAlbumId === null ? (
                <div
                    className="display__album-grid"
                    ref={gridRef}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {albums.map((album, index) => {
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
                                onMouseEnter={() => setHoveredIndex(index)}
                                onClick={() =>
                                    setSearchParams({
                                        q: currentQuery,
                                        album: album.idAlbum,
                                        albumName: album.strAlbum,
                                        albumArt: album.strAlbumThumb,
                                    })
                                }
                            >
                                <div className="display__album-thumb">
                                    <img
                                        className="display__img"
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
                                    albumArt: song.strTrackThumb || albumArt,
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
                                        onClick={() => {
                                            onSongClick(normalizedSong);
                                            setSearchParams({
                                                q: currentQuery,
                                                album: selectedAlbumId,
                                                /* artist: normalizedSong.artist, */
                                                track: normalizedSong.title,
                                                albumName: albumName,
                                                albumArt: albumArt,
                                                trackId: normalizedSong.id,
                                            });
                                        }}
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
