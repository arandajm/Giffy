import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs</h1>
        <ListOfGifs keyword="argentina"/>
      </section>
    </div>
  );
}

export default App;
