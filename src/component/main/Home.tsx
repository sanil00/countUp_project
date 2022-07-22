import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {HomeProps} from '../../types/typeProps'
import Award from './Award'
import Card from './Card'
import Menu from './Menu'
import Slider from './Slider'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`


const Home:React.FC = () => {
    const { id } = useParams();
    
    const [props,setProps] = useState<HomeProps['props']>({id})
        useEffect(()=>{
            setProps({id})
        },[id])
    
    return (
        <Container className="App">
            <Slider/>
            <Card />
            <Menu />
            <Award {...props} />
        </Container> 
    )
}

export default Home