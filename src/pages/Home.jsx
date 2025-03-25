import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MovieRow from '../components/MovieRow';
import { predefinedShows } from '../MovieData/shows';
const Home = () => {
  
  const trendingShows = [...predefinedShows]
  .sort((a, b) => b.rating?.average - a.rating?.average)
  .slice(0, 10); // Top 10 by rating

// Get newest shows (Latest) - using ID as proxy for release order
const latestShows = [...predefinedShows]
  .sort((a, b) => b.id - a.id)
  .slice(0, 10); // 10 most recently added

  return (
    <div>
      <HeroBanner />
       <MovieRow
        title="Trending Now"
        shows={trendingShows}
      />
      <MovieRow
        title="Latest Movies"
        shows={latestShows}
      />
    </div>
  )
}

export default Home
