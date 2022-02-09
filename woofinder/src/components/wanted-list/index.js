//Bartosz
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/search-context';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
 `;

const WantedItem = styled.div`
width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 20px;
    padding: 10px;
    background-color: #e2e2e2;
    border-radius: 0 60px 0 0;
 `;

const WantedItemInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
 `;

export const WantedList = () => {

    const [wantedListData, setWantedListData] = useState([])
    const { city, breed, name } = useContext(SearchContext)

    const { search } = useLocation();
    const { cityf, breedf, namef } = queryString.parse(search)
    console.log(cityf, breedf)

    const wantedListCollectionRef = collection(db, "Wanted")

    const q = query(wantedListCollectionRef, where("name", "==", name), where("cityLost", "==", city), where("breed", "==", breed));

    useEffect(() => {

        const getWantedList = async () => {
            const data = await getDocs(q);
            setWantedListData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getWantedList()
    }, [])


    return <>
        <Typography variant='h6' sx={{ alignSelf: 'left' }}>Liczba zaginięć zwierząt:{wantedListData.length}</Typography>
        <Container >
            {wantedListData.map((wantedList) => {
                return (
                    <WantedItem key={wantedList.id} style={{ minWidth: '20px' }}>
                        <WantedItemInfoBox>
                            <Avatar src="https://picsum.photos/100/100" alt="dog" sx={{ width: '6em', height: '6em' }} />
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1.8em', fontWeight: 'bold' }}>
                                {wantedList.name ? wantedList.name : 'Nie ma imienia'}
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1em', fontStyle: 'italic', fontWeight: '500' }}>
                                Cechy zwierzaka:
                            </Typography>
                            <Typography sx={{
                                maxWidth: '120px',
                                maxHeight: '120px',
                                overflow: 'scroll',
                                "&::-webkit-scrollbar": {
                                    width: 0
                                },
                                borderRadius: '5px',
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to m
                                ake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lo
                                rem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                                Lorem Ipsum.
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1em', fontStyle: 'italic', fontWeight: '500' }}>
                                Zobacz na mapie
                                <MapIcon fontSize='large'></MapIcon>
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1.1em', fontWeight: '500' }}>
                                {wantedList.cityLost ? wantedList.cityLost : 'Nie ma miasta'}
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography>
                                Jeśli widziałeś zwierzaka napisz
                                <EditLocationAltOutlinedIcon fontSize='large'></EditLocationAltOutlinedIcon>
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <ExpandMoreOutlinedIcon fontSize='large' sx={{ padding: 'none' }}></ExpandMoreOutlinedIcon>
                        </WantedItemInfoBox>
                    </WantedItem>
                )
            })}
        </Container>

    </>;
};
