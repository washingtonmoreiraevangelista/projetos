import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import { BoxHeader, BoxMain, BoxWrapper, ContainerRoute } from './styles'
import { Header } from '../../components/sections/header'

export const PrivateLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/', { replace: true }) 
    }
  }, [navigate])

  return (
    <Box>
      <BoxWrapper>
        <BoxHeader component="header">
          <Header />
        </BoxHeader>
        <BoxMain component="main">
          <ContainerRoute component="section" maxWidth="xl">
            <Outlet />
          </ContainerRoute>
        </BoxMain>
      </BoxWrapper>
    </Box>
  )
}
