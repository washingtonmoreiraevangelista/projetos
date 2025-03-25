import { Box, BoxProps, Container, ContainerProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const BoxWrapper = styled(Box)<BoxProps>({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  minWidth: '150px',
})

export const BoxHeader = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  background: theme.palette.primary.main,
  borderBottom: 'solid 1px #e2e2e2',
  height: '56px',
  zIndex: 0,
  paddingInline: theme.spacing(2),
}))

export const BoxMain = styled(Box)<BoxProps>({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  minHeight: '100%',
})

export const ContainerRoute = styled(Container)<ContainerProps>({
  display: 'flex',
  height: '100%',
  minHeight: 'calc(100vh - 56px)',
  paddingBlock: '36px',
})
