import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SearchResults from '../components/SearchResult';

vi.mock('../MovieData/shows', () => ({
  predefinedShows: [
    { id: 1, name: 'Breaking Bad', summary: 'A high school chemistry teacher turns to cooking meth to secure his familys future.', genres: ["Drama", "Crime", "Thriller"] },
    { id: 6, name: 'Friends', summary: 'Follows the personal and professional lives of six friends.', genres: ["Comedy", "Romance"] }
  ]
}));

describe('SearchResults Component', () => {
  it('renders search results based on the query', () => {
    render(
      <MemoryRouter initialEntries={['/search/breaking']}>
        <Routes>
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if search result is rendered correctly
    expect(screen.getByText('Search Results for "breaking"')).toBeInTheDocument();
  });

  it('shows "No shows found" when no matching result exists', () => {
    render(
      <MemoryRouter initialEntries={['/search/xyz']}>
        <Routes>
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if no result message is shown
    expect(screen.getByText('No shows found for "xyz"')).toBeInTheDocument();
  });

});
