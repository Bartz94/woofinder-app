//Bartosz
import styled from 'styled-components';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12em;
  margin-top: 50px;
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

    const handleCityChange = (event) => {
        setSearchedCity(event.target.value);
    }


    const [dogsData, setDogsData] = useState([])

    const fetchdogsData = () => {
        fetch("https://api.thedogapi.com/v1/breeds")
            .then((response) => response.json())
            .then((dogsData) => setDogsData(dogsData))
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        fetchdogsData();
    }, []);

    const [breed, setBreed] = useState('')

    const handleBreedChange = (event) => {
        setBreed(event.target.value);
    }

    const [dogName, setDogName] = useState('')

    const handleDogNameChange = (event) => {
        setDogName(event.target.value);
    }

    const handleSearchButton = (event) => {
        console.log(searchedCity)
        console.log(breed)
        console.log(dogName)
    }

    return (
        <Wrapper>
            <FormControl fullWidth sx={{ width: '40%', m: 3 }}>
                <InputLabel >Podaj miasto...</InputLabel>
                <Select className="inputRounded"
                    id="demo-simple-select"
                    value={searchedCity}
                    label="Podaj miasto..."
                    onChange={handleCityChange}
                    sx={{ borderRadius: 25 }}
                >
                    {cities.map(city =>
                        <MenuItem value={city.name} key={city.name}>{city.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: '40%', mb: 3 }}>
                <InputLabel >Podaj rasę psa...</InputLabel>
                <Select
                    id="demo-simple-select"
                    defaultValue=''
                    value={breed}
                    label="Podaj rasę psa..."
                    onChange={handleBreedChange}
                    sx={{ borderRadius: 25 }}
                >
                    {dogsData.map(dog =>
                        <MenuItem value={dog.name} key={dog.id}>{dog.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: '40%', mb: 5 }}>
                <InputLabel >Podaj imię psa...</InputLabel>
                <Input onChange={handleDogNameChange} sx={{ fontSize: '16px', m: 2 }}></Input>
            </FormControl>
            <Button
                onClick={handleSearchButton}
                variant='contained'
                sx={{ color: 'black', fontSize: '16px', border: 'none ', borderRadius: '20px', backgroundColor: '#e2e2e2' }} >
                <Link to="/wanted-page">Szukaj</Link>
            </Button>
        </Wrapper >
    );
};