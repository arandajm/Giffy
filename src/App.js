import { Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { GifsContextProvider } from './context/GifsContext'
import Detail from './pages/Detail'
import './App.css'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App
