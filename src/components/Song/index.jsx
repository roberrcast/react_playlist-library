import React from "react";
import "./Song.scss";

//Botones para agregar, borrar y tick
//Botón para agregar
import { ReactComponent as AddIcon } from "../../assets/addSvg.svg";

//Botón para borrar
import { ReactComponent as DeleteIcon } from "../../assets/deleteSvg.svg";

//Icono para "agregado"
import { ReactComponent as TickIcon } from "../../assets/tickSvg.svg";

const Song = ({ song, onAddToLibrary, onDeleteFromLibrary, isInLibrary }) => {
    const handleButtonClick = (e, callback) => {
        e.stopPropagation();
        callback();
    };

    return (
        <>
            <div className="display__grid-art">
                <img
                    src={song.albumArt}
                    alt={song.alt}
                    className="display__grid-img"
                />
            </div>

            <p className="display__grid-title">{song.title}</p>

            <p className="display__grid-artist">{song.artist}</p>

            <p className="display__grid-album">{song.album}</p>

            <div className="display__grid-btn-container">
                {onAddToLibrary && isInLibrary && (
                    <button className="display__grid-btn--ticked" disabled>
                        <TickIcon />
                    </button>
                )}

                {onAddToLibrary && !isInLibrary && (
                    <button
                        type="button"
                        className="display__grid-btn"
                        onClick={(e) =>
                            handleButtonClick(e, () => onAddToLibrary(song))
                        }
                    >
                        <AddIcon />
                    </button>
                )}

                {onDeleteFromLibrary && (
                    <button
                        type="button"
                        className="display__grid-btn"
                        onClick={(e) =>
                            handleButtonClick(e, () =>
                                onDeleteFromLibrary(song.id),
                            )
                        }
                    >
                        <DeleteIcon />
                    </button>
                )}
            </div>

            <p className="display__grid-time">{song.length}</p>
        </>
    );
};

export default Song;
