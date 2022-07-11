import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navigation_Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    font-size: 20px;
    &>a{
      text-decoration:none;
    }
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