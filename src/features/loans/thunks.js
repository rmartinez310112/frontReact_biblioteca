import { AxiosError } from "axios";
import { apiData } from "../../api/apiData";
import { ErrorLoans, addLoans, deleteLoans, setLoans } from "./loansSlice";

export const setLoansT = () => {
    return async (dispatch, getState) => {

       const resp = await apiData.get('/Loan/Lista');

       dispatch( setLoans( resp.data ))
    }
}

export const addLoansT = (loan) => {
    return async (dispatch, getState) => {
        try {
            const resp = await apiData.post('/Loan/Guardar', loan)
            dispatch( addLoans({ idPrestamo: resp.data}, loan ))
        } catch (error) {
            dispatch(ErrorLoans(error.response.data))
             throw error.response.data
            
        }
           
    }
}

export const deleteLoansT = (id) => {
    return async (dispatch, getState) => {

       const result = await apiData.put(`/Loan/Devolver/${id}`);

       dispatch( deleteLoans(id))
    }
}