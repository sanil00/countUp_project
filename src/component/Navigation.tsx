import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navigation_Box = styled.div`
`

const Navigation = () => {
    return (
    <Navigation_Box>
      <Link to="CSS">CSS Ver.</Link>
      <Link to="React">React Ver.</Link>
    </Navigation_Box>
  );
}

export default Navigation;