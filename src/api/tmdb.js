import { predefinedShows } from '../MovieData/shows';

// Get all shows (already loaded from local file)
export const fetchPopularShows = async () => {
  return predefinedShows.slice(0, 20); // Return first 20 shows
};

// Get "latest" shows (just returns a subset)
export const fetchLatestShows = async () => {
  return predefinedShows.slice(5, 25); // Different subset to simulate "new" content
};

export const getTrendingMovies = async () => {
  return predefinedShows.slice(0,5);
}

// Extract genres from predefined shows
export const fetchGenres = async () => {
  const allGenres = predefinedShows.flatMap(show => show.genres || []);
  const uniqueGenres = [...new Set(allGenres)];
  
  return uniqueGenres.reduce((acc, genre) => {
    acc[genre] = genre; // Using genre name as both key and value
    return acc;
  }, {});
};

// Filter shows by genre locally
export const fetchShowsByGenre = async (genre) => {
  return predefinedShows.filter(show => 
    show.genres?.includes(genre)
  ).slice(0, 20);
};

// Search shows locally
export const searchShows = async (query) => {
  const lowerQuery = query.toLowerCase();
  return predefinedShows.filter(show =>
    show.name.toLowerCase().includes(lowerQuery)
  );
};

// Get show details by ID
export const fetchShowDetails = async (showId) => {
  return predefinedShows.find(show => show.id == showId) || null;
};

