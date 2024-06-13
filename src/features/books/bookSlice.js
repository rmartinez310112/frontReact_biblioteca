import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initalCategory=[
    {
    IdCategoria:1,
    Nombre:"Psicologia"
    },
    {
    IdCategoria:2,
    Nombre:"Novela"
    },
    {
    IdCategoria:3,
    Nombre:"Ciencia Ficcion"
    },
    {
    IdCategoria:4,
    Nombre:"Fantasia"
    }
]

const initialbooks = [
  {
    idLibro:0,
    idcategoria: 1,
    titulo:'prueba de libro',
    autor:'prueba',
    fechapublicacion:'1998-01-01',
    cantidad:2
  }
  
]


export const bookSlice = createSlice({
    name:'books',
    initialState: {
        bookslist:[],
        categorys: initalCategory,
        mensajeError:""
    },
    reducers: {
       setBooks:(state, {payload}) =>{
        state.bookslist= payload
       },
       setCategory:(state, {payload}) =>{
        state.oCategoria= payload
       },
       addBook:(state, {payload}) => {
        // console.log(payload);
        state.bookslist.push(payload);
       },
       editBook:(state, {payload}) =>{
            const { idLibro, titulo, autor, fechaPublicacion, cantidad, idCategoria } = payload;
            const foundBook = state.bookslist.find((book) => book.idLibro == payload.id);
            // console.log("foundbook:", foundBook);
            if (foundBook) {
                foundBook.idLibro = idLibro;
                foundBook.idCategoria = idCategoria
                foundBook.titulo = titulo;
                foundBook.autor = autor;
                foundBook.fechaPublicacion = fechaPublicacion;
                foundBook.cantidad = cantidad;
            }
          },
       deleteBook:(state,{payload}) =>{
         const bookFound = state.bookslist.find(book => book.idLibro === payload)
         if(bookFound){
            state.bookslist.splice(state.bookslist.indexOf(bookFound),1);
         }
       }
    }
});

// Action creators are generated for each case reducer function
export const { setBooks, addBook, editBook,deleteBook,setCategory} = bookSlice.actions;