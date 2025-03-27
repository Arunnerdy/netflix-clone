import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import MovieDetails from '../components/MovieDetails';

vi.mock('../MovieData/shows', () => ({
  predefinedShows: [
    {
      id: 1,
      name: 'Breaking Bad',
      summary: 'A high school chemistry teacher turns to cooking meth to secure his familys future',
      genres: ["Drama", "Crime", "Thriller"],
      rating: { average: 9.5 },
      language: 'English',
      image: { original: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg' }
    }
  ]
}));

describe('MovieDetails Component', () => {
    //test 1
  test('renders movie details correctly', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/movies/1']}>
          <Routes>
            <Route path="/movies/:MovieId" element={<MovieDetails />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );

    // Check if movie details are displayed
    expect(await screen.findByText('Breaking Bad')).toBeInTheDocument();
    expect(screen.getByText('A high school chemistry teacher turns to cooking meth to secure his familys future')).toBeInTheDocument();
    expect(screen.getByText('Crime')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('9.5/10')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();

    // Test add to favorites button
    const button = screen.getByRole('button', { name: /add to favorites/i });
    fireEvent.click(button);

    // Wait for dialog box message to appear
    await waitFor(() => {
      expect(screen.getByText('Breaking Bad added to favorites!')).toBeInTheDocument();
    });
  });
  //test 2
  test('shows loading state if data not available immediately', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/movies/999']}>
          <Routes>
            <Route path="/movies/:MovieId" element={<MovieDetails />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );

    // Check loading state
    expect(screen.getByRole('status')).toBeInTheDocument(); // Spinner should be visible
    
    // Wait for the loading to complete
    await waitFor(() => {
      expect(screen.getByText('Show not found')).toBeInTheDocument();
    });
  });
});
