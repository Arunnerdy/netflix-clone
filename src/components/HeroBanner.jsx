import { Carousel } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/tmdb.js';

const HeroBanner = () => {
  const { darkMode } = useTheme();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading trending movies...</div>;
  }

  if (!trendingMovies.length) {
    return <div className="text-center py-5">No trending movies available</div>;
  }

  return (
    <Carousel 
      id="heroCarousel" 
      interval={4000} 
      fade 
      controls 
      indicators
      pause="hover"
    >
      {trendingMovies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <div className="position-relative">
            {/* Movie Poster */}
            <img
              className="d-block w-100"
              src={movie.image.banner || movie.image.original}
              alt={movie.name}
              style={{ 
                height: '80vh', 
                objectFit: 'cover',
                transition: 'opacity 1s ease-in-out',
                filter: darkMode ? 'brightness(0.7)' : 'none'
              }}
            />
            {/* Movie Details */}
            <div 
              className="position-absolute"
              style={{
                bottom: '15%', // Position text at the bottom of the banner
                left: '5%',
                right: '5%',
                color: '#fff', // White text for better visibility
                textAlign: 'left'
              }}
            >
              {/* Movie Title */}
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {movie.name}
              </h3>
              
              {/* Movie Description */}
              <p style={{ fontSize: '1rem', marginTop: '5px' }}>
                {movie.summary.length > 150 
                  ? `${movie.summary.substring(0, 150)}...` 
                  : movie.summary}
              </p>
              
              {/* Watch Now Button */}
              <button 
                className="btn btn-secondary mt-2"
                onClick={() => console.log(`Watching ${movie.name}`)}
                style={{
                  fontSize: '1rem',
                  padding: '8px 20px',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s ease',
                  color: '#fff',
                  backgroundColor: '#6c757d', // Grey color
                  border: 'none'
                }}
              >
                Watch Now
              </button>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroBanner;
