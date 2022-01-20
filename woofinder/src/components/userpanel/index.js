//Jacek

import * as React from 'react';
import { Menu, MenuItem} from "@mui/material"
// import { useState } from "react";

export const UserPanel = () => {

  return (
    <>
    <Menu open={true}>
        <MenuItem>Zmień hasło</MenuItem>
        <MenuItem>Zmień zdjęcie</MenuItem>
        <MenuItem>Dodaj ogłoszenie</MenuItem>
        <MenuItem>Zamknij ogłoszenie</MenuItem>
        <MenuItem>Wyloguj się</MenuItem>
      </Menu>
    </>
  );
}
