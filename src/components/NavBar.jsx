
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import "../layout/Nav.css"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Biblioteca
          </Typography>
          <Link to="/" style={{textDecoration: 'none', color:'white', paddingRight:'100px'}} >Libros</Link>
          <Link to="/loans" style={{textDecoration: 'none', color:'white', paddingRight:'100px'}}>Prestamos</Link>
        </Toolbar>
      </AppBar>
    </Box>
)
}

export default NavBar
