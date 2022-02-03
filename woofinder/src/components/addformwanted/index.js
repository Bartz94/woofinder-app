import * as React from 'react';
import {useState} from 'react';
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
import { getFirestore,collection, addDoc} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {firebaseConfig} from "../../firebase-config";

const app = initializeApp(firebaseConfig);
const db = getFirestore();


const BootstrapDialog = styled(Dialog)`
  background-color: rgba(210, 210, 210, 0.18);
  
`;



export const AddFormWanted = () => {

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

  const [formData, setFormData] = useState({
    address: '' ,
    breed: '',
    citylost: '',
    local: '',
    lost_date:'',
    name:'',
    owner:'',
    phone:'',
    photolink:'',
    description:'',
    details:''
  });

 const { name, address, breed, citylost,local,lost_date,phone,owner,description,details } = formData;

 const handleAdd = async () => {
      
   await addDoc(collection(db, "Wanted"), {
       address: address ,
       breed: breed,
       citylost: citylost,
       coordinates: local,
       dateofmissing:lost_date,
       name:name,
       ownername:owner,
       phone:phone,
       photolink:"link",
       description:description,
       details:details
  });
        setOpen(false);
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
      <Button variant="contained" sx={{ color: 'black', fontSize: '16px', border: 'none ', borderRadius: '20px', backgroundColor: '#e2e2e2', textTransform: 'capitalize', fontWeight: 'bold', mb: 3 }} onClick={handleClickOpen}>
        Dodaj ogłoszenie
      </Button>
      <BootstrapDialog
        
        onClose={handleClose} maxWidth="lg"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          Formularz zgłoszeniowy
        </BootstrapDialogTitle>

        <DialogContent>
          <Avatar sx={{ width: "186px", height: "186px", ml: 4, mt: 2 }} />
          <Button sx={{ ml: 8, mt: 2 }}>Dodaj zdjęcie</Button>


          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 11, mt: -18 }} id="name" name="name" value={name} onChange={handleChange} label="Imię psa" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: -16 }} id="breed" name="breed" value={breed} onChange={handleChange} label="Rasa" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: -10, }} id="lost_date" name="lost_date" value={lost_date} onChange={handleChange} label="Data zaginięcia" type="date" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: -4 }} id="local" name="local" value={local} onChange={handleChange} label="Ostatnia lokalizacja pobytu" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="owner" name="owner" value={owner} onChange={handleChange} label="Imię właściciela" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="phone" name="phone" value={phone} onChange={handleChange} label="Telefon właściciela" type="phone" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="address" name="address" value={address} onChange={handleChange} label="Adres zamieszakania właściciela" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="description" name="description" value={description} onChange={handleChange} label="opis"></TextField>
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="details" name="details" value={details} onChange={handleChange}  label="znaki szczególne"></TextField>



        </DialogContent>

        <DialogActions>
          <Button variant="contained" sx={{ color: 'black', fontSize: '0.8em', borderRadius: '20px', backgroundColor: '#E2E2E2', mt: -66, mr: 12, textTransform: 'capitalize', fontWeight: 'bold' }} autoFocus onClick={handleAdd}>
            Zapisz
          </Button>
         
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
 }
