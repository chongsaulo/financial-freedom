import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { indigo, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: amber,
    type: 'dark',
  },
});

const MaterialProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MaterialProvider;
