import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Song from "../Song/";
import useFetchTracks from "../../hooks/useFetchTracks.js";
import * as Styled from "../Display/styles";

// --- Redux imports ---
import { useSelector, useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";

function SearchResults({ albums, onSongClick }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const gridRef = useRef(null);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    // --- Redux Hooks ---
    const dispatch = useDispatch();
    const librarySongs = useSelector((state) => state);

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
                <Styled.AlbumGrid
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
                            <Styled.AlbumItem
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
                                <Styled.AlbumThumb>
                                    <Styled.AlbumCoverImg
                                        src={strAlbumThumb}
                                        alt={`Imagen de portada de ${strAlbum}`}
                                    />
                                </Styled.AlbumThumb>

                                <Styled.AlbumTitle>
                                    {strAlbum}
                                </Styled.AlbumTitle>

                                <Styled.AlbumYear>
                                    {intYearReleased}
                                </Styled.AlbumYear>

                                <Styled.AlbumArtist>
                                    {strArtist}
                                </Styled.AlbumArtist>
                            </Styled.AlbumItem>
                        );
                    })}
                </Styled.AlbumGrid>
            ) : (
                <>
                    {isLoading && (
                        <p className="display__loading">Cargando canciones.</p>
                    )}

                    {error && <p className="display__error">{error}</p>}

                    {!isLoading && !error && tracks && (
                        <Styled.Grid>
                            <h4>song</h4>

                            <h4>artist</h4>

                            <h4>album</h4>
                            <h4>time</h4>

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
                                    <Styled.GridRow
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
                                            onAddToLibrary={() =>
                                                dispatch(
                                                    addSong(normalizedSong),
                                                )
                                            }
                                            isInLibrary={isInLibrary}
                                        />
                                    </Styled.GridRow>
                                );
                            })}
                        </Styled.Grid>
                    )}
                </>
            )}
        </>
    );
}

export default SearchResults;
