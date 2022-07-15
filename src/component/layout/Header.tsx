import React from "react";
import styled from "styled-components";
import Navigation from "../../routes/Navigation";

const HeaderContainer = styled.header`
  display:flex;
  justify-content:center;
  position:fixed;
  left:0;
  right:0;
  z-index:10;
`


const Header = () => {
    return (
    <HeaderContainer>
        <Navigation />
    </HeaderContainer>
  );
}

export default Header;