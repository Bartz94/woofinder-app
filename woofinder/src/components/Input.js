import "./input.css"
import styled from "styled-components";

import { useState } from "react";


const SpecLabel = styled.label`
margin-bottom:5px;
margin-top:5px;
margin-right:120px;
font-weight:bold;
color:black;
display:flex;
flex-direction:column;
`;

  

export const FormInput = (props) => {
    

  
    const [focused, setFocused ] = useState(false);
    const {label,onChange, id,...inputProps }
     = props;
    

    const handleFocus = (e) => {
        setFocused(true);
        
    };

   

    


    return (
        <div className='formInput'>
            <input {...inputProps} 
            onChange={onChange} required 
            onBlur={handleFocus} 
            focused={focused.toString()}/>
            </div>
    )
}


