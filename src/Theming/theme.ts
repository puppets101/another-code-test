import { createTheme, responsiveFontSizes } from '@material-ui/core';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#EFCDB6',
      },
      secondary: {
        main: '#A3B199',
      },
      text: {
        primary: '#FFFFFF',
      },
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: 'Poppins',
      body1: {
        fontWeight: 300,
      },
      h1: {
        fontWeight: 500,
      },
    },
  })
);
