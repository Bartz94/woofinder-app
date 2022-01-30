//Bartosz
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';

const InfoSection = styled.Box`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
    align-items: center;
 `;

export const WantedList = () => {

    const [wantedListData, setWantedListData] = useState([])
    const wantedListCollectionRef = collection(db, "Wanted")

    useEffect(() => {

        const getWantedList = async () => {
            const data = await getDocs(wantedListCollectionRef);
            setWantedListData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getWantedList()
    }, [])

    return <>
        <Typography variant='h6' sx={{ alignSelf: 'left' }}>Liczba zaginięć zwierząt:{Math.floor(Math.random() * 100)}</Typography>

        {wantedListData.map((wantedList) => {
            return (

                <Container fixed maxWidth='md' sx={{ marginTop: '20px', backgroundColor: '#f2f2f2', borderRadius: '0 50px 0 0', minHeight: '30vh' }}>
                    <InfoSection style={{ padding: '10px', margin: '10px' }}>
                        <Box>
                            <Avatar src="https://picsum.photos/100/100" alt="dog" sx={{ width: '7em', height: '7em' }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '1.8em', fontWeight: 'bold', margin: '' }}>{wantedList.name}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '1em', fontStyle: 'italic', fontWeight: '500', paddingTop: '20px' }}>Cechy zwierzaka:</Typography>
                            <Typography sx={{
                                maxWidth: '100px',
                                maxHeight: '120px',
                                overflow: 'scroll',
                                overflowY: 'hidden'
                            }}>
                                Lorem lorem lorem lorem loremLorem lorem loremLorem lorem lorem </Typography>
                        </Box>
                        <Box>
                            <Typography>Zobacz na mapie</Typography>
                        </Box>
                        <Box>
                            <Typography>{wantedList.cityLost}</Typography>
                        </Box>
                        <Box>
                            <Typography>Jeśli widziałeś zwierzaka napisz</Typography>
                            <Typography>Pokaż więcej</Typography>
                        </Box>
                    </InfoSection>
                </Container>
            )
        })}
    </>;
};
