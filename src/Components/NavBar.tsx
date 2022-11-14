import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '1rem 2rem 1rem 2rem',
    backgroundColor: '#130F30',
    color: '#FFFFFF',
    boxShadow: 'none',
  },
  navBarWrapper: {
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
  navItem: {
    margin: '0 1rem',
    cursor: 'pointer',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const firstNavItems = ['LOGO', 'COMPANY'];
  const lastNavItems = ['Home', 'Overview', 'Deshboard', 'Sign Out'];

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <div className={classes.navBarWrapper}>
          <div className={classes.navItemWrapper}>
            {firstNavItems.map((item) => (
              <div key={item} className={classes.navItem}>
                {item}
              </div>
            ))}
          </div>
          <div className={classes.navItemWrapper}>
            {lastNavItems.map((item) => (
              <div key={item} className={classes.navItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
