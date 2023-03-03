import styled from 'styled-components';

const StyledLabel = styled.label`
font-family: Comfortaa;
 font-size: 24px;
line-height: 27px;

`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
     );
}

export default Label;