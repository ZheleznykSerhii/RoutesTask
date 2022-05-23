import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import routes from '../routes'

const Header = () => {
  return (
    <div className="Header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Typography variant="h6" component="div" ml={5}>
              <NavLink to={routes.home}>Home</NavLink>
            </Typography>
            <Typography variant="h6" component="div" ml={5}>
              <NavLink to={routes.movies}>Movies</NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
