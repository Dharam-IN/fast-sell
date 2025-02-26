import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button, Divider, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';

const locations = [
  'Jaipur, Rajasthan, India',
  'Delhi, India',
  'Mumbai, Maharashtra, India',
  'Bengaluru, Karnataka, India',
  'Hyderabad, Telangana, India',
  'Chandigarh, India',
  'Pune, Maharashtra, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
  'Kolkata, West Bengal, India',
];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle className="flex w-full justify-between items-center !mb-3">
        <Typography fontWeight="bold">
          Change Location
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div>
        <div>
          <Button variant="contained" color='primary' fullWidth sx={{ mb: 2 }}>
            Detect My Current Location
          </Button>
        </div>
        <Divider />
        <div className="py-4">
          {/* <input type="text" placeholder='Search delivery location' className='inputBox' /> */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search delivery location"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <List>
            {locations.map((location, index) => (
              <ListItem key={index} onClick={() => handleListItemClick(location)}>
                <ListItemText primary={location} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </Dialog >
  );
}


const HeaderDetectLocation = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(locations[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <>
      <div className='flex flex-col cursor-pointer' onClick={handleClickOpen}>
        <h4 className='text-xl font-bold'>Delivery in 7 Minutes</h4>
        <span className='flex text-sm'>Jaipur, Rajasthan, india <ArrowDropDownIcon /></span>
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}

export default HeaderDetectLocation
