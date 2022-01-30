import styled from 'styled-components';
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { UserPanel } from '../userpanel';
import { Link } from 'react-router-dom';


const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    height: 120px;
    background-color: rgba(89, 252, 170, 1);
background-image: linear-gradient(90deg, rgba(89, 252, 170, 1) 0%, rgba(41, 86, 78, 1) 100%);
`;





export const Top = () => {
    return (
        <>
            <TopBar>
                <Typography variant="h4" sx={{ color: 'black', fontSize: '3em', fontFamily: 'Segoe UI', fontWeight: 'bold', margin: '30px' }}>WOOF<span className='stylefont'>inder</span>
                </Typography>
                <UserPanel />
            </TopBar>

        </>
    );
}

