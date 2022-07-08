import React from 'react'
import styled, { keyframes } from 'styled-components';
import '../css/App.css';
interface CountProps {
    startNum:number,
    lastNum:number,
    duration:number,
    word:string,
  }

  const CountUp:React.FC<CountProps> = ({startNum,lastNum,duration,word}) => {
    const countType = keyframes`
      from {
        --num: ${startNum};
      }
      to {
        --num: ${lastNum};
      }
    `
    const Box = styled.div`
      counter-reset: num var(--num);
      font: 800 40px system-ui;
      animation: ${countType} ${duration/1000}s cubic-bezier(0.000, 1.055, 0.000, 0.995);
      animation-fill-mode: forwards;
        &:before {
          content: counter(num);
      }
    `
    return <Box><strong>만 {word}</strong></Box>;
  }

export default CountUp;