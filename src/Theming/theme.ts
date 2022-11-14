import { createTheme, responsiveFontSizes } from '@material-ui/core';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#130F30',
      },
      secondary: {
        main: '#eae9f3',
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
