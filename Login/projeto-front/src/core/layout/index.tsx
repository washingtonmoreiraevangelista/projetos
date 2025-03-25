import { Outlet} from 'react-router-dom'
import { Box } from '@mui/material'
import { BoxHeader, BoxMain, BoxWrapper, ContainerRoute } from './styles'
// import { Header, SideMenu } from '../../components/sections'

export const PrivateLayout = () => {
  return (
    <Box>
      <BoxWrapper>
        <BoxHeader component="header">
          {/* <Header /> */}
        </BoxHeader>
        <BoxMain component="main">
          {/* <SideMenu /> */}
          <ContainerRoute component="section" maxWidth="xl">
            <Outlet />
          </ContainerRoute>
        </BoxMain>
      </BoxWrapper>
    </Box>
  )
}
