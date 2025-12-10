import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAlbum = (artistName) => {
    const [albumState, setAlbumState] = useState({
        albums: [],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        if (artistName) {
            const fetchAlbums = async () => {
                try {
                    const response = await axios.get(
                        `/api/v1/json/123/searchalbum.php?s=${artistName}`,
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
    }, [artistName]);

    return albumState;
};

export default useFetchAlbum;
