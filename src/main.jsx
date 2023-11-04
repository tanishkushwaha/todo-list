import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colors from './assets/colors.json';

const theme = createTheme({
  palette: {
    mode: 'dark',
    
    primary: {
      main: colors.green,
    },

    background: {
      default: colors.black,
      secondary: colors.navy, 
      grey: colors.grey,
    },

    text: {
      primary: colors.white,
      secondary: colors.grey,
    },

    divider: colors.grey
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
