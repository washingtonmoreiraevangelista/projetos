import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouter } from './routes/Router'
import { theme } from './styles/base'
import { CoreProvider } from '../hooks'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CoreProvider>
      <AppRouter />
    </CoreProvider>
  </ThemeProvider>
)
export { App }

