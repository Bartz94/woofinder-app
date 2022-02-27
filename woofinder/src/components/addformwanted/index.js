import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
import { useNavigate } from 'react-router-dom';
import { BiErrorCircle } from 'react-icons/bi';
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import { ButtonGroup } from "@mui/material";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useUserContext } from "../../services/user-context";

import { useFormik } from 'formik'
import * as Yup from 'yup'

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
  const [open, setOpen] = React.useState(false);
  const { user, avatarUrl, setAvatarUrl } = useUserContext();
  const [file, setFile] = useState(null);

  const formik = useFormik({
    initialValues: {
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
      details: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(50).required("Podaj imię psa"),
      breed: Yup.string().max(50).required('Podaj rasę psa'),
      citylost: Yup.string().max(50).required('Podaj ostatnią lokalizację pobytu psa'),
      lost_date: Yup.string().max(50).required('Podaj datę zaginięcia'),
      owner: Yup.string().max(50).required('Podaj imię właściciela'),
      phone: Yup.string().max(50).required('Podaj numer telefonu'),
      description: Yup.string().max(255),
      details: Yup.string().max(255)


    }),
    onSubmit: (values) => {

    }
  })
  console.log(formik.errors);

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

  const [formData, setFormData] = useState({ formik }
  );

  const { name, address, breed, citylost, local, lost_date, phone, owner, description, details } = formData;

  const handleAdd = async () => {

    await addDoc(collection(db, "Wanted"), {
      initialValues: {
        address: address,
        breed: breed,
        citylost: citylost,
        local: local,
        lost_date: lost_date,
        name: name,
        owner: owner,
        phone: phone,
        photolink: 'link',
        description: description,
        details: details,
      }



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
              left: 665,
              bottom: 870,
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
      <Button variant="contained" sx={{ color: 'black', fontSize: '16px', border: 'none ', borderRadius: '20px', backgroundColor: '#e2e2e2', textTransform: 'capitalize', fontWeight: 'bold', mb: 3 }} onClick={handleClickOpen}>
        Dodaj ogłoszenie
      </Button>
      <BootstrapDialog

        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          <Typography sx={{ fontSize: "26px", fontWeight: "bold", textTransform: 'capitalize' }}>Formularz zgłoszeniowy</Typography>

        </BootstrapDialogTitle>

        <DialogContentStyle>
          <form onSubmit={formik.handleSubmit}>
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
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.name && formik.errors.name ? <p className='error'>{formik.errors.name}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}

              <label className='labelform'>Rasa psa</label>
              <input className="inputRounded"
                required
                type="text"
                id="breed"
                name="breed"
                placeholder='Rasa psa'
                value={formik.values.breed}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.breed && formik.errors.breed ? <p className='error'>{formik.errors.breed}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}
              <label className='labelform'>Ostatnia lokalizacja pobytu</label>
              <input className="inputRounded"
                required
                type="text"
                id="citylost"
                name="citylost"
                placeholder='Ostatnia lokalizacja pobytu'
                value={formik.values.citylost}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.breed && formik.errors.citylost ? <p className='error'>{formik.errors.citylost}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}

              <label className='labelform'>Data zaginięcia</label>
              <input className="inputRounded"
                required
                type="date"
                id="lost_date"
                name="lost_date"
                placeholder='Data zaginięcia'
                value={formik.values.lost_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.owner && formik.errors.lost_date ? <p className='error'>{formik.errors.lost_date}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}

              <label className='labelform'>Imię właściciela</label>
              <input className="inputRounded"
                required
                type="text"
                id="owner"
                name="owner"
                placeholder='Imię właściciela'
                value={formik.values.owner}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.owner && formik.errors.owner ? <p className='error'>{formik.errors.owner}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}

              <label className='labelform'>Telefon właściciela</label>
              <input className="inputRounded"
                required
                type="number"
                id="phone"
                name="phone"
                placeholder='Telefon właściciela'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? <p className='error'>{formik.errors.phone}<BiErrorCircle
                style={{ width: "20px", height: "20px" }} /></p> : null}

              <label className='labelform'>Opis</label>
              <input className="inputRounded"
                type="text"
                id="description"
                name="description"
                placeholder='Opis'
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label className='labelform'>Znaki szczególne</label>
              <input className="inputRounded"
                type="text"
                id="details"
                name="details"
                placeholder='Znaki szczególne'
                value={formik.values.details}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />


              <button className='form-button' type='submit' onClick={handleAdd} >Zapisz
              </button>
            </div>
          </form>

        </DialogContentStyle>
      </BootstrapDialog>
    </>
  );
}
