import React, { useState } from "react"
import { authService } from "../../service/users.service"
import { Box, TextField, Button, Typography, Alert } from "@mui/material"
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (!email || !password) {
      setError("⚠️ Preencha todos os campos!")
      return
    }

    try {
      const data = { email, password }
      console.log("Enviando dados:", data) 

      const response = await authService.register(data)
      setSuccess(" Usuário registrado com sucesso!")
      setEmail("")
      setPassword("")
      setError("")

      setTimeout(() => {
        setSuccess("")
        navigate("/welcome")
      }, 2000)

    } catch (error: any) {
      console.error("Erro na requisição:", error.response?.data || error.message)
      if (error.response?.status === 409) {
        setError("E-mail já cadastrado! Tente outro.")
      } else {
        setError("Erro ao registrar o usuário. Tente novamente.")
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleRegister()
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 350,
          padding: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" textAlign="center">
          Cadastro
        </Typography>

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          required
        />

        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          required
        />

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Registrar
        </Button>
      </Box>
    </Box>
  )
}
