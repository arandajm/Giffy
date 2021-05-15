import React from "react";
import ListOfGifs from "../../components/ListOfGifs";

const Results = ({ params: { keyword } }) => {
  return (
    <>
      <h2>Searching gifts about {keyword}</h2>
      <ListOfGifs keyword={keyword} />
    </>
  );
};

export default Results;
