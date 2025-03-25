import { NavLink, useNavigate } from 'react-router-dom';
import { Sun, Moon, Funnel } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/Netflix_Logo_RGB.png';
import './Navbar.css';
import { useState } from 'react';
import { predefinedShows } from '../MovieData/shows'; // Import your local shows data

const Navbar = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique genres from predefined shows
  const getUniqueGenres = () => {
    const allGenres = predefinedShows.flatMap(show => show.genres);
    const uniqueGenres = [...new Set(allGenres)]; // Remove duplicates
    return uniqueGenres.sort(); // Sort alphabetically
  };

  const genres = getUniqueGenres();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery('');
    }
  };

  const getNavLinkClass = ({isActive}) => {
    let baseClass = 'nav-link';
    if(isActive) {
      return darkMode ? `${baseClass} active text-danger fw-bold border-bottom border-danger` :
      `${baseClass} active text-dark fw-bold border-bottom border-dark`;
    }
    return baseClass
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img 
            src={logo} 
            alt="Netflix Logo" 
            style={{ height: '50px' }} 
          />
        </NavLink>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/favorites">Favourites</NavLink>
            </li>

            {/* Filter Dropdown using local genres */}
            <li className="nav-item dropdown">
              <button
                className="nav-link btn btn-link"
                onClick={toggleDropdown}
                style={{ color: darkMode ? '#fff' : '#000' }}
              >
                <Funnel size={20} /> Filter
              </button>
              {showDropdown && (
                <div
                  className="dropdown-menu show"
                  style={{
                    position: 'absolute',
                    inset: '0px auto auto 0px',
                    margin: '0px',
                    transform: 'translate(0px, 40px)',
                    backgroundColor: darkMode ? '#333' : '#fff',
                    border: darkMode ? '1px solid #555' : '1px solid #ddd',
                  }}
                >
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      className="dropdown-item"
                      style={{ color: darkMode ? '#fff' : '#000' }}
                      onClick={() => {
                        navigate(`/genre/${genre.toLowerCase()}`);
                        setShowDropdown(false);
                      }}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className={`form-control me-2 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ backgroundColor: darkMode ? 'lightgray' : 'white', color: darkMode ? 'white' : 'black' }}
            />
            <button
              className={`btn ${darkMode ? 'btn-outline-danger' : 'btn-outline-success'}`}
              type="submit"
              style={{color:darkMode ? '#fff' : '#000', borderColor: darkMode ? 'red' : 'black', borderStyle:'solid',borderRadius:'10px'}}
            >
              Search
            </button>
          </form>

          <button 
            className="btn ms-3" 
            onClick={toggleTheme} 
            style={{ color: darkMode ? '#fff' : '#000' }}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;