import { apiData } from "../../api/apiData";
import { addBook, deleteBook, editBook, setBooks } from "./bookSlice";

export const setBooksT = () => {
    return async (dispatch, getState) => {

       const resp = await apiData.get('/Libros/Lista');
       dispatch( setBooks( resp.data.response ))
    }
}

export const addBooksT = (book) => {
    return async (dispatch, getState) => {

        const result = await apiData.post('/Libros/Guardar', book)

       dispatch( addBook( book ))
    }
}

export const deleteBooksT = (id) => {
    return async (dispatch, getState) => {

      const result = await apiData.delete(`/Libros/Eliminar/${id}`);

       dispatch( deleteBook( id ))
    }
}

export const editBooksT = (book) => {
    return async (dispatch, getState) => {
        // console.log(book);
      const result = await apiData.put('/Libros/Editar', book)

       dispatch( editBook(book))
    }
}