
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CountUpCSS from '../../hook/CountUpCSS';
import CountUpReact from '../../hook/CountUpReact';
import {AwardProps} from '../../types/typeProps'

const Up = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

`
const AwardContainer = styled.div`
    display:flex;
    justify-content:center;
    height:552px;
`
const AwardContainer__grid = styled.div`
    display:grid;
    grid-template-columns: 600px 600px;
    grid-template-rows: 300px auto;
    width:1200px;
`
const AwardContainer_Img = styled.div`
    grid-row: 1 / span 2;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    animation:${Up} 2s;
`
const Award_Img__img = styled.img.attrs({
    src: process.env.PUBLIC_URL+'/assets/triple2x.png'
    })`
    width:400px;
    height:338px;
`
const Award_Img__text = styled.div`
    font-family: sans-serif;
    color: rgba(58, 58, 58, 0.7);
    position:absolute;
    bottom:145px;
    font-size: 15px;
`
const AwardContainer_Number = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:end;
    padding-left: 90px;
    animation:${Up} 0.8s;

`
const Award_Number__number = styled.div`
    display:flex;
    font-size: 36px;
    letter-spacing: -1px;
    color: rgb(58, 58, 58);
    font-family: sans-serif;
    margin-bottom:20px;
`
const AwardContainer_Award = styled.div`
    display:flex;
    justify-self : center;
    justify-content:space-around;
    width:550px;
    height: 80px;
    padding-left: 80px;
    animation:${Up} 0.9s;
`
const Award_Award_box = styled.div`
    display:flex;
    width: 250px;
    align-items: center;
`
const Award_Award__img_google = styled.img.attrs({
    src: process.env.PUBLIC_URL+'/assets/play-store2x.png'
    })`
    height:54px;
`
const Award_Award__img_apple = styled.img.attrs({
    src: process.env.PUBLIC_URL+'/assets/badge-apple4x.png'
    })`
    height:54px;
`
const Award_Award__text = styled.div`
    display: flex;
    justify-self: flex-start;
    font-size:14px;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
    line-height: 22px;
    padding-left: 10px;
`


const Award:React.FC<AwardProps['props']> = (props:AwardProps['props']) => {
  const [type,setType] = useState(props.id)
    useEffect(()=>{
      setType(props.id)
    },[props])

    return (
        <AwardContainer>
          <AwardContainer__grid>
            <AwardContainer_Img>
                <Award_Img__img/>
              <Award_Img__text>2021년 12월 기준</Award_Img__text>
            </AwardContainer_Img>
            <AwardContainer_Number>
            {type === 'CSS' ?
              ( 
                <>
                  <Award_Number__number><CountUpCSS startNum={0} lastNum={700} duration={2000} word={'명'} />의 여행자</Award_Number__number>
                  <Award_Number__number><CountUpCSS startNum={0} lastNum={100} duration={2000} word={'개'}/>의 여행 리뷰</Award_Number__number>
                  <Award_Number__number><CountUpCSS startNum={0} lastNum={470} duration={2000} word={'개'}/>의 여행 일정</Award_Number__number>
                </>
              )
            :
              (
                <>
                  <Award_Number__number><CountUpReact startNum={0} lastNum={700} duration={2000} word={'명'} />의 여행자</Award_Number__number>
                  <Award_Number__number><CountUpReact startNum={0} lastNum={100} duration={2000} word={'개'}/>의 여행 리뷰</Award_Number__number>
                  <Award_Number__number><CountUpReact startNum={0} lastNum={470} duration={2000} word={'개'}/>의 여행 일정</Award_Number__number>
                </>
              )
            }
            </AwardContainer_Number>
            <AwardContainer_Award>
              <Award_Award_box>
                <Award_Award__img_google/>
                <Award_Award__text>2018 구글 플레이스토어<br/> 올해의 앱 최우수상 수상</Award_Award__text>
              </Award_Award_box>
              <Award_Award_box>
                <Award_Award__img_apple/>
                <Award_Award__text>2018 애플 앱스토어<br/> 오늘의 여행앱 선정</Award_Award__text>
              </Award_Award_box>
            </AwardContainer_Award>
          </AwardContainer__grid>
        </AwardContainer>
    );
  }
  
  export default Award