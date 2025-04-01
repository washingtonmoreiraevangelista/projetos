import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../../pages/login/login'
import { WelcomePage } from '../../pages/WelcomePage'

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>

      {/* Redireciona a raiz para a tela de login */}
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<WelcomePage />} />

    </Routes>
  </BrowserRouter>
)
