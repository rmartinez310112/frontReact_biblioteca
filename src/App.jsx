import { useSelector } from "react-redux"
import BookForm from "./components/BookForm"
import BooksList from "./components/BooksList"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoansList from "./components/LoansList"
import LoansForm from "./components/LoansForm"
import AppTheme from "./theme/appTheme"
import AppLayout from "./layout/AppLayout"

const App = () => {

  
  return (
    
    <AppTheme >
      <BrowserRouter>
      <AppLayout>
      <Routes>
      <Route path="/" element={<BooksList />}/>
      <Route path="/create-book" element={<BookForm />}/>
      <Route path="/edit-book/:id" element={<BookForm />}/>

      <Route path="/loans" element={<LoansList />}/>
      <Route path="/create-loan" element={<LoansForm />}/>
    </Routes>
      </AppLayout>
    </BrowserRouter>
    </AppTheme>
    
  )
}

export default App
