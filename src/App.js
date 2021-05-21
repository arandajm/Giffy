import { Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import './App.css'

function App () {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  )
}

export default App
