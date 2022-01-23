//Marcin
import styled from 'styled-components';
import Typography from "@mui/material/Typography";
import { AddFormWanted } from '../addformwanted';



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
                <AddFormWanted></AddFormWanted>
            </Container>
             <hr></hr> 
            
       </>
      );  
}
 
