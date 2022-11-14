import React, { FC } from 'react';
import { Typography } from '@mui/material';

type PageTitleProps = {
  title: string;
};
const PageTitle: FC<PageTitleProps> = ({ title }: PageTitleProps) => {
  return (
    <div>
      <Typography variant='h2'>{title}</Typography>
    </div>
  );
};

export default PageTitle;
