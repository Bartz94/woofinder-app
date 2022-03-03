/* eslint-disable no-undef */
import * as React from 'react';
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
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
import { FormInput } from '../Input';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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

const FormWrapper = styled.form`
display:flex;
flex-direction:column;


`;

const SpecLabel = styled.label`
margin-bottom:15px;
margin-top:15px;
font-weight:bold;
color:black;


`;

const Comunicate = styled.p`
color:red;
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


  const { name, address, breed, citylost, local, lost_date,
    phone, owner, description, details } = formData;

  const handleAdd = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);





    await addDoc(collection(db, "Wanted"), {
      address: address,
      breed: breed.toLocaleLowerCase(),
      citylost: citylost.toLocaleLowerCase(),
      coordinates: local,
      dateofmissing: lost_date,
      name: name.toLocaleLowerCase(),
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

          <BootstrapDialogTitle variant="h4" sx={{ fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
            Formularz zgłoszeniowy
          </BootstrapDialogTitle>

          <DialogContent>



            <ContainerForm>
              <Avatar sx={{ width: "186px", height: "186px" }} />
              <FormWrapper noValidate onSubmit={handleAdd}>

                <SpecLabel>Imię psa</SpecLabel>
                <FormInput type="text" name="name" placeholder="Imię psa" required value={formData.name}
                  onChange={handleChange}
                />
                <Comunicate>{formErrors.name}</Comunicate>

                <SpecLabel>Rasa psa</SpecLabel>

                <FormInput type="text" name="breed" placeholder="Rasa psa" value={formData.breed}
                  onChange={handleChange} />
                <Comunicate>{formErrors.breed}</Comunicate>

                <SpecLabel>Data zaginięcia</SpecLabel>

                <FormInput type="date" name="lost_date" value={formData.lost_date} onChange={handleChange}
                />
                <Comunicate>{formErrors.lost_date}</Comunicate>

                <SpecLabel>Ostatnia lokalizacja psa</SpecLabel>
                <FormInput type="text" name="citylost" placeholder="Ostatnia lokalizacja psa" value={formData.citylost} onChange={handleChange} />
                <Comunicate>{formErrors.citylost}</Comunicate>


                <SpecLabel>Imię właściciela</SpecLabel>
                <FormInput type="text" name="owner" placeholder="Imię właściciela" value={formData.owner} onChange={handleChange} />
                <Comunicate>{formErrors.owner}</Comunicate>

                <SpecLabel>Telefon</SpecLabel>
                <FormInput type="number" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} />
                <Comunicate>{formErrors.phone}</Comunicate>

                <SpecLabel>Adres</SpecLabel>
                <FormInput type="text" name="address" placeholder="Adres" value={formData.address}
                  onChange={handleChange} />
                <Comunicate>{formErrors.address}</Comunicate>

                <SpecLabel>Opis</SpecLabel>
                <FormInput type="text" name="description" placeholder="Opis" value={formData.description} onChange={handleChange} />

                <SpecLabel>Znaki szczególne</SpecLabel>
                <FormInput type="text" name="details" placeholder="Znaki szczególne" value={formData.details}
                  onChange={handleChange} />


                <button onClick={handleAdd} className="search-button">Dodaj ogłoszenie</button>
              </FormWrapper>


            </ContainerForm>

          </DialogContent>
        </ContainerForm>
      </BootstrapDialog>
    </div >
  );
}

