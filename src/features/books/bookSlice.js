import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


export const bookSlice = createSlice({
    name:'books',
    initialState: {
        bookslist:[]
    },
    reducers: {
       setBooks:(state, {payload}) =>{
        state.bookslist= payload
       },
       addBook:(state, {payload}) => {
        state.bookslist.push(payload);
       },
       editBook:(state, {payload}) =>{
            const { idLibro, titulo, autor, fechaPublicacion, cantidad, idCategoria } = payload;
            const foundBook = state.bookslist.find((book) => book.idLibro == payload.id);
            console.log("foundbook:", foundBook);
            if (foundBook) {
                foundBook.idLibro = idLibro;
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
export const { setBooks, addBook, editBook,deleteBook} = bookSlice.actions;