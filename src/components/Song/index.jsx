import React from "react";
import { formatDuration } from "../../utilsJS/utils.js";
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
            <div className="display__wrapper-outer">
                <div className="display__grid-art">
                    <img
                        src={song.albumArt}
                        alt={song.alt}
                        className="display__grid-img"
                    />
                </div>

                <div className="display__wrapper-inner">
                    <p className="display__grid-title">{song.title}</p>

                    <p className="display__grid-artist">{song.artist}</p>
                </div>

                <p className="display__grid-album">{song.album}</p>

                <div className="display__grid-btn-container">
                    {onAddToLibrary && isInLibrary && (
                        <button className="display__grid-btn--ticked" disabled>
                            <TickIcon className="display__grid-svg--ticked" />
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
                            <AddIcon className="display__grid-svg" />
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
                            <DeleteIcon className="display__grid-svg--delete" />
                        </button>
                    )}
                </div>
            </div>

            <p className="display__grid-time">{formatDuration(song.length)}</p>
        </>
    );
};

export default Song;
