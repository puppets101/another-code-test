import React, { FC } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from '@mui/material';

const OverviewFilters: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          id='search-pump-number'
          fullWidth
          label='Search pump number'
          margin='dense'
        />
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth margin='dense'>
          <InputLabel>Area</InputLabel>
          <Select id='area' label='Area' defaultValue='Area'>
            <MenuItem value='Area'>Area</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth margin='dense'>
          <InputLabel>Status</InputLabel>
          <Select id='status' label='Status' defaultValue='Status'>
            <MenuItem value='Status'>Status</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default OverviewFilters;
