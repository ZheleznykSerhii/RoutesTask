import { Button, Container, TextField } from '@mui/material'
import { useState } from 'react'
import MoviesList from './moviesList'

let Movies = () => {
  const [movies, setMovie] = useState([])
  const [query, setQuery] = useState(null)

  let handleInputChange = (value) => {
    setQuery(value)
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2815bb4c9c06084df81dd7d6acbff60a&query=${query}`
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
  }
  console.log(movies)
  console.log(query)

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <TextField
            type="search"
            onChange={(e) => handleInputChange(e.target.value)}
            label="Search movies..."
            margin="dense"
          ></TextField>
          <br />
          <Button type="submit">Search</Button>
        </label>
      </form>
      <MoviesList movies={movies} />
    </Container>
  )
}

export default Movies
