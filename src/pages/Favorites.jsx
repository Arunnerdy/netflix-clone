import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CircleX, Frown, Star } from 'lucide-react';
import DialogBox from '../components/DialogBox';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favorites);
  }, []);

  // Remove a show from favorites
  const removeFromFavorites = (showId) => {
    const updatedFavorites = favorites.filter((show) => show.id !== showId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setDialogMessage(<>
      <CircleX className='inline text-red-500' size={50} color='red'/> Removed from Favorites
    </>);
    setShowDialog(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Dialog Box */}
      {showDialog && (
        <DialogBox
          message={dialogMessage}
          onClose={() => setShowDialog(false)}
        />
      )}

      <Container className="mt-4 flex-grow-1">
        <h2>Favorites</h2>
        {favorites.length === 0 ? (
          <div className="text-center mt-5" style={{display:'flex', alignItems:'center', gap:'8px', height:'65vh', justifyContent:'center'}}>
            <Frown size={50} color='red' />
            <h2>Your favorites list is empty. Add something!</h2>
          </div>
        ) : (
          <Row>
            {favorites.map((show) => (
              <Col key={show.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={show.image?.medium || show.image?.original}
                    alt={show.name}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="text-truncate">{show.name}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <small className="text-muted">{show.language}</small>
                      <small className="text-warning fw-bold">
                      <Star style={{ fill: 'yellow' }} />  {show.rating?.average || 'N/A'}
                      </small>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => removeFromFavorites(show.id)}
                      className="mt-2 w-100"
                    >
                      <Star style={{ fill: 'yellow' }} /> Remove from Favorites
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Favorites;