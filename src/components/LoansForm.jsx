import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addLoansT } from "../features/loans/thunks";
import { Fragment, useState } from "react";
import { Alert, Autocomplete, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const LoansForm = () => {
    const navigate =useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const {oUsuarios, mensajeError} = useSelector((state) => state.loans);
    const { bookslist} = useSelector((state) => state.books);

   const [loan, setLoans] = useState({
    idUsuarioBiblioteca:null,
    idLibro:null,
    fechaPrestamo:null,
    fechaDevolucion:null,
    estadoPrestamo:'Prestado'
   })

   const handleChange = e => {
    setLoans({ ...loan, idUsuarioBiblioteca: e.target.value});
   }

   const handleChangeL = e => {
     setLoans({ ...loan, idLibro: e.target.value});
  }


   const handleSubmit = (e) => {
    e.preventDefault();
    mensajeError='';
         dispatch(addLoansT(loan))
          
         if(mensajeError == ""){
          navigate('/loans')
         }else{
          console.log("este es el mensaje:",mensajeError);
         }
         
   }

//    useEffect(() => {
//     if
// }, []);

  // console.log(bookslist);

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
      
      <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Usuario</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={loan.idUsuarioBiblioteca}
            label="Usuario"
            onChange={handleChange}
            
          >
            {oUsuarios.map((usua) => (
            <MenuItem key={usua.Id} value= {usua.Id}>{usua.Nombres} {usua.Apellidos}</MenuItem>
          ))}
          </Select>
        </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label1">Libro a Prestar</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label1"
            id="demo-simple-select-helper1"
            value={loan.idLibro}
            label="Libro"
            onChange={handleChangeL}
          >
            {bookslist.map((book) => (
            <MenuItem key={book.idLibro} value= {book.idLibro}>{book.titulo}</MenuItem>
          ))}
          </Select>
        </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Button type="submit" variant="contained" color="success">Prestar Libro!</Button>
      </FormControl>


      <Grid 
                item 
                xs={ 12 }
                display={ !mensajeError ? 'none': '' }
              >
                <Alert display={!mensajeError ? 'none' : ''} severity='error'>{ mensajeError }</Alert>
        </Grid>
        
        
        
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
