import { Link } from "react-router-dom"
import "../layout/Nav.css"


const NavBar = () => {

  

  return (
<header>
  <nav>
    <ul>
      <li><a href="/">Libros</a></li>
      <li><a href="/loans">Prestamos</a></li>
      
    </ul>
  </nav>
</header>  
)
}

export default NavBar
