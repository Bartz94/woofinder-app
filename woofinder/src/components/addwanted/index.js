//Marcin
import styled from 'styled-components';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    height: 120px;
      
`;

export const  AddWanted = () => {

    return (
       <>
           <hr></hr> 
            <Container>
                    <Typography variant="h4" sx={{ mb: 2 }}>CHCESZ ZGŁOSIĆ ZAGINIĘCIE ZWIERZAKA ?</Typography>
                    <Button variant='outlined' sx={{ color: 'white', fontSize: '1em', borderRadius: '20px',backgroundColor:'#7a7d80' }} >Dodaj ogłoszenie</Button>
            </Container>
            <hr></hr> 
       </>
      );  
}
 
