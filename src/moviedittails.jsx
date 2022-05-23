import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import routes from './routes'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { Container, ListItem } from '@mui/material'
import Reviews from './reviews'
import Actors from './cast'

let MovieDetails = () => {
  const { id } = useParams()

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2815bb4c9c06084df81dd7d6acbff60a`
    )
      .then((response) => response.json())
      .then((response) => setMovie(response))
  }, [])

  return (
    <Container>
      {movie && (
        <Card sx={{ maxWidth: 700 }}>
          <CardMedia
            component="img"
            height="400"
            width="600"
            image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
            <ul>
              <Typography gutterBottom variant="h6" component="div">
                Genre
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.genres.map((genre) => (
                  <ListItem key={genre.id}>{genre.name}</ListItem>
                ))}
              </Typography>
            </ul>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Movie avarage: {movie.vote_average}, The number of votes:{' '}
              {movie.vote_count}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={movie.vote_average / 2}
              precision={0.1}
              readOnly
              m={1}
            />

            <br />
            <hr />
            <Typography gutterBottom variant="h6" component="div">
              Additional information:
            </Typography>
            <CardActions>
              <Button size="small">
                <NavLink to={routes.moviesCast}>Cast</NavLink>{' '}
              </Button>
              <Button size="small">
                <NavLink to={routes.moviesReview}>Reviews</NavLink>{' '}
              </Button>
            </CardActions>
            <Routes>
              <Route path={routes.moviesReview} element={<Reviews />}></Route>
              <Route path={routes.moviesCast} element={<Actors />}></Route>
            </Routes>
          </CardContent>
        </Card>
      )}
    </Container>
  )
}

export default MovieDetails
