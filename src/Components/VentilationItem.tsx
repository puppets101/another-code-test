import React, { FC } from 'react';
import { Paper, Box, Typography, Button, IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
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
  onToggleStatus: (ventilationPump: VentilationPump) => void;
  onDeletePump: (ventilationPump: VentilationPump) => void;
};
const VentilationItem: FC<VentilationItemProps> = ({
  ventilationPump,
  onToggleStatus,
  onDeletePump,
}: VentilationItemProps) => {
  const classes = useStyles();
  const { number, area, status } = ventilationPump;

  return (
    <div className={classes.itemContainer}>
      <Paper variant='outlined'>
        <Box p={2} display='flex' justifyContent='space-between'>
          <div className={classes.item} style={{ display: 'flex' }}>
            <IconButton
              sx={{ marginRight: '1rem' }}
              onClick={() => onDeletePump(ventilationPump)}
            >
              <DeleteIcon />
            </IconButton>
            <div>
              <Typography variant='body2'>Ventilation pump number</Typography>
              <Typography>{number}</Typography>
            </div>
          </div>
          <div className={classes.item}>
            <Typography variant='body2'>Area</Typography>
            <Typography>{area}</Typography>
          </div>
          <div className={classes.item}>
            <Typography variant='body2'>Status</Typography>
            <Typography sx={{ color: status ? 'green' : 'red' }}>
              {status ? 'Active' : 'Disabled'}
            </Typography>
          </div>
          <Button
            variant='contained'
            className={classes.btn}
            onClick={() => onToggleStatus(ventilationPump)}
          >
            {status ? 'Deactivate' : 'Activate'}
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default VentilationItem;
