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
  const [repassword, setRePassword] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
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

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  }


  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();


    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/register');
      })

  }

  return (
    <>
      <Button variant="text" sx={{ color: 'black', textTransform: 'capitalize' }} onClick={handleClickOpen}>
        Zarejestruj
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          Zarejestruj się
        </BootstrapDialogTitle>
        <DialogContentStyle>
          <Avatar sx={{ width: "186px", height: "186px", ml: 22, mt: 10 }} />
          <Button sx={{ ml: 26, mt: 1 }}>Dodaj zdjęcie</Button>
          <form onSubmit={handleSubmit}>
            <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -28 }}
              label='Nazwa użytkownika'
              type="text"
              required
              id="username"
              value={username}
              autoComplete='username'
              onChange={handleUsernameChange}
            />
            <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -22 }}
              type="email"
              required
              id="email"
              label='Email'
              value={email}
              autoComplete='email'
              onChange={handleEmailChange}
            />

            <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -16 }}
              type="phone"
              required
              id="phone"
              label='Telefon'
              value={phone}
              autoComplete='phone'
              onChange={handlePhoneChange}
            />
            <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -10 }}
              required
              type="password"
              id="password"
              label='Hasło'
              value={password}
              autoComplete='current-password'
              onChange={handlePasswordChange}

            />
            <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 65, mt: -4 }}
              required
              type="password"
              id="password"
              label='Hasło'
              value={repassword}
              autoComplete='current-password'
              onChange={handleRePasswordChange}
            />
          </form>


        </DialogContentStyle>
        <DialogActions>
          <Button type="submit" variant="contained" sx={{ color: 'black', fontSize: '0.8em', borderRadius: '20px', backgroundColor: '#E2E2E2', mt: -17, mr: 12, textTransform: 'capitalize', fontWeight: 'bold' }} autoFocus onClick={handleClose}>
            <Typography>
              Zarejestruj się
            </Typography>

          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}




