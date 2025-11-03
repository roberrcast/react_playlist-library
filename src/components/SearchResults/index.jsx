import Song from "../Song/";
import "../Song/Song.scss";

function SearchResults({
    songsToDisplay,
    librarySongs,
    onSongClick,
    onAddToLibrary,
}) {
    return (
        <>
            {songsToDisplay.map((song) => {
                const isInLibrary = librarySongs.some(
                    (libSong) => libSong.id === song.id,
                );

                return (
                    <div
                        className="display__grid-row"
                        key={song.id}
                        onClick={() => onSongClick(song)}
                    >
                        <Song
                            song={song}
                            onAddToLibrary={onAddToLibrary}
                            isInLibrary={isInLibrary}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default SearchResults;
