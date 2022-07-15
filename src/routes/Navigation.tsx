import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavigationDisplayBox from "./NavigationDisplayBox";

const Navigation_container =styled.div`
width:100%;
`
const Navigation_Box = styled.div<{scrollWidth:boolean}>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:${props => props.scrollWidth?'1200px':'100%'};
    height: 100px;
    font-size: 20px;
    background-color:white;
    border: 1px solid black;
    transition:1s width;
    margin:0 auto;
    &>a{
      text-decoration:none;
    }
`
const Navigation_Box_elem = styled.div`
`
const Navigation_display = styled.div<{ visible: boolean,scrollWidth:boolean }>`
    display:flex;
    justify-content:space-around;
    width:${props => props.scrollWidth?'1200px':'100%'};
    margin:0 auto;
    background-color:green;
    overflow:hidden;
    transition:0.5s height, 1s width;
    ${props=>props.visible? 'height:400px;' : 'height:0px;'};
`



const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollWidthChange,setScrollWidthChange] = useState(true)
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(()=>{
    
    if(scrollPosition > 100){
      setScrollWidthChange(false)
    } else{
      setScrollWidthChange(true)
    }
  },[scrollPosition])

  const displayMenu = () => {
    setVisible(true)
  }
  const hideMenu = () => {
    setVisible(false)
  }

    return (
      <Navigation_container>
        <Navigation_Box onMouseEnter={displayMenu} onMouseLeave={hideMenu} scrollWidth={scrollWidthChange}>
          <Navigation_Box_elem>
            <Link to="CSS">CSS Ver.</Link>
          </Navigation_Box_elem>
          <Navigation_Box_elem>
          <Link to="React">React Ver.</Link>
          </Navigation_Box_elem>
          <Navigation_Box_elem>
            <Link to="React">React Ver.</Link>
          </Navigation_Box_elem>
          <Navigation_Box_elem>
            <Link to="React">React Ver.</Link>
          </Navigation_Box_elem>
          <Navigation_Box_elem>
            <Link to="React">React Ver.</Link>
          </Navigation_Box_elem>
        </Navigation_Box>
        <Navigation_display onMouseEnter={displayMenu} onMouseLeave={hideMenu} visible={visible} scrollWidth={scrollWidthChange}>
          <NavigationDisplayBox />
          <NavigationDisplayBox />
          <NavigationDisplayBox />
          <NavigationDisplayBox />
          <NavigationDisplayBox />
        </Navigation_display>
      </Navigation_container>
  );
}

export default Navigation;