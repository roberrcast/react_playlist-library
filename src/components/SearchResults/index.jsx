import Song from "../Song/";

function SearchResults({ songsToDisplay, onSongClick }) {
    return (
        <>
            {songsToDisplay.map((song) => (
                <div
                    className="display__grid-row"
                    key={song.id}
                    onClick={() => onSongClick(song)}
                >
                    <Song
                        id={song.id}
                        album={song.album}
                        artist={song.artist}
                        title={song.title}
                        time={song.length}
                        art={song.albumArt}
                        alt={song.alt}
                    />
                </div>
            ))}
        </>
    );
}

export default SearchResults;

/* Continue refactoring this to .map over the list of songs in songData to here */
