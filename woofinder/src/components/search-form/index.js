//Bartosz
import styled from 'styled-components';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12em;
  margin-top: 20px
`;

export const SearchForm = () => {
    const cities = [
        { name: 'Wrocław' },
        { name: 'Bydgoszcz' },
        { name: 'Toruń' },
        { name: 'Lublin' },
        { name: 'Zielona Góra' },
        { name: 'Gorzów Wielkopolski' },
        { name: 'Łódź' },
        { name: 'Kraków' },
        { name: 'Warszawa' },
        { name: 'Opole' },
        { name: 'Rzeszów' },
        { name: 'Białystok' },
        { name: 'Gdańsk' },
        { name: 'Katowice' },
        { name: 'Kielce' },
        { name: 'Olsztyn' },
        { name: 'Poznań' },
        { name: 'Szczecin' }
    ];

    const [searchedCity, setSearchedCity] = useState('');
    const handleChange = (event) => {
        setSearchedCity(event.target.value);
    }

    return (
        <Wrapper>
            <FormControl fullWidth sx={{ width: 320, m: 3 }}>
                <InputLabel id="demo-simple-select-label">Podaj miasto...</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchedCity}
                    label="Podaj miasto..."
                    onChange={handleChange}
                >
                    {cities.map(city =>
                        <MenuItem value={city.name} key={city.name}>{city.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: 320 }}>
                <InputLabel id="demo-simple-select-label">Podaj rasę psa...</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchedCity}
                    label="Podaj rasę psa..."
                    onChange={handleChange}
                >
                    {cities.map(city =>
                        <MenuItem value={city.name} key={city.name}>{city.name}</MenuItem>
                    )}
                </Select>
            </FormControl>

        </Wrapper >
    );
};
