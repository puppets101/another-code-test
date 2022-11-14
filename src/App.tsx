import React, { FC } from 'react';
import { Container } from '@mui/material';
import AppTheme from './Theming/AppTheme';
import NavBar from './Components/NavBar';
import Overview from './Pages/Overview';

const App: FC = () => {
  return (
    <AppTheme>
      <NavBar />
      <Container style={{ padding: 0 }}>
        <Overview />
      </Container>
    </AppTheme>
  );
};

export default App;
