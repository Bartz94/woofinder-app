//Bartosz
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12em;
  margin-top: 50px;
`;

export const SearchForm = () => {
    const [cityData, setCityData] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const getCityData = () => {
        fetch('miasta_.json'
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
            .then(function (citiesData) {
                setCityData(citiesData)
                setIsPending(true);
            })
            .catch((error) => {
                console.error(`Error at setting data to the state ${error}`);
            });
    }

    useEffect(() => {
        getCityData()
    }, [])


    // const reduceCityData = () => {
    //     cityData.map((city) => {
    //         console.log(city.cities)
    //     })
    // }
    // reduceCityData()
    const newArrOfTextSimples = cityData.map(item => item?.cities.map(item => item.text_simple))
    console.log(newArrOfTextSimples)
    // 
    const cityText = newArrOfTextSimples.map(item => item.map(item => item.toString()))
    // console.log(cityText)
    const testData = cityData
    // console.log(testData[0].cities[0].text_simple)

    const [dogsData, setDogsData] = useState([]);

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

    const [city, setCity] = useState('');
    const [breed, setBreed] = useState('');
    const [name, setName] = useState('');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleBreedChange = (event) => {
        setBreed(event.target.value);
    }


    const handleDogNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <Wrapper>
            <FormControl fullWidth sx={{ width: '40%', m: 3 }}>
                {/* <Select className="inputRounded"
                    id="demo-simple-select"
                    value={city}
                    label="Podaj miasto..."
                    onChange={handleCityChange}
                    sx={{ borderRadius: 25 }}
                >

                </Select> */}
                {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={newArrOfTextSimples}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                /> */}
                <Autocomplete
                    options={newArrOfTextSimples}
                    renderInput={(params) => <TextField
                        {...params}
                        value={city}
                        label="Podaj miasto..."
                        onChange={handleCityChange}
                        sx={{ borderRadius: 25 }} />}
                />
            </FormControl>
            <FormControl fullWidth sx={{ width: '40%', mb: 3 }}>
                <TextField
                    value={breed}
                    label="Podaj rasę psa..."
                    onChange={handleBreedChange}
                >
                    {dogsData.map(dog =>
                        <MenuItem value={dog.name} key={dog.id}>{dog.name}</MenuItem>
                    )}
                </TextField>
            </FormControl>
            <FormControl fullWidth sx={{ width: '40%', mb: 5 }}>
                <TextField
                    value={name}
                    label="Podaj imię psa..."
                    onChange={handleDogNameChange} />
            </FormControl>
            <Button
                variant='contained'
                sx={{ color: 'black', fontSize: '16px', border: 'none ', borderRadius: '20px', backgroundColor: '#e2e2e2' }} >
                <Link to={`/wanted-page?city=${city}&breed=${breed}&name=${name}`}>
                    Szukaj
                </Link>
            </Button>

        </Wrapper >
    );
};