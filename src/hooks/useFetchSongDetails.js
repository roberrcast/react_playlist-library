import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSongDetails = (trackId) => {
    const [details, setDetails] = useState({
        details: [],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        if (trackId) {
            const fetchSongDetails = async () => {
                try {
                    const response = await axios.get(
                        `/api/v1/json/123/track.php?h=${trackId}`,
                    );
                    console.log(response);
                    setDetails({
                        details: response.data.track || [],
                        isLoading: false,
                        error: null,
                    });
                } catch (error) {
                    setDetails({
                        details: [],
                        isLoading: false,
                        error: "Hubo un error al intentar conseguir los detalles.",
                    });
                }
            };

            fetchSongDetails();
        }
    }, [trackId]);

    return details;
};

export default useFetchSongDetails;

/*  */
