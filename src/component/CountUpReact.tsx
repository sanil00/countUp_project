import React, { useEffect, useRef, useState } from 'react'

import '../css/App.css';
interface CountProps {
    startNum:number,
    lastNum:number,
    duration:number,
    word:string,
  }

  type Ref = () => number

  const CountUpReact:React.FC<CountProps> = ({startNum,lastNum,duration,word}) => {
    const [count, setCount] = useState(1);
    const [speed,setSpeed] = useState(duration)

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

export default CountUpReact;