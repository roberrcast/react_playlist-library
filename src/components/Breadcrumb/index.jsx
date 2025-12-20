import React from "react";
import { useSearchParams } from "react-router-dom";

const Breadcrumb = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q");
    const albumId = searchParams.get("album");
    const albumName = searchParams.get("albumName");
    const albumArt = searchParams.get("albumArt");
    const songName = searchParams.get("track");

    if (!query) {
        return null;
    }

    return (
        <nav className="display__breadcrumb-nav">
            {/* link del search query */}
            <span
                className={`display__breadcrumb-item ${!albumId ? "display__breadcrumb-item--active" : ""}`}
                onClick={() => setSearchParams({ q: query })}
            >
                {query}
            </span>

            {albumName && (
                <>
                    <span className="display__breadcrumb-separator"> / </span>
                    <span
                        className={`display__breadcrumb-item ${albumId ? "display__breadcrumb-item--active" : ""} `}
                        onClick={() =>
                            setSearchParams({
                                q: query,
                                album: albumId,
                                albumName: albumName,
                                albumArt: albumArt,
                            })
                        }
                    >
                        {albumName}
                    </span>
                </>
            )}

            {songName && (
                <>
                    <span className="display__breadcrumb-separator"> / </span>

                    <span className="display__breadcrumb-item display__breadcrumb-item--active">
                        {songName}
                    </span>
                </>
            )}
        </nav>
    );
};

export default Breadcrumb;
