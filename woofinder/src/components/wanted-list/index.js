//Bartosz
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PlaceIcon from '@mui/icons-material/Place';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
 `;

const WantedItem = styled.div`
width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 20px;
    padding: 10px;
    background-color: #e2e2e2;
    border-radius: 0 50px 0 0;
 `;

const WantedItemInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 `;

const ContainerEdit = styled.div`

display:flex;
justify-content:space-evenly;
background-color:none;
border:3px dotted black;
border-radius:25px;
margin-left:60px;
width:220px;
height:80px;

`;

const Circle = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 background-color:#64C2A7;
 color:white;
 border-radius:175px;
 width: 50px;
 height:50px;
 margin-top:10px;
 `;

const Question = styled.p`
font-weight:bold;
 width:120px;
 margin:5px;
`;

const Specyfic = styled.div`
width:100%;
margin-top:25px;
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
    }, [wantedListCollectionRef])

    return <>
        <Typography variant='h6' sx={{ marginLeft: '300px', mt: 2 }}>Liczba zaginięć zwierząt:{wantedListData.length}</Typography>
        <Container >
            {wantedListData.map((wantedList) => {
                return (
                    <WantedItem key={wantedList.id} style={{ minWidth: '20px' }}>
                        <WantedItemInfoBox>
                            <Avatar src="https://picsum.photos/100/100" alt="dog" sx={{ width: '6em', height: '6em', marginLeft: "15px" }} />
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{fontSize:'25px', fontWeight:'bold'}}>
                                {wantedList.name ? wantedList.name : '---'}
                            </Typography>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Specyfic>
                                <Typography sx={{ fontSize: '1em', fontStyle: 'italic', fontWeight: '500', mb: 1 }}>
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
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                </Typography>
                            </Specyfic>

                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <Typography sx={{ fontSize: '1.1em', fontWeight: '500' }}>
                                {wantedList.cityLost ? wantedList.cityLost : '---'}
                            </Typography>
                        </WantedItemInfoBox>

                        <WantedItemInfoBox>
                            <Button sx={{ color: "#64C2A7" }} variant="text">
                                {<PlaceIcon fontSize="large" />}
                                Zobacz na mapie</Button>
                        </WantedItemInfoBox>
                        <WantedItemInfoBox>
                            <ContainerEdit>
                                <Question>
                                    Jeśli widziałeś zwierzaka napisz
                                </Question>
                                <Circle>
                                    <EditIcon fontSize='large' />
                                </Circle>
                            </ContainerEdit>

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