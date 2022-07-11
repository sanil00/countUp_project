import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const HeaderContainer = styled.header`

`


const Header = () => {
    return (
    <HeaderContainer>
        <Navigation />
    </HeaderContainer>
  );
}

export default Header;