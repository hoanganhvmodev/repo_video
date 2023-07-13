import { createTheme } from '@mui/material'

export const theme = createTheme({
  // Config color
  palette: {
    primary: {
      main: '#FF9F1C',
      light: 'rgba(255,159,28, 0.65)'
    }
  },
  // Config typography
  typography: {
    h2: {
      fontSize: '3.2rem',
      lineHeight: '3.6rem',
      fontWeight: 800
    },
    h3: {
      fontSize: '2.8rem',
      lineHeight: '3.2rem',
      fontWeight: 700
    },
    h4: {
      fontSize: '2.4rem',
      lineHeight: '2.8rem',
      fontWeight: 600
    },
    h5: {
      fontSize: '2rem',
      lineHeight: '2.4rem',
      fontWeight: 500
    },
    body1: {
      fontSize: '1.6rem',
      lineHeight: '2rem',
      fontWeight: 400
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})
