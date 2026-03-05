import React from "react";
import useFetchSongDetails from "../../hooks/useFetchSongDetails";
import * as Styled from "./styles";
import { useParams } from "react-router-dom";

const SongDetails = () => {
    const { trackId } = useParams();
    const { details, isLoading, error } = useFetchSongDetails(trackId);

    /* const [searchParams, setSearchParams] = useSearchParams(); */

    // const currentQuery = searchParams.get("q");
    // const albumId = searchParams.get("album");

    if (isLoading) {
        return (
            <Styled.PlaylistMessages>
                Cargando los detalles...
            </Styled.PlaylistMessages>
        );
    }

    if (error) {
        return <Styled.PlaylistMessages error>{error}</Styled.PlaylistMessages>;
    }

    return (
        <>
            {details && details.length > 0 ? (
                details.map((detail) => (
                    <Styled.DetailsSection key={detail.idTrack}>
                        <Styled.Genre>
                            <span>Género</span>: {detail.strGenre}
                        </Styled.Genre>

                        <Styled.Description>
                            {detail.strDescriptionEN ||
                                "No hay descripción disponible para esta canción."}
                        </Styled.Description>

                        {detail.strMusicVid && (
                            <Styled.MusicVideo
                                src={detail.strMusicVid.replace(
                                    "watch?v=",
                                    "embed/",
                                )}
                                frameborder="0"
                                allow="accelerometer; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Music video"
                            ></Styled.MusicVideo>
                        )}
                    </Styled.DetailsSection>
                ))
            ) : (
                <Styled.PlaylistMessages>
                    No se encontraron detalles para esta canción
                </Styled.PlaylistMessages>
            )}
        </>
    );
};

export default SongDetails;
