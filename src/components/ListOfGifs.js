import { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
import logo from "../../src/loading.svg"

const ListOfGifs = ({ params: { keyword } }) => {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getGifs(keyword).then((gifs) => setGifs(gifs));
      setLoading(false)
    }, 3000);
  }, [keyword]);

  if(loading) return <img src={logo} alt="logo"/>
  return gifs.map(({ id, title, url }) => {
    return <Gif id={id} title={title} url={url} key={id} />;
  });
};

export default ListOfGifs;
