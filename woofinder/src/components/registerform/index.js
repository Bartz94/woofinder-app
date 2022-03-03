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



const BootstrapDialog = styled(Dialog)`
  background-color: rgba(210, 210, 210, 0.18);
  
`;

const DialogContentStyle = styled(DialogContent)`
background-image: linear-gradient(90deg, rgba(89, 252, 170, 1) 0%, rgba(41, 86, 78, 1) 100%);
width:500px;
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
            left: 475,
            bottom: 545,
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
        handleClose();
        navigate('/');
      })

  }

  return (
    <>
      <Button variant="text" sx={{ color: 'black', textTransform: 'capitalize' }} onClick={handleClickOpen}>
        Zarejestruj
      </Button>
      <BootstrapDialog
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          <Typography sx={{ fontSize: "26px", fontWeight: "bold", textTransform: 'capitalize' }}> Zarejestruj się.</Typography>

        </BootstrapDialogTitle>
        <DialogContentStyle>
          
          <form onSubmit={handleSubmit}>
            <div className="input-content">
              <label className='labelform'>Email</label>
              <input className="inputRounded"
                type="email"
                id="email"
                name="email"
                placeholder='email'
                value={email}
                autoComplete='email'
                onChange={handleEmailChange}
                required
              />
              <label className='labelform'>Hasło</label>
              <input className="inputRounded"
                type="password"
                id="password"
                name="password"
                placeholder='hasło'
                value={password}
                autoComplete='current-password'
                onChange={handlePasswordChange}
                required
              />
          
        
 
          <button className='form-button' type='submit' onClick={handleSubmit}>
            Zarejestruj
          </button>
          </div>
          </form>
          </DialogContentStyle>
      </BootstrapDialog>
    </>
  );
}




