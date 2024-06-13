import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { deleteLoansT, setLoansT } from "../features/loans/thunks";
import { useEffect } from "react";
import { Button, Paper, TableCell, TableContainer, TableRow } from "@mui/material";


const LoansList = () => {

  const dispatch = useDispatch();
    const {loanslist, oUsuarios} = useSelector(state => state.loans);
    const {bookslist} = useSelector((state) => state.books);
    
     useEffect(() => {
        dispatch(setLoansT())
        console.log(oUsuarios);
    }, []);

    // console.log("loan:", loans);

    const handleDelete = (id) =>{
        // console.log(loans);
          dispatch(deleteLoansT(id))
        //  dispatch(setLoansT())
    }

  return (
    <>
    <div>
      <h2>Prestamo de Libros</h2>
    </div>
    <div>
        <Link to='/create-loan'>Agregar Prestamo</Link>
    </div>
    <div>
    <TableContainer component={Paper}>
    <table  sx={{ minWidth: 650 }} aria-label="simple table">
           <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Libro</TableCell>
            <TableCell>Fecha de prestamo</TableCell>
            <TableCell>Fecha devolucion</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Accion</TableCell>
            </TableRow>
            {loanslist.map((loan) => (
                <TableRow key={loan.idPrestamo}>
                    <TableCell>{loan.idPrestamo}</TableCell>
                    <TableCell>{loan.idUsuarioBiblioteca }</TableCell>
                    <TableCell>{loan.idLibro}</TableCell>
                    <TableCell>{new Date(loan.fechaPrestamo).toISOString().slice(0, 10)}</TableCell>
                    <TableCell>{loan.estadoPrestamo == "Prestado" ? "" : new Date(loan.fechaDevolucion).toISOString().slice(0, 10)}</TableCell>
                    <TableCell>{loan.estadoPrestamo}</TableCell>
                    <TableCell>
                        <Button disabled={loan.estadoPrestamo =="Devuelto" ? true : false}   onClick={() => handleDelete(loan.idPrestamo)}>Devolver</Button>
                    </TableCell>
                </TableRow>  
                ))}
        </table>
    </TableContainer>
    </div>
    </>
  )
}

export default LoansList
