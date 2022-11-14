import React, { FC } from 'react';
import { Paper, Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { VentilationPump } from '../Models/ventilation';

const useStyles = makeStyles({
  root: {
    margin: '2rem 0',
  },
  itemContainer: {
    width: '100%',
    margin: '1rem 0',
  },
  item: {
    minWidth: '12rem',
  },
  btn: {
    width: '8rem',
  },
});

type VentilationItemProps = {
  ventilationPump: VentilationPump;
};
const VentilationItem: FC<VentilationItemProps> = ({
  ventilationPump,
}: VentilationItemProps) => {
  const classes = useStyles();
  const { number, area, status } = ventilationPump;
  return (
    <div className={classes.itemContainer}>
      <Paper variant='outlined'>
        <Box p={2} display='flex' justifyContent='space-between'>
          <div className={classes.item}>
            <Typography variant='body2'>Ventilation pump number</Typography>
            <Typography>{number}</Typography>
          </div>
          <div className={classes.item}>
            <Typography variant='body2'>Area</Typography>
            <Typography>{area}</Typography>
          </div>
          <div className={classes.item}>
            <Typography variant='body2'>Status</Typography>
            <Typography>{status ? 'Active' : 'Disabled'}</Typography>
          </div>
          <Button variant='contained' color='primary' className={classes.btn}>
            {status ? 'Deactivate' : 'Activate'}
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default VentilationItem;
