import { Box, Button, TextField, Typography } from '@mui/material'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ApiService } from '../service/projeto.service'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')


  const fetchLogin = async () => {
    try {
      const response = await ApiService.getAll('users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('Login bem-sucedido:', data)
        localStorage.setItem('token', data.token)
        navigate('/dashboard')
      } else {
        setError(data.message || 'E-mail ou senha incorretos')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
      setError('Erro ao conectar ao servidor')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchLogin()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: 2,
        backgroundImage: 'url(src/assets/network-4348668_1280.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 300,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 3,
          boxShadow: 3,
          backdropFilter: 'blur(20px)',
          overflow: 'hidden',
          borderRadius: '16px',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center', color: '#222' }}>
          Sign in
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          InputLabelProps={{
            sx: {
              color: '#222 !important',
              '&.Mui-focused': { color: '#1976d2 !important' },
            },
          }}
          sx={{
            marginBottom: 2,
            input: { color: '#222' }
          }}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputLabelProps={{
            sx: {
              color: '#222 !important',
              '&.Mui-focused': { color: '#1976d2 !important' },
            },
          }}
          sx={{
            marginBottom: 2,
            input: { color: '#222' },
          }}
        />

        <RouterLink
          to="/forgot-password"
          style={{
            alignSelf: 'flex-end',
            marginTop: 1,
            textDecoration: 'none',
            color: '#1565c0',
            fontSize: '0.875rem',
          }}
        >
          Forgot Password?
        </RouterLink>

        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: '#1976d2',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Enter
        </Button>

        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
          Não tem uma conta?{' '}
          <Link component={RouterLink} to="/register" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Cadastre-se
          </Link>
        </Typography>

      </Box>
    </Box>
  )
}
