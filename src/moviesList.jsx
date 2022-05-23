import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import routes from './routes'
import Rating from '@mui/material/Rating'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Container } from '@mui/material'
import Grid from '@mui/material/Grid'

let MoviesList = ({ movies }) => {
  return (
    <Container>
      <ul>
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item xs={4}>
              <li key={movie.id}>
                <Link to={`${routes.movies}/${movie.id}`}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="240"
                        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                      <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Release date : {movie.release_date}
                        <br />
                        <Rating
                          name="half-rating-read"
                          defaultValue={movie.vote_average / 2}
                          precision={0.1}
                          readOnly
                          m={1}
                        />
                      </Typography>
                    </CardActionArea>
                  </Card>
                </Link>
              </li>
            </Grid>
          ))}
        </Grid>
      </ul>
    </Container>
  )
}

export default MoviesList
