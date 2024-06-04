import { apiData } from "../../api/apiData";
import { addLoans, deleteLoans, setLoans } from "./loansSlice";

export const setLoansT = () => {
    return async (dispatch, getState) => {

       const resp = await apiData.get('/Prestamo/Lista');

       dispatch( setLoans( resp.data.response ))
    }
}

export const addLoansT = (loan) => {
    return async (dispatch, getState) => {
        
        const result = await apiData.post('/Prestamo/Guardar', loan)

       dispatch( addLoans( loan ))
    }
}

export const deleteLoansT = (id) => {
    return async (dispatch, getState) => {

      const result = await apiData.put(`/Prestamo/Devolver/${id}`);

    //    dispatch( deleteLoans( loan ))
    }
}