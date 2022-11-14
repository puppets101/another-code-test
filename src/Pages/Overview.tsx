import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import PageTitle from '../Components/PageTitle';
import OverviewFilters from '../Components/OverviewFilters';
import VentilationItem from '../Components/VentilationItem';
import { ventilationPumps } from '../ventilation-pumps';

const useStyles = makeStyles({
  root: {
    margin: '2rem 0',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filtersWrapper: {
    margin: '2rem 0',
  },
});

const Overview = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.flexBetween}>
        <PageTitle title='Ventilation pump overwiew' />
        <div>
          <Button color='primary'>+ Create new pump</Button>
        </div>
      </div>
      <div className={classes.filtersWrapper}>
        <OverviewFilters />
      </div>
      <div>
        {ventilationPumps.map((ventilationPump, index) => (
          <VentilationItem key={index} ventilationPump={ventilationPump} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
