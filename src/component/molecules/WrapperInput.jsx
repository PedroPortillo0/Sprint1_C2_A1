import Title from "../atoms/title";
import Input from "../atoms/Input";
import styled from 'styled-components';

const StyledWrapperInput = styled.div`
width: 100%;
height: 20%;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction: column;
`;

function WrapperlInput({msn,type}) {
    return ( 
        <StyledWrapperInput>
        <Title msn={msn}/>
        <Input type={type}/>
        </StyledWrapperInput>
     );
}

export default WrapperlInput;