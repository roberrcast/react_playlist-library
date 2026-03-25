import React, { useState } from "react";
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
    const [isJustAdded, setIsJustAdded] = useState(false);

    const handleButtonClick = (e, callback) => {
        e.stopPropagation();
        if (callback === onAddToLibrary) {
            setIsJustAdded(true);
        }
        callback();
    };

    return (
        <>
            <Styled.WrapperOuter>
                <Styled.GridArt>
                    <Styled.GridImg src={song.albumArt} alt={song.alt} />
                </Styled.GridArt>

                <Styled.WrapperInner>
                    <Styled.GridTitle>{song.title}</Styled.GridTitle>

                    <Styled.GridArtist>{song.artist}</Styled.GridArtist>
                </Styled.WrapperInner>

                <Styled.GridAlbum>{song.album}</Styled.GridAlbum>

                <Styled.GridBtnContainer>
                    {onAddToLibrary && isInLibrary && (
                        <Styled.GridBtn
                            disabled
                            aria-label={
                                isJustAdded
                                    ? `${song.title} ha sido agregada a su biblioteca`
                                    : `${song.title} se encuentra en su biblioteca`
                            }
                        >
                            <Styled.GridSvg as={TickIcon} $isTicked />
                        </Styled.GridBtn>
                    )}

                    {onAddToLibrary && !isInLibrary && (
                        <Styled.GridBtn
                            type="button"
                            onClick={(e) =>
                                handleButtonClick(e, onAddToLibrary)
                            }
                            aria-label={`Agregar ${song.title} a la biblioteca`}
                        >
                            <Styled.GridSvg as={AddIcon} />
                        </Styled.GridBtn>
                    )}

                    {onDeleteFromLibrary && (
                        <Styled.GridBtn
                            type="button"
                            onClick={(e) =>
                                handleButtonClick(e, () =>
                                    onDeleteFromLibrary(song.id),
                                )
                            }
                            aria-label={`Eliminar ${song.title} de la biblioteca`}
                        >
                            <Styled.GridSvg as={DeleteIcon} $isDelete />
                        </Styled.GridBtn>
                    )}
                </Styled.GridBtnContainer>
            </Styled.WrapperOuter>

            <Styled.GridTime>{formatDuration(song.length)}</Styled.GridTime>
        </>
    );
};

export default Song;
