import React from 'react';
import styled from 'styled-components';
import {CardProps} from '../../types/typeProps'

    const CardContainer = styled.div`
        display:grid;
        height:100vh;
        grid-template-rows : repeat(auto-fit, minmax(20%, auto));
        grid-template-columns : repeat(auto-fit, minmax(20%, auto));
        gap:5px;  
    `
// const CardContainer_Item__img = styled.img.attrs<CardProps['imgProps']>((props)=>({
//     src: process.env.PUBLIC_URL+`/assets/main/${props.imgNum}.png`
//     }))<CardProps['imgProps']>`
//     grid-row:${props=>props.row.startRow} / ${props=>props.row.lastRow};
//     grid-column:${props=>props.column.startColumn} / ${props=>props.column.lastColumn};
//     width: 100%;
//     height: 100%;
//     overflow:hidden;
    
//     &:hover{
//         transform: scale(1.1);
//         transition: .8s ease;
//     }
// `
    const CardContainer_Item__img = styled.img.attrs<CardProps['imgProps']>((props)=>({
        src: process.env.PUBLIC_URL+`/assets/main/${props.imgNum}.png`
        }))<CardProps['imgProps']>`
        grid-row:${props=>props.row.startRow} / ${props=>props.row.lastRow};
        grid-column:${props=>props.column.startColumn} / ${props=>props.column.lastColumn};
        width: 100%;
        height: 100%;
        
        &:hover{
            
        }
    `

    const CardContainer_Item__text = styled.div<CardProps['textProps']>`
        grid-row:${props=>props.row.startRow} / ${props=>props.row.lastRow};
        grid-column:${props=>props.column.startColumn} / ${props=>props.column.lastColumn};
        width:100%;
        height:100%;
        background-color:green;
    `

    const Card: React.FC = () =>{
        
        return (
        <CardContainer>
            <CardContainer_Item__img imgNum='5' row={{startRow:1,lastRow:3}} column={{startColumn:1,lastColumn:5}} />
            {/* <CardContainer_Item__text row={{startRow:2,lastRow:2}} column={{startColumn:1,lastColumn:5}} /> */}
            <CardContainer_Item__img imgNum='6' row={{startRow:3,lastRow:3}} column={{startColumn:1,lastColumn:2}} />
            <CardContainer_Item__img imgNum='7' row={{startRow:3,lastRow:3}} column={{startColumn:2,lastColumn:5}} />
            <CardContainer_Item__text row={{startRow:4,lastRow:4}} column={{startColumn:1,lastColumn:3}} />
            <CardContainer_Item__img imgNum='8' row={{startRow:4,lastRow:4}} column={{startColumn:3,lastColumn:5}} />
        </CardContainer>
        )
    }


    export default Card