import React, { ChangeEvent, FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import { VentilationPump } from '../Models/ventilation';

type CreateNewPumpDialogProps = {
  open: boolean;
  onClose: () => void;
  onCreateNewPump: (pump: VentilationPump) => void;
};
const CreateNewPumpDialog: FC<CreateNewPumpDialogProps> = ({
  open,
  onClose,
  onCreateNewPump,
}: CreateNewPumpDialogProps) => {
  const [newPump, setNewPump] = useState({ status: true } as VentilationPump);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const value = event.target.value;
    setNewPump({ ...newPump, [field]: value });
  };

  const clearInputFields = () => {
    setNewPump({ status: true } as VentilationPump);
  };

  return (
    <Dialog fullWidth maxWidth='xs' open={open} onClose={onClose}>
      <DialogTitle>Create new pump</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='number'
              name='number'
              fullWidth
              label='Pump number'
              margin='dense'
              onChange={handleInputChange}
              value={newPump.number}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='area'
              name='area'
              fullWidth
              label='Area'
              margin='dense'
              onChange={handleInputChange}
              value={newPump.area}
            />
          </Grid>
        </Grid>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
            marginTop: '1rem',
            width: '100%',
          }}
        >
          <Button
            sx={{ width: '40%' }}
            variant='contained'
            onClick={() => {
              onCreateNewPump(newPump);
              clearInputFields();
            }}
          >
            Save
          </Button>

          <Button sx={{ width: '40%' }} onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewPumpDialog;
