import { createTheme } from '@mui/material'

export const theme = createTheme({
  // Config color
  palette: {
    primary: {
      main: '#FF9F1C',
      light: 'rgba(255,159,28, 0.65)'
    },
    secondary: {
      main: '#FFFFFF',
      light: 'rgba(255,159,28, 0.65)'
    }
  },
  // Config typography
  typography: {
    h2: {
      fontSize: '32px',
      lineHeight: '36px',
      fontWeight: 800
    },
    h3: {
      fontSize: '28px',
      lineHeight: '32px',
      fontWeight: 700
    },
    h4: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 600
    },
    h5: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 500
    },
    body1: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 400
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.MuiButton-containedPrimary': {
            color: '#ffffff', 
          },
          '&.MuiButton-containedPrimary:hover': {
            backgroundColor: '#ffb44e', 
          },
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          fontWeight: 'bold',
          lineHeight: '24px',
          color: '#000000'
        }
      }
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }
    }
  }
})
