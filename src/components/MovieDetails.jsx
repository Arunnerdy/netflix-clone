import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AlertCircle, CheckCircle, Star } from 'lucide-react';
import DialogBox from './DialogBox';
import { predefinedShows } from '../MovieData/shows'; // Import your local shows data

const MovieDetails = () => {
  const { MovieId } = useParams(); // Extract movieId from the URL
  const [show, setShow] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the show in predefinedShows that matches the movieId
    const foundShow = predefinedShows.find(show => show.id.toString() === MovieId);
    setShow(foundShow);
  }, [MovieId]);

  // Add a show to favorites
  const addToFavorites = () => {
    if (!show) return;

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some((fav) => fav.id === show.id);

    if (!isAlreadyFavorite) {
      favorites.push(show);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setDialogMessage(<>
        <CheckCircle className='inline text-green-500' size={50} color='green' /> {show.name} added to favorites!
      </>);
      setShowDialog(true);
    } else {
      setDialogMessage(<>
        <AlertCircle size={45} color='yellow' /> {show.name} is already in favorites!
      </>);
      setShowDialog(true);
    }
  };

  if (!show) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div>Show not found</div>
      </div>
    );
  }

  return (
    <div>
      {/* Dialog Box */}
      {showDialog && (
        <DialogBox
          message={dialogMessage}
          onClose={() => setShowDialog(false)}
        />
      )}

      {/* Hero Banner */}
      <div
        className="hero-banner"
        style={{
          backgroundImage: `url(${show.image.original})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px',
          color: '#fff',
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">{show.name}</h1>
              <Button variant="primary" onClick={addToFavorites}>
                <Star style={{ color: 'yellow' }} /> Add to Favorites
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Show Details */}
      <Container className="mt-4">
        <Row>
          <Col>
            <h2>Overview</h2>
            <p>{show.summary}</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h2>Genres</h2>
            <div>
              {show.genres.map((genre, index) => (
                <span
                  key={index}
                  className="badge bg-secondary me-2"
                  style={{ fontSize: '1rem' }}
                >
                  {genre}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        {/* Rating */}
        <Row className="mt-3">
          <Col>
            <h2>Rating</h2>
            <div className="d-flex align-items-center">
              <Star className="me-2" color="gold" />
              <span>{show.rating?.average || 'N/A'}/10</span>
            </div>
          </Col>
        </Row>

        {/* Language */}
        <Row className="mt-3">
          <Col>
            <h2>Language</h2>
            <p>{show.language}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetails;