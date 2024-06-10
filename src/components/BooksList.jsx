import { useDispatch, useSelector } from "react-redux"
import { deleteBooksT, setBooksT } from "../features/books/thunks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { BorderColor, Delete } from "@mui/icons-material";

const BooksList = () => {
    const dispatch = useDispatch();
    const { bookslist, categorys } = useSelector(state => state.books);
    
     useEffect(() => {
        dispatch(setBooksT())
    }, []);

    const handleDelete = (id) =>{
        // console.log(id);
        dispatch(deleteBooksT(id))
    }

    // console.log(categorys);

  return (
    <div>
    <div>
        <h2>Lista de Libros</h2>

        <Link to='/create-book' variant="contained" color="success">Agregar nuevo libro</Link>
         
      </div>
    <div>
        
    </div>
    <div>
    <TableContainer component={Paper}>
    <table  sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Titulo</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Fecha Publicacion</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Accion</TableCell>
            </TableRow>
            </TableHead>
           <TableBody>
           {bookslist.map((book) => (
                <TableRow key={book.idLibro}>
                    <TableCell>{book.idLibro}</TableCell>
                    <TableCell>{book.titulo}</TableCell>
                    <TableCell>{book.idCategoria}</TableCell>
                    <TableCell>{book.autor}</TableCell>
                    <TableCell>{book.fechaPublicacion}</TableCell>
                    <TableCell>{book.cantidad}</TableCell>
                    <TableCell>
                        <Link to={`/edit-book/${book.idLibro}`}> <IconButton><BorderColor /></IconButton></Link>
                        <Link onClick={ () => handleDelete(book.idLibro)}><IconButton><Delete /></IconButton></Link>
                    </TableCell>
                </TableRow>  
                ))}
           </TableBody>
        </table>
    </TableContainer>
    </div>
    </div>
    
  )
}

export default BooksList
