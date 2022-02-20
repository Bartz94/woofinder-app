//Bartosz
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/material/Autocomplete';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;

`;
const TextFieldStyled = styled(TextField)`
  fieldset {
    border-radius: 25px;
  }
`;

const LinkStyled = styled(Link)`
    color:black;
    text-decoration: none;
`;

export const SearchForm = () => {
    const [cityData, setCityData] = useState([]);

    //fetching data from ./public/city-data.json
    const getCityData = () => {
        fetch('city-data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (res) {
                return res.json();
            })
            .catch((error) => {
                console.error(`Error at fetch ${error}`);
            })
            .then(function (dogsData) {
                setCityData(dogsData)
            })
            .catch((error) => {
                console.error(`Error at setting data to the state ${error}`);
            });
    }

    useEffect(() => {
        getCityData()
    }, [])

    //getting only city names to an array
    const arrayOfCityNames = cityData.map(city => city.name)

    const [dogsData, setDogsData] = useState([]);
    //fetching data from ./public/dogs-data.json
    const fetchdogsData = () => {
        fetch('dogs-data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (res) {
                return res.json();
            })
            .catch((error) => {
                console.error(`Error at fetch ${error}`);
            })
            .then(function (dogsData) {
                setDogsData(dogsData)
            })
            .catch((error) => {
                console.error(`Error at setting data to the state ${error}`);
            });
    }

    useEffect(() => {
        fetchdogsData();
    }, []);


    //getting only dog names to an array
    const dogNamesArray = dogsData.map(dog => dog.name)

    //creating states to contain values from search inputs
    const [city, setCity] = useState('');
    const [breed, setBreed] = useState('');
    const [name, setName] = useState('');


    //creating function to capture a values to the state
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }
    const handleBreedChange = (event) => {
        setBreed(event.target.value);
    }
    const handleDogNameChange = (event) => {
        setName(event.target.value);
    }

    //Limiting showed city suggestions in Autocomplete MUI Component
    const OPTIONS_LIMIT = 10;
    const filterOptions = createFilterOptions({
        limit: OPTIONS_LIMIT
    });

    return (
        <Wrapper>
            <FormControl fullWidth required sx={{ maxWidth: '900px' }}>
                <Autocomplete
                    freeSolo
                    filterOptions={filterOptions}
                    onChange={(event, newValue) => {
                        setCity(newValue);
                    }}
                    options={arrayOfCityNames}
                    renderInput={(params) => <TextFieldStyled
                        {...params}

                        label="Podaj miasto..."

                        onChange={handleCityChange}
                    />}
                />
                <Autocomplete
                    freeSolo
                    filterOptions={filterOptions}
                    onChange={(event, newValue) => { setBreed(newValue) }}
                    options={dogNamesArray}
                    sx={{ margin: '2em 0' }}
                    renderInput={(params) => <TextFieldStyled
                        {...params}
                        label="Podaj rasę psa..."
                        onChange={handleBreedChange}
                    />}
                />
                <TextFieldStyled
                    value={name}
                    label="Podaj imię psa..."
                    onChange={handleDogNameChange} />
                <Button
                    sx={{
                        color: 'black',
                        fontSize: '16px',
                        border: 'none ',
                        borderRadius: '20px',
                        backgroundColor: '#e2e2e2',
                        margin: '2em auto'
                    }}
                    variant='contained'
                    component={Link}
                    to={`/wanted-page?city=${city}&breed=${breed}&name=${name}`}
                >
                    SZUKAJ
                </Button>
            </FormControl>
        </Wrapper >
    );
};