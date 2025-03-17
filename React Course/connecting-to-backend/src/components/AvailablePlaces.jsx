import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import { Error } from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import {fetchAvailablePlaces} from "../http.js"

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places=await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "Could not fetch places. Pls check your code!" });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  // Render the Error component if an error occurs
  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  // Render the Places component if no error occurs
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}