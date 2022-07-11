
import React, { useEffect, useState } from 'react';
import CountUp from './CountUpCSS';
import styled from 'styled-components';
import { Props } from '../routes/Home';
import { truncateSync } from 'fs';
import CountUpCSS from './CountUpCSS';
import CountUpReact from './CountUpReact';

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
const Award_Container__img = styled.div`
    grid-row: 1 / span 2;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
`
const Award__Img = styled.img.attrs({
    src: process.env.PUBLIC_URL+'/assets/triple2x.png'
    })`
    width:400px;
    height:338px;
`
const AwardText = styled.div`
    font-family: sans-serif;
    color: rgba(58, 58, 58, 0.7);
    position:absolute;
    bottom:145px;
    font-size: 15px;
`
const Award_Container__number = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:end;
    padding-left: 90px;
    transform:translate()
`
const Award__number = styled.div`
    display:flex;
    font-size: 36px;
    letter-spacing: -1px;
    color: rgb(58, 58, 58);
    font-family: sans-serif;
    margin-bottom:20px;
`
const Award_Container__award = styled.div`
    display:flex;
    justify-self : center;
    justify-content:space-around;
    width:550px;
    height: 80px;
    padding-left: 80px;
`
const Award_Container__award_box = styled.div`
    display:flex;
    width: 250px;
    align-items: center;
`
const Award__textimage_google = styled.img.attrs({
    src: process.env.PUBLIC_URL+'/assets/play-store2x.png'
    })`
    height:54px;
`
const Award__textimage_apple = styled.img.attrs({
    src: process.env.PUBLIC_URL+'/assets/badge-apple4x.png'
    })`
    height:54px;
`
const Award__text = styled.div`
    display: flex;
    justify-self: flex-start;
    font-size:14px;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
    line-height: 22px;
    padding-left: 10px;
`


const Award = (props:Props['props']) => {
  const [type,setType] = useState(props.id)
    useEffect(()=>{
      setType(props.id)
    },[props])

    return (
        <AwardContainer>
          <AwardContainer__grid>
            <Award_Container__img>
              <Award__Img/>
              <AwardText>2021년 12월 기준</AwardText>
            </Award_Container__img>
            <Award_Container__number>
            {type === 'CSS' ?
              ( 
                <>
                  <Award__number><CountUpCSS startNum={0} lastNum={700} duration={2000} word={'명'} />의 여행자{type}</Award__number>
                  <Award__number><CountUpCSS startNum={0} lastNum={450} duration={2000} word={'개'}/>의 여행 리뷰</Award__number>
                  <Award__number><CountUpCSS startNum={0} lastNum={100} duration={2000} word={'개'}/>의 여행 일정</Award__number>
                </>
              )
            :
              (
                <>
                  <Award__number><CountUpReact startNum={0} lastNum={700} duration={2000} word={'명'} />의 여행자{type}</Award__number>
                  <Award__number><CountUpReact startNum={0} lastNum={450} duration={2000} word={'개'}/>의 여행 리뷰</Award__number>
                  <Award__number><CountUpReact startNum={0} lastNum={100} duration={2000} word={'개'}/>의 여행 일정</Award__number>
                </>
              )
            }
            </Award_Container__number>
            <Award_Container__award>
              <Award_Container__award_box>
                <Award__textimage_google/>
                <Award__text>2018 구글 플레이스토어<br/> 올해의 앱 최우수상 수상</Award__text>
              </Award_Container__award_box>
              <Award_Container__award_box>
                <Award__textimage_apple/>
                <Award__text>2018 애플 앱스토어<br/> 오늘의 여행앱 선정</Award__text>
              </Award_Container__award_box>
            </Award_Container__award>
          </AwardContainer__grid>
        </AwardContainer>
    );
  }
  
  export default Award