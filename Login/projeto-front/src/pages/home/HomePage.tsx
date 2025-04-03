import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  const userName = localStorage.getItem('userName') || 'Usuário'

  useEffect(() => {
      navigate('/Homepage')
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

    
    </Box>
  )
}
