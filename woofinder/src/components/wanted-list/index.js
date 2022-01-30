//Bartosz
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 30px;
 `;

const WantedItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 20px;
    padding: 10px;
    background-color: #e2e2e2;
    border-radius: 0 60px 0 0;
 `;

const WantedItemInfoBox = styled.div`
    padding: 10px
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
        <Typography variant='h6' sx={{ alignSelf: 'left' }}>Liczba zaginięć zwierząt:{wantedListData.length}</Typography>
        <Container>
            {wantedListData.map((wantedList) => {
                return (
                    <WantedItem >
                        <WantedItemInfoBox>
                            <Avatar src="https://picsum.photos/100/100" alt="dog" sx={{ width: '6em', height: '6em' }} />
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1.8em', fontWeight: 'bold', margin: '' }}>{wantedList.name}</Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1em', fontStyle: 'italic', fontWeight: '500', paddingTop: '10px' }}>Cechy zwierzaka:</Typography>
                            <Typography sx={{
                                maxWidth: '100px',
                                maxHeight: '100px',
                                overflow: 'scroll',
                                overflowY: 'hidden'
                            }}>
                                Lorem lorem lorem lorem loremLorem lorem loremLorem lorem lorem </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1em', fontStyle: 'italic', fontWeight: '500' }}>
                                Zobacz na mapie
                                <PinDropIcon fontSize='large'></PinDropIcon>
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1.1em', fontWeight: '500' }}>
                                {wantedList.cityLost}
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography>
                                Jeśli widziałeś zwierzaka napisz
                                <EditLocationAltOutlinedIcon fontSize='large'></EditLocationAltOutlinedIcon>
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <ExpandMoreOutlinedIcon fontSize='large'></ExpandMoreOutlinedIcon>
                        </WantedItemInfoBox>
                    </WantedItem>
                )
            })}
        </Container>

    </>;
};
