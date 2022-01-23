//Jacek
import React, { useState } from "react";
import { Avatar, Button, DialogTitle } from "@mui/material";
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import DialogContent from '@mui/material/DialogContent';
import { Dialog } from "@mui/material";




export const LoginFormPopUp = (props) => {

    const { openPopUp, setOpenPopup } = props


    const [values, setValues] = useState({
        login: "",
        password: ""
    });


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormLog = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Dialog open={openPopUp}>
                <DialogTitle>
                    <h2 className="title">Zaloguj się</h2>
                </DialogTitle>
                <DialogContent>

                    <div className='containerform'>
                        <form className="formstyle">

                            <Avatar sx={{ my: 6, marginLeft: '140px', width: 176, height: 176 }} />
                            {/* <Button variant='outlined' sx={{ ml: 19, color: 'black', fontSize: '16px', border: 'none ', borderRadius: '20px', backgroundColor: '#E2E2E2' }}
                >Dodaj zdjęcie</Button> */}
                            <TextField onChange={handleChange} className="inputRounded"
                                sx={{ ml: 65, marginTop: -25, width: 600 }} autoFocus id="name" label="Nazwa użytkownika albo email" type="text" name="login" value={values.login} required />
                            <TextField onChange={handleChange} className="inputRounded"
                                sx={{ ml: 65, marginTop: -20, width: 600 }} autoFocus id="name" label="Hasło" type="password" required name="password" value={values.password}
                            />
                            <Button onClick={handleFormLog} variant='contained' sx={{ ml: 123, marginTop: -25, color: 'white', fontSize: '0.7em', borderRadius: '20px', backgroundColor: '#7a7d80' }}>Zaloguj się</Button>
                            <Button sx={{ ml: 140, marginTop: -115, color: 'black' }}>
                                <CancelIcon sx={{ width: 40, height: 40 }}></CancelIcon>
                            </Button>

                        </form>
                    </div>
                </DialogContent>
            </Dialog>
           
        </>
    )
}

