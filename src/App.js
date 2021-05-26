import { Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { GifsContextProvider } from './context/GifsContext'
import Detail from './pages/Detail'
import './App.css'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Layout from './components/Layout'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Layout>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </Layout>
      </div>
    </ChakraProvider>
  )
}

export default App
