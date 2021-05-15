import { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

const ListOfGifs = ({keyword}) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getGifs(keyword).then((gifs) => setGifs(gifs));
    }, 3000);
  }, [keyword]);

  return gifs.map(({ id, title, url }) => {
    return <Gif id={id} title={title} url={url} key={id} />;
  });
};

export default ListOfGifs;
