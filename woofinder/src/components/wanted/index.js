//Bartosz
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
 `;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: #e2e2e2;
 `;

const WantedItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 0 50px 0 0;
 `;

const WantedItemInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 `;

const ContainerEdit = styled.div`
    display:flex;
    justify-content:space-evenly;
    background-color:none;
    border:3px dotted black;
    border-radius:25px;
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
    padding-top: 40px;
`;

const WantedDescription = styled.div`
    width: 100%;
 `;

const WantedContact = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
 `;

const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 30px 30px;
    width: 40%
 `;

export const Wanted = () => {
    const [wantedListData, setWantedListData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const wantedListCollectionRef = collection(db, "Wanted");
    let params = useParams();
    console.log(params)
    useEffect(() => {
        const getWantedList = async () => {
            const data = await getDocs(wantedListCollectionRef);
            setWantedListData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        setIsLoading(false);
        getWantedList()
    }, [])

    const filteredWantedList = wantedListData.filter(item =>
        item.id === params.id
    );

    return <>
        <Typography variant='h6' sx={{ margin: '20px 0 20px 250px' }}>Liczba zaginięć zwierząt: {wantedListData.length}</Typography>
        <Container >
            {filteredWantedList.map((wantedList) => {
                return (
                    <Container key={wantedList.id}>
                        <DetailsWrapper>
                            <WantedItem key={wantedList.id} style={{ minWidth: '20px' }}>
                                <WantedItemInfoBox>
                                    <Avatar src="https://picsum.photos/100/100" alt="dog" sx={{ width: '6em', height: '6em', marginLeft: "15px" }} />
                                </WantedItemInfoBox>
                                <WantedItemInfoBox>
                                    <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>
                                        {wantedList.name ? wantedList.name : '---'}
                                    </Typography>
                                </WantedItemInfoBox>
                                <WantedItemInfoBox>
                                    <Specyfic>
                                        <Typography sx={{ fontSize: '1em', fontStyle: 'italic', fontWeight: '500', mb: 1 }}>
                                            Szczegóły zwierzaka:
                                        </Typography>
                                        <Typography sx={{
                                            maxWidth: '180px',
                                            minHeight: '100px',
                                            overflow: 'scroll',
                                            "&::-webkit-scrollbar": {
                                                width: 0
                                            },
                                            borderRadius: '5px',
                                        }}>
                                            {wantedList.details}
                                        </Typography>
                                    </Specyfic>
                                </WantedItemInfoBox>
                                <WantedItemInfoBox>
                                    <Typography sx={{ fontSize: '1.1em', fontWeight: '500' }}>
                                        {wantedList.citylost ? wantedList.citylost : '---'}
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
                            </WantedItem>
                            <WantedDescription>
                                <Typography sx={{
                                    margin: '20px 20px',
                                    padding: '10px',
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    minHeight: '120px',
                                }}>
                                    {wantedList.description}

                                </Typography>
                            </WantedDescription>
                            <WantedContact>
                                <ContactWrapper>
                                    <Typography>Skontaktuj się z właścicielem</Typography>
                                    <CallIcon></CallIcon>
                                    <Typography sx={{ marginLeft: '1em', fontWeight: '600' }}>{wantedList.phone}
                                    </Typography>
                                </ContactWrapper>
                                <ContactWrapper>
                                    <Typography>link do ogłoszenia:</Typography>
                                    <ContentCopyIcon></ContentCopyIcon>
                                    <Typography sx={{ marginLeft: '1em' }}>kopiuj</Typography>
                                </ContactWrapper>
                            </WantedContact>
                        </DetailsWrapper>
                    </Container>
                )
            })}
        </Container>
    </>
};
