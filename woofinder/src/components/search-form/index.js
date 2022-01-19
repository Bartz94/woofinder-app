//Bartosz
import styled from 'styled-components';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

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
    console.log(cities.map(city => city.name))
    const [searchedCity, setSearchedCity] = useState('');

    const handleCityChange = (event) => {
        setSearchedCity(event.target.value);
    }


    const [dogsData, setDogsData] = useState([])

    const fetchdogsData = () => {
        fetch("https://api.thedogapi.com/v1/breeds")
            .then((response) => response.json())
            .then((dogsData) => setDogsData(dogsData))
            .then((result) => {
                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        fetchdogsData();
    }, []);

    console.log(dogsData.map(dog => dog.name))



    return (
        <Wrapper>
            <FormControl fullWidth sx={{ width: 320, m: 3 }}>
                <InputLabel id="demo-simple-select-label">Podaj miasto...</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchedCity}
                    label="Podaj miasto..."
                    onChange={handleCityChange}
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
                    defaultValue=''
                    value={dogsData}
                    label="Podaj rasę psa..."
                >
                    {dogsData.map(dog =>
                        <MenuItem value={dog.name} key={dog.id}>{dog.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <select


            >
                {dogsData.map(dog =>
                    <option value={dogsData} key={dog.id}>{dog.name}</option>
                )}
            </select>
        </Wrapper >
    );
};
