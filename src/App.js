import './App.css'
import { Routes, Route } from 'react-router-dom'
import Movies from './movies'
import Home from './home'
import MovieDetails from './moviedittails'
import routes from './routes'
import NotFound from './notfound'
import Header from './Header/Header'
import { Container } from '@mui/material'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path={routes.home} element={<Home />}></Route>
          <Route path={routes.movies} element={<Movies />}></Route>
          <Route path={routes.moviesDetails} element={<MovieDetails />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
