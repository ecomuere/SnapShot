import React from "react";
import Container from "./Container";
import { useParams } from "react-router-dom";

const Item = () => {
  const { searchTerm } = useParams();

  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
