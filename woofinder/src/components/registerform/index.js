//Jacek
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, styled, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';


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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }









  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();


    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })

  }

  return (
    <>
      <Button variant="text" sx={{ color: 'black', textTransform: 'capitalize' }} onClick={handleClickOpen}>
        Zarejestruj
      </Button>
      <BootstrapDialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          <Typography> Zarejestruj się.</Typography>

        </BootstrapDialogTitle>
        <DialogContentStyle>
          <Avatar sx={{ width: "186px", height: "186px", ml: 22, mt: 10 }} />
          <form onSubmit={handleSubmit}>
            <TextField className="inputRounded"
              type="email"
              required
              id="email"
              sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -20, }} label='Nazwa użytkownika oraz email'
              value={email}
              autoComplete='email'
              onChange={handleEmailChange}
            />
            <TextField className="inputRounded"
              required
              type="password"
              sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -14 }}
              id="password"
              label='Hasło'
              value={password}
              autoComplete='current-password'
              onChange={handlePasswordChange}
            />

          </form>
        </DialogContentStyle>
        <DialogActions>
          <Button type='submit' variant="contained" sx={{ color: 'black', fontSize: '0.8em', borderRadius: '20px', backgroundColor: '#E2E2E2', mt: -66, mr: 12, textTransform: 'capitalize', fontWeight: 'bold' }} autoFocus onClick={handleClose}>
            Zarejestruj
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}




