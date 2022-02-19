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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
    // setOpen(false);
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).lenght === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = "_[a-zA-Z0-9]+";

    if (!formData.name) {
      errors.name = "Imię psa jest wymagane";
    }
    if (!formData.breed) {
      errors.breed = "Rasa psa jest wymagana";
    }
    if (!formData.lost_date) {
      errors.lost_date = "Data jest wymagana";
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
          <BootstrapDialogTitle variant="h4" sx={{ fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
            Formularz zgłoszeniowy
          </BootstrapDialogTitle>

          <DialogContent>


            <ContainerForm>
              <Avatar sx={{ width: "186px", height: "186px" }} />
              <pre>{JSON.stringify(formData, undefined, 2)}</pre>
              <FormWrapper noValidate onSubmit={handleAdd}>
                <SpecLabel>Imię psa</SpecLabel>
                <FormInput type="text" name="name" placeholder="Imię psa" value={formData.name}
                  onChange={handleChange} />

                <SpecLabel>Rasa psa</SpecLabel>
                <FormInput type="text" name="breed" placeholder="Rasa psa" value={formData.breed}
                  onChange={handleChange} />

                <SpecLabel>Data zaginięcia</SpecLabel>
                <FormInput type="date" name="lost_date" value={formData.lost_date} onChange={handleChange}
                />

                <SpecLabel>Ostatnia lokalizacja psa</SpecLabel>
                <FormInput type="text" name="citylost" placeholder="Ostatnia lokalizacja psa" value={formData.citylost} onChange={handleChange} />

                <SpecLabel>Imię właściciela</SpecLabel>
                <FormInput type="text" name="owner" placeholder="Imię właściciela" value={formData.owner} onChange={handleChange} />

                <SpecLabel>Telefon</SpecLabel>
                <FormInput type="number" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} />

                <SpecLabel>Adres</SpecLabel>
                <FormInput type="text" name="address" placeholder="Adres" value={formData.address}
                  onChange={handleChange} />

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

