import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSongDetails = (artist, songName) => {
  const [details, setDetails] = useState({
    details: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    if (artist && songName) {
      const fetchSongDetails = async () => {
        try {
          const response = await axios.get(
            `/api/v1/json/123/searchtrack.php?s=${artist}&t=${songName}`,
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
  }, [artist, songName]);

  return details;
};

export default useFetchSongDetails;
