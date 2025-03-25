import { createTheme, responsiveFontSizes, useTheme } from '@mui/material'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#87CEFA',
        contrastText: '#FFF',
      },
      secondary: {
        main: '#FFFFFF',
        contrastText: '#FFF',
      },
      success: {
        main: '#639B48',
        contrastText: '#FFF',
      },
      info: {
        main: '#037196',
        light: '#e5f8ff',
        contrastText: '#FFF',
      },
      error: {
        main: '#E32424',
        contrastText: '#FFF',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: '0px 12px 15px #00000029',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          container: {
            height: '100%',
          },
        },
      },
    },
    shape: {
      borderRadius: 0,
    },
  }),
)

export { theme, useTheme }
