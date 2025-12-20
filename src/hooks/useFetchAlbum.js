import { useState, useEffect } from "react";
import axios from "axios";
import { formatSearchQuery } from "../utilsJS/utils";

const useFetchAlbum = (query) => {
    const [albumState, setAlbumState] = useState({
        albums: [],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        if (query) {
            const fetchAlbums = async () => {
                const formattedQuery = formatSearchQuery(query);
                try {
                    const response = await axios.get(
                        `/api/v1/json/123/searchalbum.php?s=${formattedQuery}`,
                    );
                    console.log(response);
                    setAlbumState({
                        albums: response.data.album,
                        isLoading: false,
                        error: null,
                    });
                } catch (error) {
                    setAlbumState({
                        albums: [],
                        isLoading: false,
                        error: "Hubo un error al intentar conseguir los álbumes.",
                    });
                }
            };
            fetchAlbums();
        }
    }, [query]);

    return albumState;
};

export default useFetchAlbum;
