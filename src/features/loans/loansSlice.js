import { createSlice } from "@reduxjs/toolkit";

export const loansSlice = createSlice({
    name:'loans',
    initialState: {
        loanslist:[]
    },
    reducers: {
       setLoans:(state, {payload}) =>{
        state.loanslist= payload
       },
       addLoans:(state, {payload}) => {
        state.loanslist.push(payload);
       },
    //    editLoans:(state, {payload}) =>{
    //     console.log(payload);
    //         const { idLibro, titulo, autor, fechaPublicacion, cantidad, idCategoria } = payload;
    //         const foundBook = state.bookslist.find((book) => book.idLibro === idLibro);
    //         console.log("foundtask:", foundBook);
    //         if (foundBook) {
    //             foundBook.idLibro = idLibro;
    //             foundBook.titulo = titulo;
    //             foundBook.autor = autor;
    //             foundBook.fechaPublicacion = fechaPublicacion;
    //             foundBook.cantidad = cantidad;
    //         }
    //       },
       deleteLoans:(state,{payload}) =>{
         const loanFound = state.loanslist.find(loan => loan.idPrestamo === payload)
         if(loanFound){
            state.loanslist.splice(state.loanslist.indexOf(bookFound),1);
         }
       }
    }
});

// Action creators are generated for each case reducer function
export const { setLoans, addLoans, deleteLoans} = loansSlice.actions;