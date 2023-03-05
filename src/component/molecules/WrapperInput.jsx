import Label from "../atoms/Label";
import Input from "../atoms/Input";
import styled from 'styled-components';

const StyledWrapperInput = styled.div`
width: 100%;
height: 20%;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction: column;
padding-top: 5%;


`;

function WrapperlInput({msn,type}) {
    return ( 
        <StyledWrapperInput>
        <Label msn={msn}/>
        <Input type={type}/>
        </StyledWrapperInput>
     );
}

export default WrapperlInput;