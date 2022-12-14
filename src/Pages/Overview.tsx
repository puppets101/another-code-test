import React, { useState } from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import {
  AreaType,
  OverviewFilter,
  VentilationPump,
} from '../Models/ventilation';
import { ventilationPumps } from '../ventilation-pumps';
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
  const [allVentilationPumps, setAllVentilationPumps] =
    useState<VentilationPump[]>(ventilationPumps);
  const [filter, setFilter] = useState<OverviewFilter>({
    number: '',
    area: AreaType.NO_FILTER,
    status: true,
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateNewPump = (pump: VentilationPump) => {
    const pumps = [...allVentilationPumps];
    const id = (allVentilationPumps.length += 1);
    pumps.push({ ...pump, id: id.toString() });
    setAllVentilationPumps([...pumps]);
    setDialogOpen(false);
  };

  const handleFilterChange = (filters: OverviewFilter) => {
    setFilter({ ...filters });
  };

  const handleToggleStatus = (ventilationPump: VentilationPump) => {
    const pumps = [...allVentilationPumps];
    const index = pumps.findIndex(
      (pump) => pump.id.toString() === ventilationPump.id.toString()
    );
    pumps.splice(index, 1, {
      ...ventilationPump,
      status: !ventilationPump.status,
    });
    setAllVentilationPumps(pumps);
  };

  const handleDeletePump = (ventilationPump: VentilationPump) => {
    const pumps = [...allVentilationPumps];
    const index = pumps.findIndex(
      (pump) => pump.id.toString() === ventilationPump.id.toString()
    );
    pumps.splice(index, 1);
    setAllVentilationPumps(pumps);
  };

  const filteredVentilationPumps = (pumps: VentilationPump[]) => {
    let filteredPumps = [...pumps];
    if (filter.number) {
      filteredPumps = filteredPumps.filter(({ number }: OverviewFilter) =>
        number.toLocaleLowerCase().includes(filter.number.toLocaleLowerCase())
      );
    }
    if (filter.area) {
      filteredPumps = filteredPumps.filter(({ area }: OverviewFilter) =>
        area.toLocaleLowerCase().includes(filter.area.toLocaleLowerCase())
      );
    }
    if (filter.status !== null) {
      filteredPumps = filteredPumps.filter(
        ({ status }: OverviewFilter) => status === filter.status
      );
    }
    return filteredPumps || [];
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
        <OverviewFilters onFilterChange={handleFilterChange} />
      </div>
      <div>
        {filteredVentilationPumps(allVentilationPumps).map(
          (ventilationPump, index) => (
            <VentilationItem
              key={index}
              ventilationPump={ventilationPump}
              onToggleStatus={handleToggleStatus}
              onDeletePump={handleDeletePump}
            />
          )
        )}
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
