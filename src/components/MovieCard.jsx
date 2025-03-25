import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ show }) => {
  const navigate = useNavigate();
  
  // Use the medium-sized image from your local data
  const posterUrl = show.image?.medium || show.image?.original;

  return (
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
  }).isRequired,
};

export default MovieCard;