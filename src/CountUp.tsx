import React, { useEffect, useRef, useState } from 'react'

interface CountProps {
    startNum:number,
    lastNum:number,
    duration:number,
    word:string,
  }

  type Ref = () => number

  const CountUp:React.FC<CountProps> = ({startNum,lastNum,duration,word}) => {
    const [count, setCount] = useState(1);
    const [speed,setSpeed] = useState(duration)
    const moving = position.y.interpolate({
        inputRange: [0, 700],
        outputRange: [10, 1],
        extrapolate: "clamp",
    })
    const savedCallback:React.MutableRefObject<Ref> = useRef(callback);
  
    function callback() {

      setCount(count + 1);
      return count
    }
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
        function countUp():void {
        if(typeof savedCallback === "object" ){
            const count:number = savedCallback.current();
                if(count > lastNum){
                    clearInterval(start_id);
                }
        } 
      }
      const start_id:NodeJS.Timer = setInterval(countUp, speed);
      

    }, []);
    
  
    return <div><strong>{count}만 {word}</strong></div>;
  }

export default CountUp;