import styled from 'styled-components';
import WrapperlInput from "../molecules/WrapperInput";
import Button from '../atoms/Button';

const StyledContainer = styled.div` //padre
width:100%;
height:100vh;

display:flex;
`;

const StyledInputGroup = styled.div` //hijo1
width:50%;
height: 100%;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
`;

const StyledButton = styled.div` //hijo(1,1) lado izquierdo
/* border: 2px solid red; */
width:50%;
height: 5%;
justify-content:center;
align-items:flex-start;
display:flex;
flex-direction:column;
`;

const StyledContainerhijo = styled.div` //hijo(2,1) lado derecho
width:50%;
height: 50vh;
justify-content:center;
border-radius: 10px;
align-items:center;
display:flex;
flex-direction:column;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 4px 7px 15px rgba(0, 0, 0, 0.08), inset -1px 4px 2px rgba(201, 201, 201, 0.1), inset -5px 5px 12px rgba(255, 255, 255, 0.05), inset 5px -5px 12px rgba(255, 255, 255, 0.05);
backdrop-filter: blur(75px);
`;

const StyledContainer2 = styled.div` //hijo2

width:50%;
height: 100%;
background: linear-gradient(90deg, rgba(48, 191, 206, 0.8) 0.29%, rgba(48, 191, 206, 0.6) 50.52%, rgba(48, 191, 206, 0.5) 100%);
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
`;

function GroupInputs() {
    return (
        //padre
        <StyledContainer>
           
            <StyledInputGroup >

                <WrapperlInput 
                msn="correo:"
                type="text">
                </ WrapperlInput>
                <WrapperlInput 
                    msn="contraseña:"
                    type="password">
                </ WrapperlInput>
                <StyledButton>
                <Button ></Button>
                </StyledButton>
                    
            </StyledInputGroup >

                <StyledContainer2>
                  <StyledContainerhijo>

                  </StyledContainerhijo>
                </StyledContainer2>
        </StyledContainer> //fin padre
    );
}

export default GroupInputs;