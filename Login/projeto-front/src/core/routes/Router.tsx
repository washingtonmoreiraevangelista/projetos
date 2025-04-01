import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../../pages/login/login'
import { WelcomePage } from '../../pages/WelcomePage'
import { Register } from '../../pages/login/registre'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>

      {/* Redireciona a raiz para a tela de login */}
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/register" element={<Register/>} />

    </Routes>
  </BrowserRouter>
)
