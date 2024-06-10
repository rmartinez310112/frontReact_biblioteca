import { createSlice } from "@reduxjs/toolkit";

const usuarios = [
   {
      Id:1,
      Nombres:"Rodrigo",
      Apellidos:"Mendez Espinoza",
   },
   {
      Id:2,
      Nombres:"Adriana",
      Apellidos:"Suarez Sanchez"
   },
   {
      Id:3,
      Nombres:"Rosa Maria",
      Apellidos:"Hurtado Flores"
   }
]

export const loansSlice = createSlice({
    name:'loans',
    initialState: {
        loanslist:[],
        oUsuarios: usuarios,
        mensajeError:""
        
    },
    reducers: {
       setLoans:(state, {payload}) =>{
        state.loanslist= payload
      //   state.oUsuarios=usuarios
       },
       addLoans:(state, payload) => {
        state.loanslist.push(payload);
       },
       ErrorLoans:(state, {payload}) => {
         console.log("error slice:", payload)
         state.mensajeError = payload
        },
       deleteLoans:(state,{payload}) =>{
         const loanFound = state.loanslist.find(loan => loan.idPrestamo === payload)
         if(loanFound){
            state.loanslist.splice(state.loanslist.indexOf(bookFound),1);
         }
       }
    }
});

// Action creators are generated for each case reducer function
export const { setLoans, addLoans, deleteLoans,ErrorLoans} = loansSlice.actions;