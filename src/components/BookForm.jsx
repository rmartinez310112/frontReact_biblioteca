import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBooksT, editBooksT } from "../features/books/thunks";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";



const BookForm = () => {

    const [book, setBook] = useState({
        idcategoria: null,
        titulo:'',
        autor:'',
        fechapublicacion:'',
        cantidad:0
       })

    const dispatch = useDispatch();
    const navigate =useNavigate();
    const params = useParams();
    const { bookslist, categorys} = useSelector((state) => state.books);

   
   const handleChange = e => {
    // console.log(e.target.name, e.target.value)
    setBook({
        ...book,[e.target.name]: e.target.value,
    });
   }

   const handleChangeS = e => {
    // console.log(e.target.name, e.target.value)
    setBook({ ...book, idcategoria: e.target.value});
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id){
        dispatch(editBooksT({ ...book, id:params.id}));
    }else{
        dispatch(addBooksT(book))
    }
    navigate('/')
   }

   function encuentraId(listado) {
    return listado.idLibro === 4;
  }

   useEffect(() => {
        if(params.id){
           
             setBook(bookslist.find((libro) => libro.idLibro == params.id))

            // const resultado = bookslist.find((libro) => libro.titulo === "Imaginaria");
            // const resultado1 = bookslist.find((libro) => libro.idLibro == params.id);
            // console.log(resultado1);
        }
    }, [params, bookslist]);

  return (
    <Fragment>
      <Box
      height={500}
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
        <h2>Formulario Libros</h2>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
      <TextField type="text" label="Titulo" variant="outlined" name="titulo" onChange={handleChange}  value={book.titulo}/>
      </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
             value={book.idcategoria}
            label="Categoria"
            onChange={handleChangeS}
          >
            {categorys.map((cat) => (
            <MenuItem key={cat.IdCategoria} value= {cat.IdCategoria}>{cat.Nombre}</MenuItem>
          ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
        <TextField type="text" label="Autor" variant="outlined" name="autor" onChange={handleChange}  value={book.autor}/>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <label>Fecha de Publicacion</label>
        <TextField type="date" variant="outlined" name="fechapublicacion" onChange={handleChange}  value={book.fechapublicacion}/>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
        <TextField type="number" label="Cantidad" variant="outlined" name="cantidad" onChange={handleChange}  value={book.cantidad}/>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Button type="submit" variant="contained" color="success">Agregar Libro</Button>
        </FormControl>
        
        
      </form>
      </div>
      
    </Box>
      
    </Fragment>
    
  )
}

export default BookForm
