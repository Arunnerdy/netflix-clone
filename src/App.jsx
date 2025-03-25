import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { ThemeProvider } from "./context/ThemeContext"
import GenreMovies from "./components/GenreMovies"
import SearchResults from "./components/SearchResult"
import MovieDetails from "./components/MovieDetails"
import Footer from "./components/Footer"

function App() {
 
  return (
  <ThemeProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/genre/:genreId" element={<GenreMovies />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/show/:MovieId" element={<MovieDetails />} />
        
      </Routes>
      <Footer />
   </Router>

  </ThemeProvider>
    
  )
}

export default App
