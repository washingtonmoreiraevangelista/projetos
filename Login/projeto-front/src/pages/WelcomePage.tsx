import { Box, Button, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const WelcomePage = () => {
  const navigate = useNavigate()

  const userName = localStorage.getItem('userName') || 'Usuário'

  useEffect(() => {
    setTimeout(() => {
      navigate('/dashboard')
    }, 3000) 
  }, [navigate])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: 2,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: 3, color: '#1976d2', textAlign: 'center' }}>
        Bem-vindo(a), {userName}!
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 3, textAlign: 'center' }}>
        Estamos felizes por tê-lo(a) conosco.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ width: '200px' }}
        onClick={() => navigate('/dashboard')} 
      >
        Ir para o Dashboard
      </Button>
    </Box>
  )
}
