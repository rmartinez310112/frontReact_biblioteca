import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { deleteLoansT, setLoansT } from "../features/loans/thunks";
import { useEffect } from "react";
import { Button, Paper, TableCell, TableContainer, TableRow } from "@mui/material";


const LoansList = () => {

  const dispatch = useDispatch();
    const loans = useSelector(state => state.loans);
    
     useEffect(() => {
        dispatch(setLoansT())
    }, []);

    console.log("loan:", loans);

    const handleDelete = (id) =>{
        // console.log(id);
         dispatch(deleteLoansT(id))
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
            {loans.loanslist.map((loan) => (
                <TableRow key={loan.idPrestamo}>
                    <TableCell>{loan.idPrestamo}</TableCell>
                    <TableCell>{loan.idUsuarioBiblioteca}</TableCell>
                    <TableCell>{loan.idLibro}</TableCell>
                    <TableCell>{loan.fechaPrestamo}</TableCell>
                    <TableCell>{loan.fechaDevolucion}</TableCell>
                    <TableCell>{loan.estadoPrestamo}</TableCell>
                    <TableCell>
                        <Button onClick={() => handleDelete(loan.idPrestamo)}>Devolver</Button>
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
