import styled from 'styled-components';

const StyledLabel = styled.label`
font-weight: bold;
`;
function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
     );
}

export default Label;