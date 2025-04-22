import { useState } from "react"
import { Box, TextField, Button, Alert, Typography, Link } from "@mui/material"
import { forgotService } from '../../tools/forgotPassWord'
import { useNavigate } from 'react-router-dom'

export const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await forgotService.forgotPassword(email)
      setMessage("E-mail de redefinição enviado com sucesso!")
      setError("")
      setTimeout(() => {
        setSuccess("")
        navigate("/")
      }, 2000)
    } catch (erro: any) {
      setError("Erro ao enviar solicitação. Tente novamente.")
      setMessage("")
    }
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box component="form" onSubmit={handleSubmit} p={3} boxShadow={3} borderRadius={2} bgcolor="white">
        <Typography variant="h5" textAlign="center">Esqueci Minha Senha</Typography>

        <TextField
          label="E-mail"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar
        </Button>

        <Typography variant="body2" mt={2} textAlign="center">
          <Link href="/">Voltar para o login</Link>
        </Typography>
      </Box>
    </Box>
  )
}
