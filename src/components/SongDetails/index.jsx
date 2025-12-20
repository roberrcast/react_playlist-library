import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetchSongDetails from "../../hooks/useFetchSongDetails";

const SongDetails = ({ trackId }) => {
    const { details, isLoading, error } = useFetchSongDetails(trackId);

    const [searchParams, setSearchParams] = useSearchParams();

    const currentQuery = searchParams.get("q");
    const albumId = searchParams.get("album");

    // const handleBack = () => {
    //     setSearchParams({ q: currentQuery, album: albumId });
    // };

    if (isLoading) {
        return <p className="display__loading">Cargando los detalles...</p>;
    }

    if (error) {
        return <p className="display__error">{error}</p>;
    }

    return (
        <>
            {details && details.length > 0 ? (
                details.map((detail) => (
                    <section className="display__details" key={detail.idTrack}>
                        <p className="display__genre">
                            <span>Género</span>: {detail.strGenre}
                        </p>

                        <p className="display__description">
                            {detail.strDescriptionEN ||
                                "No hay descripción disponible para esta canción."}
                        </p>

                        {detail.strMusicVid && (
                            <iframe
                                src={detail.strMusicVid.replace(
                                    "watch?v=",
                                    "embed/",
                                )}
                                frameborder="0"
                                allow="accelerometer; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Music video"
                                className="display__music-video"
                            ></iframe>
                        )}
                    </section>
                ))
            ) : (
                <p>No se encontraron detalles para esta canción</p>
            )}
        </>
    );
};

export default SongDetails;
