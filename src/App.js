import React from 'react';
import Router from './routes/Router';
import GlobalState from './global/GlobalState'
import CssBaseline from '@material-ui/core/CssBaseline'

import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>

  );
}

export default App;