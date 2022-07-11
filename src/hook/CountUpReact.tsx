import React, { useEffect, useState } from 'react'

interface CountProps {
    startNum:number,
    lastNum:number,
    duration:number,
    word:string,
  }

  
  const CountUpReact:React.FC<CountProps> = ({startNum,lastNum,duration,word}) => {
    const [currentNum, setCurrentNum] = useState(startNum);
    const [count, setCount]= useState(1)

    const easeOutQuint=(x: number): number => {
      return 1 - Math.pow(1 - x, 5);
    }
    
    const callback = ()=> {
      if(count/100 > 0.9 ){
        return lastNum
      }else{
        return lastNum*easeOutQuint(count/100)
      }
    }
      
  useEffect(() => {
    const timer = setTimeout(() => {
    const currentNum = callback()
    if(currentNum <= lastNum){
      setCurrentNum(currentNum)
      setCount(count+1)
     } 
  }, duration/100);
    return () => clearTimeout(timer)
  }, [currentNum]);

  return <div><strong>{Math.round(currentNum)}만 {word}</strong></div>;
}

export default CountUpReact;