//Bartosz
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { Container } from '@mui/material';

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
    align-items: center;
 `;

const DetailsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
 `;

const FooterSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 25px;
 `;

const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
 `;


export const Wanted = () => {
    return <>
        <Typography variant='h6' sx={{ alignSelf: 'left' }}>Liczba zaginięć zwierząt:{Math.floor(Math.random() * 100)}</Typography>
        <Container fixed maxWidth='lg' sx={{ marginTop: '20px', backgroundColor: '#f2f2f2', borderRadius: '0 50px 0 0', minHeight: '50vh' }}>
            <InfoSection style={{ padding: '10px', margin: '10px' }}>
                <div>
                    <Avatar src="https://picsum.photos/100/100" alt="dog" sx={{ width: '7em', height: '7em' }} />
                </div>
                <div>
                    <Typography sx={{ fontSize: '1.8em', fontWeight: 'bold', margin: '' }}>Lulek</Typography>
                </div>
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
                <div>
                    <Typography>Zobacz na mapie</Typography>
                </div>
                <div>
                    <Typography>Warszawa</Typography>
                </div>
                <div>
                    <Typography>Jeśli widziałeś zwierzaka napisz</Typography>
                    <Typography>Pokaż więcej</Typography>
                </div>
            </InfoSection>
            <DetailsSection style={{ marginBottom: '20px' }}>
                <Box sx={{
                    backgroundColor: '#ffff',
                    backgroundSize: 'cover',
                    padding: '30px',
                    borderRadius: '25px',
                }}>
                    <Typography sx={{ fontSize: '1.2em', fontWeight: '500', }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.r since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.r since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.r since the 1500s, when an unknown printer took a galley of type and scrambled
                    </Typography>
                </Box>
            </DetailsSection>
            <FooterSection>
                <ContactWrapper>
                    <Typography>Skontaktuj się z właścicielem</Typography>
                    <Typography sx={{ marginLeft: '3em', fontWeight: '600' }}>500 000 400</Typography>
                </ContactWrapper>
                <ContactWrapper>
                    <Typography>link do ogłoszenia:</Typography>
                    <Typography sx={{ marginLeft: '3em' }}>kopiuj</Typography>
                </ContactWrapper>
            </FooterSection>
        </Container>
    </>;
};
