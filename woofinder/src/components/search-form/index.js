//Bartosz
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  font-size: 12em;
`;

export const SearchForm = () => {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    return (
        <Wrapper>
            <Button variant='outlined' sx={{ color: 'black', fontSize: '0.2em', borderRadius: '20px' }} onClick={handleClickOpen}>Podaj miasto</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Podaj miasto, w którym zgubiłeś pupila</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                            >
                                <MenuItem value="">
                                    <em>Podaj miasto</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </Wrapper>
    );
};
