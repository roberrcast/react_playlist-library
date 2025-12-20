import { useState, useEffect } from "react";
import axios from "axios";

const useFetchTracks = (albumId) => {
    const [trackState, setTrackState] = useState({
        tracks: [],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        if (albumId) {
            const fetchTracks = async () => {
                try {
                    const response = await axios.get(
                        `/api/v1/json/123/track.php?m=${albumId}`,
                    );
                    console.log(response);
                    setTrackState({
                        tracks: response.data.track,
                        isLoading: false,
                        error: null,
                    });
                } catch (error) {
                    setTrackState({
                        tracks: [],
                        isLoading: false,
                        error: "Hubo un error al intentar conseguir las canciones.",
                    });
                }
            };

            fetchTracks();
        }
    }, [albumId]);

    return trackState;
};

export default useFetchTracks;
