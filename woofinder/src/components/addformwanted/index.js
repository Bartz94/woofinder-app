/* eslint-disable no-undef */
import * as React from 'react';
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { firebaseConfig } from "../../firebase-config";
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import { ButtonGroup } from "@mui/material";
import Button from '@mui/material/Button';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useUserContext } from "../../services/user-context";


const app = initializeApp(firebaseConfig);
const db = getFirestore();


const BootstrapDialog = styled(Dialog)`
  background-color: rgba(210, 210, 210, 0.18);
`;

const DialogContentStyle = styled(DialogContent)`
background-image: linear-gradient(90deg, rgba(89, 252, 170, 1) 0%, rgba(41, 86, 78, 1) 100%);
width:700px;
height:900px;
overflow-x:hidden;
`;


export const AddFormWanted = () => {
  const initialValues = {
    address: '',
    breed: '',
    citylost: '',
    local: '',
    lost_date: '',
    name: '',
    owner: '',
    phone: '',
    photolink: '',
    description: '',
    details: ''
  };

  const [formData, setFormData] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);




  const [open, setOpen] = React.useState(false);
  const { user, avatarUrl, setAvatarUrl } = useUserContext();
  const [file, setFile] = useState(null);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData);
  }

  const handleChangePhoto = (e) => {

    setFile(e.target.files[0]);
  }

  const handleCancelPhoto = (e) => {
    setFile(null)
  }

  const handleSavePhoto = (e) => {
    const storage = getStorage();
    const storageRef = ref(storage, `dogs/${user.uid}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        setAvatarUrl(url);
        setFile(null);
      })
    });

  }


  const { name, address, breed, citylost, local, lost_date,
    phone, owner, description, details } = formData;

  const handleAdd = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);

    await addDoc(collection(db, "Wanted"), {
      address: address,
      breed: breed,
      citylost: citylost,
      coordinates: local,
      dateofmissing: lost_date,
      name: name,
      ownername: owner,
      phone: phone,
      photolink: "link",
      description: description,
      details: details
    });
    setOpen(true);


  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {};



    if (!values.name) {
      errors.name = "Imię psa jest wymagane";

    }
    if (!values.breed) {
      errors.breed = "Rasa psa jest wymagana";

    }
    if (!values.lost_date) {
      errors.lost_date = "Data jest wymagana";

    }
    if (!values.citylost) {
      errors.citylost = "Miejscowość jest wymagana";

    }
    if (!values.owner) {
      errors.owner = "Imię właściciela jest wymagane";

    }
    if (!values.phone) {
      errors.phone = "Telefon jest wymagany";

    }
    if (!values.address) {
      errors.address = "Adres jest wymagany";

    }
    return errors;


  };






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

  return (

    <>
      <button className="wanted-button" onClick={handleClickOpen}>
        Dodaj ogłoszenie
      </button>
      <BootstrapDialog
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          <Typography sx={{ fontSize: "26px", fontWeight: "bold", textTransform: 'capitalize' }}>Formularz zgłoszeniowy</Typography>

        </BootstrapDialogTitle>

        {Object.keys(formErrors).length === 0 && isSubmit ?
          (
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Snackbar open={open}
              >
                <Alert
                  onClose={() => { handleClose() }}
                  severity="success"
                  sx={{ width: '100%' }}><AlertTitle>Success</AlertTitle>Ogłoszenie zostało dodane</Alert>
              </Snackbar>
            </Stack>
          ) : (
            <Alert severity="info"><p>Aby dodać ogłoszenie musisz uzupełnić formularz</p></Alert>
          )}


        <DialogContentStyle>
          <form>

            <div className="input-content">
              <Avatar src={avatarUrl} alt="profile" sx={{ width: "186px", height: "186px" }} />
              <Button sx={{ mt: 2, backgroundColor: "#e2e2e2", color: "black" }}
                component="label"
              >
                <AddAPhoto />
                <input
                  onChange={handleChangePhoto}
                  type="file"
                  hidden
                />
              </Button>

              {file && file.name}
              {file && (
                <ButtonGroup>
                  <Button sx={{ mt: 2 }} variant="contained" onClick={handleSavePhoto}>Zapisz</Button>
                  <Button sx={{ mt: 2 }} variant="contained" color="inherit" onClick={handleCancelPhoto}>Nie zapisuj</Button>
                </ButtonGroup>
              )}


              <label className='labelform'>Imię psa</label>
              <input className="inputRounded"
                type="text"
                id="name"
                name="name"
                placeholder='Imię psa'
                required
                value={formData.name}
                onChange={handleChange}
              />


              <label className='labelform'>Rasa psa</label>
              <input className="inputRounded"
                type="text"
                id="breed"
                name="breed"
                placeholder="Rasa psa"
                value={formData.breed}
                onChange={handleChange}
              />


              <label className='labelform'>Data zaginięcia</label>
              <input className='inputRounded'
                type="date"
                id="lost_date"
                name="lost_date"
                value={formData.lost_date}
                onChange={handleChange}
              />


              <label className='labelform'>Ostatnia lokalizacja psa</label>
              <input className='inputRounded'
                type="text"
                id="citylost"
                name="citylost"
                placeholder="Ostatnia lokalizacja psa"
                value={formData.citylost}
                onChange={handleChange}
              />



              <label className='labelform'>Imię właściciela</label>
              <input className='inputRounded'
                type="text"
                id="owner"
                name="owner"
                placeholder="Imię właściciela"
                value={formData.owner}
                onChange={handleChange}
              />


              <label className='labelform'>Telefon właściciela</label>
              <input className='inputRounded'
                type="number"
                id="phone"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
              />


              <label className='labelform'>Adres właściciela</label>
              <input className='inputRounded'
                type="text"
                id="address"
                name="address"
                placeholder="Adres"
                value={formData.address}
                onChange={handleChange}
              />

              <label className='labelform'>Opis</label>
              <input className='inputRounded'
                type="text"
                id="description"
                name="description"
                placeholder="Opis"
                value={formData.description}
                onChange={handleChange}
              />

              <label className='labelform'>Znaki szczególne</label>
              <input className='inputRounded'
              type="text"
              id="details"
               name="details" 
               placeholder="Znaki szczególne" 
               value={formData.details}
                onChange={handleChange} />


              <button className="form-button" onClick={handleAdd} >Dodaj ogłoszenie</button>

            </div>
          </form>

        </DialogContentStyle>
      </BootstrapDialog>
    </>
  );
}

