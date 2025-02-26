'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#1E88E5',   // Blue
      contrastText: '#FFFFFF', // White text on primary
    },
    secondary: {
      main: '#FF6F61',   // Coral Red
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E53935',   // Red
    },
    warning: {
      main: '#FFB300',   // Amber
    },
    info: {
      main: '#29B6F6',   // Light Blue
    },
    success: {
      main: '#66BB6A',   // Green
    },
    background: {
      default: '#F9FAFB', // Light gray background
      paper: '#FFFFFF',   // White for cards and surfaces
    },
    text: {
      primary: '#171717', // Almost black for text
      secondary: '#666666', // Dark gray for secondary text
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fff', // Dialog background using primary color
          color: '#000', // Text color white for better contrast on blue background
          padding: "20px"
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    }

    },
    typography: {
      fontFamily: 'var(--font-roboto)',
    },
    cssVariables: true
  });

export default theme;