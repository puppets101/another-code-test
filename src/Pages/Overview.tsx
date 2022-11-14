import React, { useState } from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { VentilationPump } from '../Models/ventilation';
import PageTitle from '../Components/PageTitle';
import OverviewFilters from '../Components/OverviewFilters';
import VentilationItem from '../Components/VentilationItem';
import CreateNewPumpDialog from '../Components/CreateNewPumpDialog';

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
  const [allVentilationPumps, setAllVentilationPumps] = useState<
    VentilationPump[]
  >([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateNewPump = (pump: VentilationPump) => {
    console.log(pump);
    setAllVentilationPumps([...allVentilationPumps, pump]);
    setDialogOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexBetween}>
        <PageTitle title='Ventilation pump overwiew' />
        <div>
          <Button onClick={() => setDialogOpen(true)} color='primary'>
            + Create new pump
          </Button>
        </div>
      </div>
      <div className={classes.filtersWrapper}>
        <OverviewFilters />
      </div>
      <div>
        {allVentilationPumps.map((ventilationPump, index) => (
          <VentilationItem key={index} ventilationPump={ventilationPump} />
        ))}
      </div>
      <CreateNewPumpDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onCreateNewPump={handleCreateNewPump}
      />
    </div>
  );
};

export default Overview;
