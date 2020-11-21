import React from "react";
import { useSearch } from "../hooks/useSearch";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { isLoading, isError, data } = useSearch(searchTerm);

  return (
    <div className="photo-container">
      {isError ? (
        <div>Error</div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <Gallery data={data.photos.photo} />
      )}
    </div>
  );
};

export default Container;
