import styled from 'styled-components';
import Typography from "@mui/material/Typography";
import * as React from 'react';

   const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    height: 120px;
    background-color:#7a7d80;
    margin-bottom:400px; 
 
`;
export const Top = () => {
    return (
        <>
           <TopBar>
               <Typography variant="h4" sx={{ color: 'white', fontSize: '2em',margin: '30px' }}>WOOFinder</Typography>
           </TopBar>
        </>
      );
}
 
