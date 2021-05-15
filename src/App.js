import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route } from "wouter";
import Home from "./pages/Home";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Route path="/" component={Home} />
        <Route path="/results/:keyword" component={Results} />

      </section>
    </div>
  );
}

export default App;
