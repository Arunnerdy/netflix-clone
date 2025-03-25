import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import { predefinedShows } from '../MovieData/shows'; // Import your local shows data

const GenreMovies = () => {
  const { genreId } = useParams(); // This will be the genre name in lowercase
  const [filteredShows, setFilteredShows] = useState([]);

  // Filter shows based on the selected genre
  useEffect(() => {
    // Convert genreId to lowercase for case-insensitive comparison
    const selectedGenre = genreId.toLowerCase();
    
    const filtered = predefinedShows.filter(show => 
      show.genres.some(genre => 
        genre.toLowerCase() === selectedGenre
      )
    );
    
    setFilteredShows(filtered);
  }, [genreId]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">
        {filteredShows.length > 0 
          ? `Shows in ${genreId.charAt(0).toUpperCase() + genreId.slice(1)}` 
          : `No shows found in ${genreId} genre`}
      </h2>
      <Row>
        {filteredShows.map((show) => (
          <Col key={show.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MovieCard show={show} /> {/* Changed from movie to show prop */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GenreMovies;