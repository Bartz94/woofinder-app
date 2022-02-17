import "./input.css"
import { TextField } from '@mui/material'
import styled from "styled-components";

const SpecLabel = styled.label`
color:red;
display:flex;
flex-direction:column;
align-items:center;
justify-content: flex-end;
`;


export const FormInput = (props) => {
    const {label, onChange, id,...inputProps } = props;

    return (
        <div className='formInput'>
            <SpecLabel>{label}</SpecLabel>
            <input {...inputProps} onChange={onChange} />
        </div>
    )
}


