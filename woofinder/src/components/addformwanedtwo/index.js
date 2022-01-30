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
import Typography from "@mui/material/Typography";


const Wraps = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Wrapperwanted1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5em auto;
  width:200px
  
`;

const Wrapperwanted2 = styled.div`
  display: flex;
  flex-direction: column;
  width:350px
`;

const Wrapperwanted3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  
`;



export const AddFormWanted = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return ( 
        <>
            <Button variant='contained' sx={{ color: 'white', fontSize: '1em', borderRadius: '20px',backgroundColor:'#7a7d80',textTransform:'capitalize', fontWeight:'bold' }} onClick={handleClickOpen} >Dodaj ogłoszenie</Button>
      
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                        
                        <Typography variant="h3" sx={{ color: 'black', fontSize: '1.8em', margin: '30px',fontWeight: '900' }}>FORMULARZ ZGŁOSZENIOWY</Typography>
                        </DialogTitle>
                    
                   <Wraps>
                        <Wrapperwanted1>
                            <Avatar alt="DOG" src="/static/images/avatar/3.jpg" />
                           
                        </Wrapperwanted1>
                        <Wrapperwanted2>  
                            
                            <DialogContent >
                                <TextField sx={{fontSize: '0.6em', borderRadius: '10px',border: '1px solid silver' }} autoFocus  id="name" label="Imię psa" type="text" halfWidth  />
                                <TextField sx={{fontSize: '0.6em', borderRadius: '10px',border: '1px solid silver' }} autoFocus margin="dense" id="breed" label="Rasa" type="text" halfWidth  />
                                <TextField sx={{fontSize: '0.6em', borderRadius: '10px',border: '1px solid silver' }} autoFocus margin="dense" id="lost_date" label="" type="date" halfWidth />
                                <TextField sx={{fontSize: '0.6em', borderRadius: '10px',border: '1px solid silver' }} autoFocus margin="dense" id="local" label="Ostatnia lokalizacja pobytu" type="text" halfWidth />
                                <TextField sx={{fontSize: '0.6em', borderRadius: '10px',border: '1px solid silver' }} autoFocus margin="dense" id="owner" label="Imię właściciela" type="text" halfWidth />
                                <TextField sx={{fontSize: '0.6em', borderRadius: '10px',border: '1px solid silver' }} autoFocus margin="dense" id="phone" label="Telefon właściciela" type="phone" halfWidth />
                                <TextField sx={{fontSize: '0.6em', borderRadius: '10px',border: '1px solid silver' }} autoFocus margin="dense" id="address" label="Adres zamieszakania właściciela" type="text" halfWidth />
                            </DialogContent>
                           
                        </Wrapperwanted2>   
                        <Wrapperwanted3>
                            <Button sx={{ color: 'black'}} onClick={handleClose} >
                                <CancelIcon></CancelIcon>
                            </Button>
                           
                            <DialogContent>
                               <textarea id="description" name="description" rows="20" cols="60" placeholder="opis"></textarea>
                            </DialogContent>
                            <DialogContent>
                               <textarea id="details" name="details" rows="8" cols="60" placeholder="Znaki szczególne/uwagi"></textarea>
                            </DialogContent>
                                                     
                        </Wrapperwanted3>
                    </Wraps>
                    <DialogActions>
                   
                    <Button variant='contained' sx={{ color: 'black', fontSize: '0.8em', borderRadius: '20px',backgroundColor:'#E8E8E8' }} onClick={handleClose} >Zapisz</Button>
                    </DialogActions>
                </Dialog>
    </>
     );
}
 
