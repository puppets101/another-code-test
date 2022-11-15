import React, { ChangeEvent, FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { AreaType, VentilationPump } from '../Models/ventilation';

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

  const handleAreaChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (value === 'A') return setNewPump({ ...newPump, area: AreaType.A });
    if (value === 'b') return setNewPump({ ...newPump, area: AreaType.B });
    if (value === 'C') return setNewPump({ ...newPump, area: AreaType.C });
    if (value === 'D') return setNewPump({ ...newPump, area: AreaType.D });
    if (value === 'E') return setNewPump({ ...newPump, area: AreaType.E });
    if (value === 'F') return setNewPump({ ...newPump, area: AreaType.F });
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
            <FormControl fullWidth margin='dense'>
              <InputLabel>Area</InputLabel>
              <Select
                id='area'
                label='Area'
                defaultValue=''
                onChange={handleAreaChange}
              >
                <MenuItem value='A'>A</MenuItem>
                <MenuItem value='B'>B</MenuItem>
                <MenuItem value='C'>C</MenuItem>
                <MenuItem value='D'>D</MenuItem>
                <MenuItem value='E'>E</MenuItem>
                <MenuItem value='F'>F</MenuItem>
              </Select>
            </FormControl>
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
