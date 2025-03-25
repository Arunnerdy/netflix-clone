import { useEffect, useRef, useState } from 'react';
import { Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { predefinedShows } from '../MovieData/shows'; // Import your local shows data

const MovieRow = ({ title, shows = predefinedShows, genres }) => {
  const rowRef = useRef(null);

  // No need for fetchMovies since we're using local data
  const [displayShows, setDisplayShows] = useState([]);

  useEffect(() => {
    // Filter shows if genres are specified, otherwise use all shows
    const filteredShows = genres 
      ? shows.filter(show => show.genres.some(genre => genres[genre]))
      : shows;
    
    setDisplayShows(filteredShows);

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      if (rowRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth) {
          rowRef.current.scrollLeft = 0;
        } else {
          rowRef.current.scrollLeft += 200;
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [shows, genres]); // Removed fetchMovies from dependencies

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      
      if (scrollLeft + clientWidth >= scrollWidth) {
        rowRef.current.scrollLeft = 0;
      } else {
        rowRef.current.scrollLeft += 200;
      }
    }
  };

  return (
    <div className="movie-row mt-4 position-relative">
      <h2 className="row-title mb-3">{title}</h2>
      
      {/* Navigation buttons - only show if there are shows to display */}
      {displayShows.length > 0 && (
        <>
          <button
            className="position-absolute start-0 top-50 translate-middle-y p-2 rounded-circle"
            onClick={scrollLeft}
            style={{ zIndex: 1, left: '-20px' }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="position-absolute end-0 top-50 translate-middle-y p-2 rounded-circle"
            onClick={scrollRight}
            style={{ zIndex: 1, right: '-20px' }}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div
        className="d-flex overflow-hidden"
        ref={rowRef}
        style={{
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {displayShows.map((show) => (
          <Col key={show.id} xs={6} sm={4} md={3} lg={2} className="flex-shrink-0">
            <MovieCard show={show} /> {/* Changed from movie to show prop */}
          </Col>
        ))}
      </div>
    </div>
  );
};

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  shows: PropTypes.array, // Optional - falls back to predefinedShows
  genres: PropTypes.object, // Optional - for filtering
};

export default MovieRow;