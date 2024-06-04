import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addLoansT } from "../features/loans/thunks";
import { Fragment, useState } from "react";
import { Box, Button, TextField } from "@mui/material";


const LoansForm = () => {
    const navigate =useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const loans = useSelector((state) => state.loans);

   const [loan, setLoans] = useState({
    idUsuarioBiblioteca:null,
    idLibro:null,
    fechaPrestamo:null,
    fechaDevolucion:null,
    estadoPrestamo:'Prestado'
   })

   const handleChange = e => {
    // console.log(e.target.name, e.target.value)
    setLoans({
        ...loan,[e.target.name]: e.target.value,
    });
   }

   const handleSubmit = (e) => {
    e.preventDefault();
        dispatch(addLoansT(loan))
        navigate('/loans')
   }

  return (

    <Fragment>
      <Box
      height={400}
      width={500}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      padding="16px 40px"
      sx={{ border: '2px solid grey' }}
      marginLeft="auto"
      marginRight="auto"
    >
      <div>
        <h2>Formulario Prestamos</h2>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <TextField type="text" label="Usuario" variant="outlined" name="idUsuarioBiblioteca" onChange={handleChange} />
        <TextField type="text" label="Libro" variant="outlined" name="idLibro" onChange={handleChange} />
        
        <Button type="submit" variant="contained" color="success">Agregar Prestamo</Button>
        
        
      </form>
      </div>
      
    </Box>
      
    </Fragment>




    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="idUsuarioBiblioteca" onChange={handleChange}  />
    //   <input type="text" name="idLibro" onChange={handleChange} />
    //   <button>Agregar Prestamo</button>
    // </form>
  )
}

export default LoansForm
