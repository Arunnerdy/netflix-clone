import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import { predefinedShows } from '../MovieData/shows'; // Import your local shows data

const SearchResults = () => {
  const { query } = useParams(); // Extract search query from the URL
  const [filteredShows, setFilteredShows] = useState([]);

  // Search shows based on the query
  useEffect(() => {
    if (!query) {
      setFilteredShows([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const results = predefinedShows.filter(show => 
      show.name.toLowerCase().includes(searchTerm) ||
      (show.summary && show.summary.toLowerCase().includes(searchTerm))
    );
    
    setFilteredShows(results);
  }, [query]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">
        {query 
          ? filteredShows.length > 0 
            ? `Search Results for "${query}"` 
            : `No shows found for "${query}"`
          : 'Please enter a search term'}
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

export default SearchResults;