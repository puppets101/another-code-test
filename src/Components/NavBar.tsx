import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@mui/material';

const useStyles = makeStyles({
  root: {
    padding: '1rem 0 1rem 0',
    backgroundColor: '#130F30',
    color: '#FFFFFF',
    boxShadow: 'none',
  },
  navBarWrapper: {
    padding: '1rem 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItemWrapper: {
    margin: '0',
    display: 'flex',
    alignItems: 'center',
  },
  navItemLeft: {
    padding: '0 1rem 0 0',
    cursor: 'pointer',
  },
  navItemRight: {
    padding: '0 0 0 1rem',
    cursor: 'pointer',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const firstNavItems = ['LOGO', 'COMPANY'];
  const lastNavItems = ['Home', 'Overview', 'Deshboard', 'Sign Out'];

  return (
    <AppBar position='static' className={classes.root}>
      <Container style={{ padding: 0 }}>
        <div className={classes.navBarWrapper}>
          <div className={classes.navItemWrapper}>
            {firstNavItems.map((item) => (
              <div key={item} className={classes.navItemLeft}>
                {item}
              </div>
            ))}
          </div>
          <div className={classes.navItemWrapper}>
            {lastNavItems.map((item) => (
              <div key={item} className={classes.navItemRight}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default NavBar;
