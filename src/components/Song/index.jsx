import React from "react";
import { formatDuration } from "../../utilsJS/utils.js";
import * as Styled from "../Display/styles";
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
            <Styled.WrapperOuter>
                <Styled.GridArt>
                    <Styled.GridImg
                        src={song.albumArt}
                        alt={song.alt}
                        className="display__grid-img"
                    />
                </Styled.GridArt>

                <Styled.WrapperInner>
                    <Styled.GridTitle>{song.title}</Styled.GridTitle>

                    <Styled.GridArtist>{song.artist}</Styled.GridArtist>
                </Styled.WrapperInner>

                <Styled.GridAlbum>{song.album}</Styled.GridAlbum>

                <Styled.GridBtnContainer>
                    {onAddToLibrary && isInLibrary && (
                        <Styled.GridBtn disabled>
                            <Styled.GridSvg as={TickIcon} isTicked />
                        </Styled.GridBtn>
                    )}

                    {onAddToLibrary && !isInLibrary && (
                        <Styled.GridBtn
                            type="button"
                            className="display__grid-btn"
                            onClick={(e) =>
                                handleButtonClick(e, () => onAddToLibrary(song))
                            }
                        >
                            <Styled.GridSvg as={AddIcon} />
                        </Styled.GridBtn>
                    )}

                    {onDeleteFromLibrary && (
                        <Styled.GridBtn
                            type="button"
                            className="display__grid-btn"
                            onClick={(e) =>
                                handleButtonClick(e, () =>
                                    onDeleteFromLibrary(song.id),
                                )
                            }
                        >
                            <Styled.GridSvg as={DeleteIcon} isDelete />
                        </Styled.GridBtn>
                    )}
                </Styled.GridBtnContainer>
            </Styled.WrapperOuter>

            <Styled.GridTime>{formatDuration(song.length)}</Styled.GridTime>
        </>
    );
};

export default Song;
