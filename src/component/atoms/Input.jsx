import styled from 'styled-components';


const StyledInput = styled.input`
 border: 2px solid black;
 width: 446px;
 height: 52px;
 border-radius: 8px; 
 font-family: Comfortaa;
 font-size: 24px;
line-height: 27px;



`;

function Input({type}){
    return(
        <StyledInput type={type}  />
    )
}

export default Input;