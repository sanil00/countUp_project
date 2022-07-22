import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import {MenuProps} from '../../types/typeProps'



const MenuContainer = styled.div`
display:grid;
height:100vh;
gap:5px;
grid-template-columns : repeat(auto-fit, minmax(20%, auto));
`
const MenuContainer_Box = styled.div<MenuProps['textProps']>`
grid-row:${props=>props.row.startRow} / ${props=>props.row.lastRow};
grid-column:${props=>props.column.startColumn} / ${props=>props.column.lastColumn};
width:100%;
height:100%;
background-color:rgb(181,215,146);

display:flex;
flex-direction:column
`
const MenuContainer_Box__item = styled.div`
height:20px;
width:100%;
`
const Menu: React.FC = () =>{
    // const queryClient = useQueryClient()

    // const query = useQuery(['todos'], getTodos)

    // const mutation = useMutation(postTodo, {
    //     onSuccess: () => {
    //       // Invalidate and refetch
    //       queryClient.invalidateQueries(['todos'])
    //     },
    //   })
      
    return (
    <MenuContainer>
        <MenuContainer_Box row={{startRow:1,lastRow:1}} column={{startColumn:1,lastColumn:2}}>
            <MenuContainer_Box__item>1</MenuContainer_Box__item>
            <MenuContainer_Box__item>2</MenuContainer_Box__item>
            <MenuContainer_Box__item>3</MenuContainer_Box__item>
            <MenuContainer_Box__item>4</MenuContainer_Box__item>
        </MenuContainer_Box>
        <MenuContainer_Box row={{startRow:1,lastRow:1}} column={{startColumn:2,lastColumn:3}}>
            <MenuContainer_Box__item>5</MenuContainer_Box__item>
            <MenuContainer_Box__item>6</MenuContainer_Box__item>
            <MenuContainer_Box__item>7</MenuContainer_Box__item>
            <MenuContainer_Box__item>8</MenuContainer_Box__item>
        </MenuContainer_Box>
        <MenuContainer_Box row={{startRow:1,lastRow:1}} column={{startColumn:3,lastColumn:5}}>
            <MenuContainer_Box__item/>
            <MenuContainer_Box__item/>
            <MenuContainer_Box__item/>
            <MenuContainer_Box__item/>
        </MenuContainer_Box>
    </MenuContainer>
    )
}


export default Menu