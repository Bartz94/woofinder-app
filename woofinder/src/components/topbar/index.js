import styled from 'styled-components';
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { UserPanel } from '../userpanel';


const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    height: 120px;
    background-color:#E2E2E2;
 
`;





export const Top = () => {
    return (
        <>
            <TopBar>
                <Typography variant="h4" sx={{ color: 'black', fontSize: '3em', fontFamily: 'Segoe UI', fontWeight: 'bold', margin: '30px' }}>WOOF<span className='stylefont'>inder</span></Typography>
                <UserPanel />
                </TopBar>

        </>
    );
}

