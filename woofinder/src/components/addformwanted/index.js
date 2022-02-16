import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { firebaseConfig } from "../../firebase-config";

const app = initializeApp(firebaseConfig);
const db = getFirestore();


const BootstrapDialog = styled(Dialog)`
  background-color: rgba(210, 210, 210, 0.18);
  
`;

const ContainerForm = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
`;

export const AddFormWanted = () => {

  const [open, setOpen] = React.useState(false);
  const [nameErrorsForm, setNameErrorsForm] = React.useState(false)
  const [breedErrorsForm, setBreedErrorsForm] = React.useState(false)
  const [lostDateErrorsForm, setLostDateErrorsForm] = React.useState(false)
  const [cityErrorsForm, setCityErrorsForm] = React.useState(false)
  const [phoneErrorsForm, setPhoneErrorsForm] = React.useState(false)
  const [ownerErrorsForm, setOwnerErrorsForm] = React.useState(false)
  const [descriptionErrorsForm, setDescriptionErrorsForm] = React.useState(false)
  const [detailsErrorsForm, setDetailsErrorsForm] = React.useState(false)
  const [adressErrorsForm, setAdressErrorsForm] = React.useState(false)




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  

  const [formData, setFormData] = useState({
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
  });

  const { name, address, breed, citylost, local, lost_date, phone, owner, description, details } = formData;

  const handleAdd = async (e) => {
    e.preventDefault()
    setNameErrorsForm(false)
    setBreedErrorsForm(false)
    setCityErrorsForm(false)
    setLostDateErrorsForm(false)
    setOwnerErrorsForm(false)
    setPhoneErrorsForm(false)
    setDetailsErrorsForm(false)
    setDescriptionErrorsForm(false)
    setAdressErrorsForm(false)


    if (name === "") {
      e.stopPropagation()
      setNameErrorsForm(true)
      setBreedErrorsForm(true)
      setCityErrorsForm(true)
      setLostDateErrorsForm(true)
      setOwnerErrorsForm(true)
      setPhoneErrorsForm(true)
      setDetailsErrorsForm(true)
      setDescriptionErrorsForm(true)
      setAdressErrorsForm(true)
    }
    if(name === "true") {
      e.preventDefault();
    }


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
    
  }


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
    <div>
      <button className="search-button" onClick={handleClickOpen}>
        Dodaj ogłoszenie
      </button>
      <BootstrapDialog

        onClose={handleClose} maxWidth="lg"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <ContainerForm>
          <BootstrapDialogTitle variant="h4" sx={{ fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
            Formularz zgłoszeniowy
          </BootstrapDialogTitle>

          <DialogContent>

            <Avatar sx={{ width: "186px", height: "186px", mt: 2, mb: 2, ml: 60 }} />

            <form onChange={handleAdd}>
              <label>Imię psa</label>
              <TextField
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                type="text"
                fullWidth
                error={nameErrorsForm}
                helperText="Uzupełnij pola"
                sx={{ mb: 2 }}
              />
              <label>Rasa</label>
              <TextField 
              id="breed" 
              name="breed" 
              value={breed} 
              onChange={handleChange} 
              type="text" 
              fullWidth 
              error={breedErrorsForm}
              helperText="Uzupełnij pola"
              sx={{ mb: 2 }} 
              />
              <label>Data zaginięcia</label>
              <TextField 
              id="lost_date" 
              name="lost_date" 
              value={lost_date} 
              onChange={handleChange} 
              type="date" 
              error={lostDateErrorsForm}
              helperText="Uzupełnij pola"
              fullWidth 
              sx={{ mb: 2 }} />

              <label>Ostatnia lokalizacja pobytu</label>
              <TextField 
              id="local" 
              name="local" 
              value={local} 
              onChange={handleChange} 
              type="text" 
              fullWidth 
              error={cityErrorsForm}
              helperText="Uzupełnij pola"
              sx={{ mb: 2 }} />

              <label>Imię właściciela</label>
              <TextField 
              id="owner" 
              name="owner" 
              value={owner} 
              onChange={handleChange} 
              type="text"
              error={ownerErrorsForm}
              helperText="Uzupełnij pola"
              fullWidth 
              sx={{ mb: 2 }} />

              <label>Telefon właściciela</label>
              <TextField 
              id="phone" 
              name="phone" 
              value={phone} 
              onChange={handleChange} 
              type="phone"
              error={phoneErrorsForm}
              helperText="Uzupełnij pola" 
              fullWidth 
              sx={{ mb: 2 }} />

              <label>Adres zamieszakania</label>
              <TextField 
              id="address" 
              name="address" 
              value={address} 
              onChange={handleChange} 
              type="text"
              error={adressErrorsForm} 
              helperText="Uzupełnij pola"
              fullWidth 
              sx={{ mb: 2 }} />

              <label>Opis</label>
              <TextField 
              id="description" 
              name="description" 
              value={description} 
              onChange={handleChange} 
              fullWidth
              error={descriptionErrorsForm}
              helperText="Uzupełnij pola"  
              multiline rows={4} 
              sx={{ mb: 2 }} />

              <label>Znaki szczególne</label>
              <TextField 
              id="details" 
              name="details" 
              value={details} 
              onChange={handleChange}
              error={detailsErrorsForm}
              helperText="Uzupełnij pola"  
              fullWidth 
              sx={{ mb: 2 }} />

              <DialogActions>
                <button 
                className='search-button' 
                variant="contained" 
                sx={{ color: 'black', borderRadius: '20px', backgroundColor: '#E2E2E2', textTransform: 'capitalize', fontWeight: 'bold' }} 
                autoFocus onClick={handleAdd}>
                  Zapisz
                </button>
              </DialogActions>

            </form>

          </DialogContent>
        </ContainerForm>
      </BootstrapDialog>
    </div >
  );
}
