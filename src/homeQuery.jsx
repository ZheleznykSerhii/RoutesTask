import React from 'react'
import MoviesList from './moviesList'

class Home extends React.Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=2815bb4c9c06084df81dd7d6acbff60a'
    )
      .then((response) => response.json())
      .then((response) => this.setState({ movies: response.results }))
  }
  render() {
    const { movies } = this.state
    return (
      <>
        <h1>Trending today</h1>
        {movies.length > 0 && <MoviesList movies={this.state.movies} />}
      </>
    )
  }
}

export default Home
