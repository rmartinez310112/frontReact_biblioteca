import { configureStore } from "@reduxjs/toolkit"
import { bookSlice } from "../features/books/bookSlice"
import { loansSlice } from "../features/loans/loansSlice"



const store = configureStore({
    reducer: {
        books: bookSlice.reducer,
        loans: loansSlice.reducer
    }
})

export default store
