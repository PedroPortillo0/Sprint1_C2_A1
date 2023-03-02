import logo from "../../assets/imgs/Logo.svg";
import styled from 'styled-components';


const StyledLogo = styled.img`
width: 96px;
height: 84px;
`;
function Logo() {
    return (  
       <StyledLogo src={logo} />
    );
}

export default Logo;