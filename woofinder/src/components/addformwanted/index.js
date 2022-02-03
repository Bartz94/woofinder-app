import * as React from 'react';
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


const BootstrapDialog = styled(Dialog)`
  background-color: rgba(210, 210, 210, 0.18);
  
`;



// const Wraps = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
// `;

// const Wrapperwanted1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0.5em auto;
//   width:200px

// `;

// const Wrapperwanted2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   width:350px
// `;

// const Wrapperwanted3 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: end;

// `;


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

export const AddFormWanted = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" sx={{ color: 'black', fontSize: '16px', border: 'none ', borderRadius: '20px', backgroundColor: '#e2e2e2', textTransform: 'capitalize', fontWeight: 'bold', mb: 3 }} onClick={handleClickOpen}>
        Dodaj ogłoszenie
      </Button>
      <BootstrapDialog
        
        onClose={handleClose} maxWidth
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle variant="h4" sx={{ mt: 1, ml: 3, fontFamily: 'Segoe UI', fontWeight: 'bold', textTransform: "uppercase" }} id="customized-dialog-title" onClose={handleClose}>
          Formularz zgłoszeniowy
        </BootstrapDialogTitle>

        <DialogContent>
          <Avatar sx={{ width: "186px", height: "186px", ml: 4, mt: 2 }} />
          <Button sx={{ ml: 8, mt: 2 }}>Dodaj zdjęcie</Button>



          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 11, mt: -18 }} id="name" label="Imię psa" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: -16 }} id="breed" label="Rasa" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: -10, }} id="lost_date" label="" type="date" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: -4 }} id="local" label="Ostatnia lokalizacja pobytu" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="owner" label="Imię właściciela" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="phone" label="Telefon właściciela" type="phone" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="address" label="Adres zamieszakania właściciela" type="text" />
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="description" name="description" label="opis"></TextField>
          <TextField className="inputRounded" sx={{ fontSize: '0.6em', borderRadius: '25px', border: '1px solid silver', ml: 35, mt: 2 }} id="description" name="description" label="znaki szczególne"></TextField>



        </DialogContent>

        <DialogActions>
          <Button variant="contained" sx={{ color: 'black', fontSize: '0.8em', borderRadius: '20px', backgroundColor: '#E2E2E2', mt: -66, mr: 12, textTransform: 'capitalize', fontWeight: 'bold' }} autoFocus onClick={handleClose}>
            Zapisz
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}