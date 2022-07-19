import React from 'react';
import styled from 'styled-components';
import {MenuProps} from '../../types/typeProps'

const MenuContainer = styled.div`
    display:grid;
    height:100vh;
    grid-template-rows : repeat(4, 25%);
    grid-template-columns : repeat(4, 25%);
`
const MenuContainer_Item__img = styled.img.attrs<MenuProps['imgProps']>((props)=>({
    src: process.env.PUBLIC_URL+`/assets/${props.imgNum}.png`
    }))<MenuProps['imgProps']>`
    grid-row:${props=>props.row.startRow} / ${props=>props.row.lastRow};
    grid-column:${props=>props.column.startColumn} / ${props=>props.column.lastColumn};
`
const MenuContainer_Item__text = styled.div<MenuProps['textProps']>`
    width:100px;
    &:hover{

    }
`

const Menu: React.FC = () =>{
    
    return (
    <MenuContainer>
        <MenuContainer_Item__img imgNum='1' row={{startRow:1,lastRow:4}} column={{startColumn:1,lastColumn:1}} />
        <MenuContainer_Item__text row={{startRow:1,lastRow:4}} column={{startColumn:2,lastColumn:2}} />
        <MenuContainer_Item__img imgNum='2' row={{startRow:1,lastRow:1}} column={{startColumn:3,lastColumn:3}} />
        <MenuContainer_Item__img imgNum='3' row={{startRow:2,lastRow:4}} column={{startColumn:3,lastColumn:3}} />
        <MenuContainer_Item__text row={{startRow:1,lastRow:2}} column={{startColumn:4,lastColumn:4}} />
        <MenuContainer_Item__img imgNum='4' row={{startRow:2,lastRow:4}} column={{startColumn:4,lastColumn:4}} />
    </MenuContainer>
    )
}


export default Menu