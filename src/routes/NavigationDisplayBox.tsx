import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation_display_Box = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around
`

const Navigation_display_Box_elem = styled.div`
`
const NavigationDisplayBox = () => {

    return (
    <Navigation_display_Box>
        <Navigation_display_Box_elem>
            <Link to="CSS">CSS elem Ver.</Link>
        </Navigation_display_Box_elem>
        <Navigation_display_Box_elem>
        <Link to="React">React elem Ver.</Link>
        </Navigation_display_Box_elem>
        <Navigation_display_Box_elem>
            <Link to="React">React elem Ver.</Link>
        </Navigation_display_Box_elem>
        <Navigation_display_Box_elem>
            <Link to="React">React elem Ver.</Link>
        </Navigation_display_Box_elem>
        <Navigation_display_Box_elem>
            <Link to="React">React elem Ver.</Link>
        </Navigation_display_Box_elem>
    </Navigation_display_Box>
)
}

export default NavigationDisplayBox