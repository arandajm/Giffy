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
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/76/Giphy_Logo_9.2016.svg"
            alt="logo"
          />
        </div>
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
