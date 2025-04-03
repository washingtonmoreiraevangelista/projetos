import React, { useState } from "react"
import { authService } from "../../service/users.service"
import { Box, TextField, Button, Typography, Alert } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { IUser } from '../../types/IUseser'

export const Register = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    birthDate: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleRegister = async () => {
    if (!user.name || !user.email || !user.password || !user.birthDate) {
      setError(" Preencha todos os campos!")
      return
    }

    if (user.name.trim().split(" ").length < 2) {
      setError(" Informe seu nome completo!")
      return
    }

    if (user.password.length > 6) {
      setError(" A senha deve ter no máximo 6 caracteres!")
      return
    }

    try {
      
      const response = await authService.register(user)
      setSuccess("Usuário registrado com sucesso!")
      setUser({ name: "", email: "", password: "", birthDate: "" })
      setError("")

      setTimeout(() => {
        setSuccess("")
        navigate("/homePage")
      }, 2000)
    } catch (error: any) {
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
          label="Nome Completo"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />


        <TextField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />

        <TextField
          label="Senha"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />

        <TextField
          label="Data de Nascimento"
          type="date"
          name="birthDate"
          value={user.birthDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
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
