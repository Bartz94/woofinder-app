//Jacek
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Avatar, styled } from '@mui/material';
import { TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';




const BootstrapDialog = styled(Dialog)`
  background-color: rgba(210, 210, 210, 0.18);
  
`;

const DialogContentStyle = styled(DialogContent)`
width:1200px;
height:500px;
`;



const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <CancelIcon
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'black',
            width: '36px',
            height: '36px',
            mr: 3,
            mt: 3

          }}
        >
          <CloseIcon />
        </CancelIcon>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const RegisterForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" sx={{ color: 'black', textTransform: 'capitalize' }} onClick={handleClickOpen}>
        Zarejestruj
      </Button>
      <BootstrapDialog
        onClose={handleClose} maxWidth
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
         Nie masz jeszcze konta? Zarejestruj się
        </BootstrapDialogTitle>
        <DialogContentStyle>
          <Avatar sx={{ width: "186px", height: "186px", ml: 22, mt: 10 }} />

            <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -20 }} />
            <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -14 }} />
            


        </DialogContentStyle>
        <DialogActions>
        <Button variant="contained" sx={{ color: 'black', fontSize: '0.8em', borderRadius: '20px', backgroundColor: '#E2E2E2', mt:-65 , mr:12, textTransform:'capitalize', fontWeight:'bold'}} autoFocus onClick={handleClose}>
            Zarejestruj się
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}




