import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const MovieCard = ({ show }) => {
  const navigate = useNavigate();
  
  // Use the medium-sized image from your local data
  const posterUrl = show.image?.medium || show.image?.original;

   // Get the first genre if available
   const firstGenre = show.genres?.[0] || 'Unknown';
  
   // Get the rating (handle cases where rating might be missing)
   const rating = show.rating?.average ? `${show.rating.average}/10` : 'N/A';

    // Determine if dark mode is active
  const isDarkMode = document.body.getAttribute('data-bs-theme') === 'dark';

  return (
    <div 
    className="movie-card-container d-inline-block me-3 mb-4"
    style={{ width: '200px' }}
  >
    <Card
      className="movie-card border-0 shadow-sm me-2 position-relative overflow-hidden"
      style={{
        width: '200px',
        height: '300px',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/show/${show.id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Card.Img
        variant="top"
        src={posterUrl}
        alt={show.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
     </Card>
    <div className="mt-2 px-1">
        <h6 className="badge bg-secondary me-2"> {/* Changed to text-body-emphasis */}
          {show.name}
        </h6>
        <div className="d-flex justify-content-between align-items-center">
          <small className="badge bg-secondary me-2">
            {firstGenre}
          </small>
          <small className="badge bg-secondary me-2">
            {rating}
          </small>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string
    }).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.shape({
      average: PropTypes.number
    })
  }).isRequired,
};

export default MovieCard;