import React from "react";
import Song from "../Song";
import * as Styled from "../Display/styles";

const Library = ({ onSongClick, librarySongs, onDeleteFromLibrary }) => {
    return (
        <>
            {librarySongs && librarySongs.length > 0 ? (
                <Styled.Grid>
                    <h4>song</h4>
                    <h4>artist</h4>
                    <h4>album</h4>
                    <h4>time</h4>

                    {librarySongs.map((song) => (
                        <Styled.GridRow
                            key={song.id}
                            onClick={() => onSongClick(song)}
                        >
                            <Song
                                song={song}
                                onDeleteFromLibrary={onDeleteFromLibrary}
                            />
                        </Styled.GridRow>
                    ))}
                </Styled.Grid>
            ) : (
                <Styled.PlaylistMessages>
                    Su librería está vacía
                </Styled.PlaylistMessages>
            )}
        </>
    );
};

export default Library;
