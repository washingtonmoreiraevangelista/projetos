import { useState } from "react"
import { Box, TextField, Button, Alert, Typography } from "@mui/material"
import { forgotService } from '../../tools/forgotPassWord'

export const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await forgotService.forgotPassword(email)
      setMessage("E-mail de redefinição enviado! Verifique sua caixa de entrada.")
      setError("")
    } catch (err: any) {
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
      </Box>
    </Box>
  )
}
