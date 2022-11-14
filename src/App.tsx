import React, { FC } from 'react';
import { Container } from '@mui/material';
import AppTheme from './Theming/AppTheme';
import NavBar from './Components/NavBar';

const App: FC = () => {
  return (
    <div>
      <AppTheme>
        <NavBar />
        <Container
          style={{ backgroundColor: '#EAE9F3', padding: 0 }}
          maxWidth='lg'
        ></Container>
      </AppTheme>
    </div>
  );
};

export default App;
