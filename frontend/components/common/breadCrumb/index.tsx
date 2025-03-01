import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { ProductBreadCrumbProps } from '@/types/commonInterface';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const index = ({categoryname, productname}: ProductBreadCrumbProps) => {

    return (
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={`/category/${categoryname}`}
            >
              {categoryname}
            </Link>
            <Typography sx={{ color: 'text.primary' }}>{productname}</Typography>
          </Breadcrumbs>
        </div>
      );
}

export default index
