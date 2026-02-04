import React from "react";
import useFetchSongDetails from "../../hooks/useFetchSongDetails";
import * as Styled from "./styles";
import { PlaylistMessages } from "../Display/styles";

const SongDetails = ({ trackId }) => {
    const { details, isLoading, error } = useFetchSongDetails(trackId);

    /* const [searchParams, setSearchParams] = useSearchParams(); */

    // const currentQuery = searchParams.get("q");
    // const albumId = searchParams.get("album");

    if (isLoading) {
        return <PlaylistMessages>Cargando los detalles...</PlaylistMessages>;
    }

    if (error) {
        return <PlaylistMessages>{error}</PlaylistMessages>;
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
                <PlaylistMessages>
                    No se encontraron detalles para esta canción
                </PlaylistMessages>
            )}
        </>
    );
};

export default SongDetails;
