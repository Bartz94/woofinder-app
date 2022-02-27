//Jacek
import * as React from 'react';
import { useState } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

import { useFormik} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { styled, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../firebase-config';






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

export const LoginForm = (isSignup) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email musi być prawdziwy').max(255).required("Podaj email"),
      password: Yup.string().max(18).required('Podaj hasło'),
    }),
    onSubmit: (values) => {

    }
  })
  console.log(formik.errors);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    console.log(formik.values.email)

    signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
      .then(() => {
        navigate('/');
      })
  }


  return (
    <>
      <Button variant="text" sx={{ color: 'black', textTransform: 'capitalize' }} onClick={handleClickOpen}>
        Zaloguj
      </Button>
      <BootstrapDialog
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          <Typography sx={{ fontSize: "26px", fontWeight: "bold", textTransform: 'capitalize' }}> Zaloguj się.</Typography>
        </BootstrapDialogTitle>
        <DialogContentStyle>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-content">
              <label className='labelform'>Email</label>
              <input className="inputRounded"
                type="email"
                id="email"
                name="email"
                placeholder='email'
                value={formik.values.email}
                autoComplete='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}
              <label className='labelform'>Hasło</label>
              <input className="inputRounded"
                required
                type="password"
                id="password"
                name="password"
                placeholder='hasło'
                value={formik.values.password}
                autoComplete='current-password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? <p className='error'>{formik.errors.password}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}

              <button className='form-button' type='submit' onClick={handleButtonSubmit}>Zaloguj
              </button>
            </div>
          </form>
        </DialogContentStyle>



      </BootstrapDialog>
    </>
  );
}




