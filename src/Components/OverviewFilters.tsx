import React, { ChangeEvent, FC, useState } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { AreaType, OverviewFilter } from '../Models/ventilation';

type OverviewFiltersProps = {
  onFilterChange: (filters: OverviewFilter) => void;
};
const OverviewFilters: FC<OverviewFiltersProps> = ({
  onFilterChange,
}: OverviewFiltersProps) => {
  const [filter, setFilter] = useState<OverviewFilter>({
    number: '',
    area: AreaType.NO_FILTER,
    status: true,
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const value = event.target.value;
    setFilter({ ...filter, [field]: value });
    onFilterChange({ ...filter, [field]: value });
  };

  const handleAreaChange = (event: SelectChangeEvent) => {
    const value = event.target.value;

    switch (value) {
      case 'A':
        setFilter({ ...filter, area: AreaType.A });
        onFilterChange({ ...filter, area: AreaType.A });
        break;
      case 'B':
        setFilter({ ...filter, area: AreaType.B });
        onFilterChange({ ...filter, area: AreaType.B });
        break;
      case 'C':
        setFilter({ ...filter, area: AreaType.C });
        onFilterChange({ ...filter, area: AreaType.C });
        break;
      case 'D':
        setFilter({ ...filter, area: AreaType.D });
        onFilterChange({ ...filter, area: AreaType.D });
        break;
      case 'E':
        setFilter({ ...filter, area: AreaType.E });
        onFilterChange({ ...filter, area: AreaType.E });
        break;
      case 'F':
        setFilter({ ...filter, area: AreaType.F });
        onFilterChange({ ...filter, area: AreaType.F });
        break;
      default:
        setFilter({ ...filter, area: AreaType.NO_FILTER });
        onFilterChange({ ...filter, area: AreaType.NO_FILTER });
    }
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    const value = event.target.value;

    if (value === 'ACTIVE') {
      setFilter({ ...filter, status: true });
      onFilterChange({ ...filter, status: true });
    } else if (value === 'DISABLED') {
      setFilter({ ...filter, status: false });
      onFilterChange({ ...filter, status: false });
    } else {
      setFilter({ ...filter, status: null });
      onFilterChange({ ...filter, status: null });
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          id='number'
          name='number'
          fullWidth
          label='Search pump number'
          margin='dense'
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth margin='dense'>
          <InputLabel>Area</InputLabel>
          <Select
            id='area'
            label='Area'
            defaultValue='NO_FILTER'
            onChange={handleAreaChange}
          >
            <MenuItem value='NO_FILTER'>No filter</MenuItem>
            <MenuItem value='A'>A</MenuItem>
            <MenuItem value='B'>B</MenuItem>
            <MenuItem value='C'>C</MenuItem>
            <MenuItem value='D'>D</MenuItem>
            <MenuItem value='E'>E</MenuItem>
            <MenuItem value='F'>F</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth margin='dense'>
          <InputLabel>Status</InputLabel>
          <Select
            id='status'
            label='Status'
            defaultValue='ACTIVE'
            onChange={handleStatusChange}
          >
            <MenuItem value='NO_FILTER'>No filter</MenuItem>
            <MenuItem value='ACTIVE'>Active</MenuItem>
            <MenuItem value='DISABLED'>Disabled</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default OverviewFilters;
