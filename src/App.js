import { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getGifs().then((gifs) => setGifs(gifs));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs</h1>
        {gifs &&
          gifs.map(({ id, title, url }) => (
            <div> 
              <h4>{title}</h4>
              <small>{id}</small>
              <img src={url} alt={title} key={id} />
            </div>
          ))}
      </section>
    </div>
  );
}

export default App;
