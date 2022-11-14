import React, { FC } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme as createTheme } from './theme';

type AppThemeProps = {
  children: React.ReactNode;
};

const AppTheme: FC<AppThemeProps> = ({ children }: AppThemeProps) => {
  return <ThemeProvider theme={createTheme}>{children}</ThemeProvider>;
};

export default AppTheme;
