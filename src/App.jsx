import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App
