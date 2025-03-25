import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../../pages/login'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>

      {/* Redireciona a raiz para a tela de login */}
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
)
